import { NextResponse } from "next/server";
import { Resend } from "resend";

type WaitlistPayload = {
  firstName: string;
  email: string;
  inHouston: boolean;
  source?: string;
};

const isValidPayload = (value: unknown): value is WaitlistPayload => {
  if (!value || typeof value !== "object") return false;

  const payload = value as Record<string, unknown>;

  return (
    typeof payload.firstName === "string" &&
    payload.firstName.trim().length > 0 &&
    typeof payload.email === "string" &&
    payload.email.trim().length > 0 &&
    typeof payload.inHouston === "boolean" &&
    (typeof payload.source === "undefined" || typeof payload.source === "string")
  );
};

const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const buildConfirmationHtml = (firstName: string) => `
  <div style="font-family: Georgia, 'Times New Roman', serif; background: #f8efea; color: #311d1b; padding: 32px;">
    <div style="max-width: 640px; margin: 0 auto; background: #fffaf7; border: 1px solid #ead0c6; border-radius: 24px; padding: 40px;">
      <p style="margin: 0 0 16px; letter-spacing: 0.18em; text-transform: uppercase; font-size: 12px; color: #9a6d65;">
        Official Invitation
      </p>
      <h1 style="margin: 0 0 20px; font-size: 40px; line-height: 1.1; font-weight: 500;">
        You're officially invited.
      </h1>
      <p style="margin: 0 0 18px; font-size: 18px; line-height: 1.8; color: #5a4744;">
        ${firstName.trim()}, you’re invited to the Free VALA Somatic Course (Nightworker Edition), a luxury, feminine 35-minute somatic reset for women who stay “on” long after work ends.
      </p>
      <p style="margin: 0 0 18px; font-size: 18px; line-height: 1.8; color: #5a4744;">
        Your shift ended… but your body didn’t. This guided experience helps your nervous system return to calm through intentional post-shift decompression.
      </p>
      <p style="margin: 0 0 28px; font-size: 18px; line-height: 1.8; color: #5a4744;">
        Exhale. Soften. Let your body come home to itself.
      </p>
      <p style="margin: 0 0 28px;">
        <a
          href="https://intro-vala-somatic-git-codex-nightworker-pr-hypnovalas-projects.vercel.app/"
          style="display: inline-block; background: #543733; color: #fffaf7; text-decoration: none; padding: 12px 24px; border-radius: 9999px; letter-spacing: 0.08em; text-transform: uppercase; font-size: 12px;"
        >
          Begin Your Reset
        </a>
      </p>
      <p style="margin: 0; font-size: 16px; line-height: 1.8; color: #7a6661;">
        ${firstName.trim()},
      </p>
      <p style="margin: 4px 0 0; font-size: 16px; line-height: 1.8; color: #7a6661;">
        Brock VALA
      </p>
    </div>
  </div>
`;

const buildConfirmationText = (firstName: string) =>
  [
    "You're officially invited.",
    "",
    `${firstName.trim()}, you’re invited to the Free VALA Somatic Course (Nightworker Edition).`,
    "Your shift ended… but your body didn’t.",
    "This 35-minute somatic reset is designed for women who stay “on” long after work ends and supports your body in returning to calm.",
    "",
    "Begin Your Reset:",
    "https://intro-vala-somatic-git-codex-nightworker-pr-hypnovalas-projects.vercel.app/",
    "",
    "Exhale. Soften. Let your body come home to itself.",
    "",
    "Brock VALA",
  ].join("\n");

export async function GET() {
  return NextResponse.json(
    {
      message: "Waitlist endpoint is live. Send a POST request with firstName, email, and inHouston.",
    },
    { status: 200 },
  );
}

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();

    if (!isValidPayload(body)) {
      return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
    }

    const { firstName, email, inHouston, source } = body;

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Please provide a valid email address." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFromEmail = process.env.RESEND_FROM_EMAIL;
    const waitlistNotifyEmail =
      process.env.WAITLIST_NOTIFY_EMAIL ?? process.env.WAITLIST_TEAM_EMAIL;

    if (!resendApiKey || !resendFromEmail) {
      console.error("Resend waitlist configuration is missing.", {
        hasApiKey: Boolean(resendApiKey),
        hasFromEmail: Boolean(resendFromEmail),
      });

      return NextResponse.json({ message: "Server email configuration is missing." }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);

    // Invitation email is part of the user-facing flow, so we fail loudly if it cannot be sent.
    const confirmationResult = await resend.emails.send({
      from: resendFromEmail,
      to: email,
      subject: "You're officially invited — VALA Somatic Course",
      html: buildConfirmationHtml(firstName),
      text: buildConfirmationText(firstName),
    });

    if (confirmationResult.error) {
      console.error("Failed to send waitlist invitation email.", confirmationResult.error);
      return NextResponse.json({ message: "Unable to send invitation email." }, { status: 500 });
    }

    // Internal notifications are helpful, but they should not block a successful user signup.
    if (waitlistNotifyEmail && isValidEmail(waitlistNotifyEmail)) {
      const notifyResult = await resend.emails.send({
        from: resendFromEmail,
        to: waitlistNotifyEmail,
        subject: "New VALA Nightworker Waitlist Signup",
        text: [
          "New waitlist signup received:",
          `First name: ${firstName}`,
          `Email: ${email}`,
          `Source: ${source ?? "unknown"}`,
          `In Houston: ${inHouston ? "Yes" : "No"}`,
          `Submitted at: ${new Date().toISOString()}`,
        ].join("\n"),
      });

      if (notifyResult.error) {
        console.error("Failed to send internal waitlist notification email.", notifyResult.error);
      }
    } else if (waitlistNotifyEmail) {
      console.warn("WAITLIST_NOTIFY_EMAIL is set but invalid. Skipping internal waitlist notification.");
    }

    return NextResponse.json({
      success: true,
      message: "You’re on the waitlist. Check your email for confirmation.",
    });
  } catch (error) {
    console.error("Waitlist API error:", error);

    return NextResponse.json({ message: "Something went wrong. Please try again." }, { status: 500 });
  }
}
