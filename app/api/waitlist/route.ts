import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      email?: string;
      firstName?: string;
      source?: string;
    };

    const email = body.email?.trim().toLowerCase();
    const firstName = body.firstName?.trim() || "";
    const source = body.source?.trim() || "site";

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const webhookUrl = process.env.WAITLIST_WEBHOOK_URL;

    if (!webhookUrl) {
      return NextResponse.json(
        {
          message:
            "Waitlist is not fully configured yet. Add WAITLIST_WEBHOOK_URL in Vercel to enable submissions.",
        },
        { status: 503 },
      );
    }

    const upstreamResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        firstName,
        source,
        brand: "VALA Somatic Membership",
      }),
    });

    if (!upstreamResponse.ok) {
      return NextResponse.json(
        { message: "The waitlist service is unavailable right now. Please try again shortly." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      message: "You’re on the list. Watch your inbox for the next VALA update.",
    });
  } catch {
    return NextResponse.json(
      { message: "Unable to submit right now. Please try again shortly." },
      { status: 500 },
    );
  }
}
