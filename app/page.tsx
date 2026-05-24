import fs from "node:fs";
import path from "node:path";
import WaitlistForm from "../components/WaitlistForm";

const courseHighlights = [
  {
    title: "A 35-minute post-shift reset",
    body:
      "A guided somatic sequence built for the moment your body is still buzzing after a long night of performance, service, noise, lights, and emotional labor.",
  },
  {
    title: "Luxury pacing, not hustle energy",
    body:
      "The course is designed to feel elegant, gentle, and contained so your nervous system can come down without being pushed or flooded.",
  },
  {
    title: "Nightlife-specific language",
    body:
      "Everything is written for women who work at night: dancers, bottle girls, cocktail servers, entertainers, hosts, and others carrying the afterglow of a high-intensity shift.",
  },
  {
    title: "Body-led regulation",
    body:
      "Breath, orientation, tension release, and sensory awareness help you transition out of survival mode and back toward softness, safety, and sleep.",
  },
];

const whoItsFor = [
  "Nightlife women coming home wired after late shifts",
  "Dancers, servers, entertainers, and hosts holding a lot in the body",
  "Women who feel overstimulated, tense, restless, or emotionally spun up after work",
  "Anyone wanting a feminine ritual to come down gently before sleep",
];

const afterShiftMoments = [
  "The car ride home when your mind is still racing",
  "The moment you shower but still cannot settle",
  "The quiet hour when your body feels tired but your system feels loud",
  "The nights when you want to soften instead of dissociate",
];

const resetSteps = [
  "Arrive back in your body without forcing yourself to calm down instantly.",
  "Discharge accumulated tension from the jaw, chest, shoulders, belly, and hips.",
  "Guide your system from nightclub alertness toward grounded, feminine exhale energy.",
  "Close the night with a repeatable ritual your body can trust.",
];

const courseModules = [
  {
    title: "Module 1 — Arrival & Body Check-In",
    body:
      "A soft opening that helps you notice where your body is still holding the night before trying to change anything.",
  },
  {
    title: "Module 2 — Performance Mode Awareness",
    body:
      "Understand why your system may still feel on after smiling, serving, dancing, hosting, or being seen all shift.",
  },
  {
    title: "Module 3 — Breath & Sensory Downshift",
    body:
      "A simple breathing and awareness practice to help your body begin moving from alertness into calm.",
  },
  {
    title: "Module 4 — Jaw, Chest & Shoulder Release",
    body:
      "A guided release for the places that often hold pressure, attention, tension, and emotional labor after work.",
  },
  {
    title: "Module 5 — Grounding Back Into Safety",
    body:
      "A body-led reset that helps you feel steady, supported, and more present before sleep.",
  },
  {
    title: "Module 6 — Soft Feminine Reconnection",
    body:
      "A gentle practice for returning to softness, self-worth, and connection with your body after performance mode.",
  },
  {
    title: "Module 7 — Closing Night Ritual",
    body:
      "A repeatable end-of-night ritual your body can learn to trust after late shifts.",
  },
];

const previewTags = [
  "Bottle girls & cocktail servers",
  "Entertainers & performers",
  "Club hosts & nightlife staff",
  "Creators & models",
];

const introOfferExclusions = [
  "No extended course library",
  "No ongoing monthly support",
  "No full access tier inclusions",
];

const fullAccessFeatures = [
  "Full access to the 35-minute VALA Nightworker Somatic Reset",
  "A deeper, more complete nervous system support entry point",
  "Designed for women who want the full course experience now",
];

export default function Page() {
  const narratorVideoPath = path.join(process.cwd(), "public", "video", "dreanna_vala_narrator.mp4");
  const hasNarratorVideo = fs.existsSync(narratorVideoPath);

  return (
    <main className="min-h-screen bg-[var(--vala-sand)] text-[var(--vala-ink)]">
      <nav className="sticky top-0 z-50 border-b border-[var(--vala-line)] bg-[var(--vala-cream)]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <a href="#" className="text-xl font-semibold tracking-[0.06em] text-[var(--vala-deep)]">
            VALA <span className="font-light text-[var(--vala-mauve)]">Somatic</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium tracking-wide text-[var(--vala-body)] md:flex">
            <a href="#course" className="transition hover:text-[var(--vala-deep)]">The Course</a>
            <a href="#membership" className="transition hover:text-[var(--vala-deep)]">Membership</a>
            <a href="#pricing" className="transition hover:text-[var(--vala-deep)]">Access</a>
            <a href="https://valabody.com/free-reset-guide" className="rounded-full border border-[var(--vala-mauve)] px-4 py-1.5 text-[var(--vala-deep)] transition hover:bg-[#f2e4dc]" rel="noopener noreferrer" target="_blank">Free Guide</a>
          </div>
          <a
            href="#pricing"
            className="rounded-full bg-[var(--vala-burgundy)] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Join Waitlist
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        <header className="rounded-[36px] border border-[var(--vala-line)] bg-[var(--vala-cream)] p-3 text-center text-sm tracking-wide text-[var(--vala-mauve)] shadow-sm">
          VALA Nightworker 35-Minute Somatic Reset • Paid access for women
        </header>

        <section className="grid gap-8 py-10 lg:grid-cols-[1.2fr_0.85fr] lg:items-start">
          <div className="rounded-[40px] bg-[var(--vala-cream)] p-8 shadow-sm ring-1 ring-[var(--vala-line)] sm:p-10">
            <span className="mb-5 inline-flex rounded-full bg-[var(--vala-soft)] px-4 py-2 text-sm font-medium text-[var(--vala-mauve)]">
              Paid course access
            </span>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Get access to the VALA Nightworker 35-Minute Somatic Reset Course.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--vala-body)]">
              A luxury somatic experience for nightlife women who want to come down gently after shift,
              regulate the nervous system, and return home to themselves before sleep.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--vala-body)]">
              Choose the access level that fits you: a $7 intro option or the full $39 course access.
              All signup on this page is waitlist only, and paylinks will be sent by email.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="rounded-full bg-[var(--vala-burgundy)] px-6 py-3 font-medium text-white transition hover:opacity-90"
              >
                Choose access
              </a>
              <a
                href="#course"
                className="rounded-full border border-[var(--vala-mauve)] px-6 py-3 font-medium text-[var(--vala-deep)] transition hover:bg-[#f2e4dc]"
              >
                Explore the course
              </a>
            </div>

            <p className="mt-5 text-sm text-[var(--vala-muted)]">
              Educational wellness content • Not medical advice • Built for nightlife women and post-shift decompression
            </p>
          </div>

          <aside className="rounded-[40px] bg-[#f5e5de] p-6 shadow-sm ring-1 ring-[var(--vala-line)]">
            <div className="rounded-[30px] bg-white/60 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--vala-mauve)]">
                Why this exists
              </p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[var(--vala-deep)]">
                Your body needs a landing after the lights go out.
              </h2>
              <p className="mt-4 leading-7 text-[var(--vala-body)]">
                Night shifts can leave the nervous system bright, guarded, and activated long after work is
                over. This course was created to help nightlife women transition out of performance mode and
                into safety, softness, and rest.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                {[
                  "Post-shift decompression",
                  "Sleep support",
                  "Tension release",
                  "Sensory downshift",
                  "Body awareness",
                  "Soft landing ritual",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#eaded7] px-4 py-3 text-[#533d39]"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[24px] bg-white/70 p-3 ring-2 ring-[#e1c3b8]">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#9a6d65]">
                  You are VALA
                </p>
                <video
                  autoPlay
                  controls
                  muted
                  playsInline
                  preload="none"
                  className="w-full rounded-[18px] bg-[#eaded7]"
                >
                  <source
                    src="https://hypnoticdreamtv.com/wp-content/uploads/2026/04/VALA_Intro0406_01.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </aside>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
          <div className="rounded-[34px] bg-[var(--vala-cream)] p-8 shadow-sm ring-1 ring-[var(--vala-line)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--vala-mauve)]">
              The reality
            </p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight">
              After a shift, exhaustion and activation can exist at the same time.
            </h3>
            <p className="mt-5 max-w-3xl leading-8 text-[var(--vala-body)]">
              Many nightlife women get home physically tired but still internally charged. The body may feel
              tense, alert, emotionally full, or too awake to rest. This course offers a structured bridge
              from that high-intensity state into a calmer, more regulated landing.
            </p>
          </div>

          <div className="rounded-[34px] bg-[var(--vala-burgundy)] p-8 text-[#fff8f5] shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f2c9c1]">
              Core reframe
            </p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight">
              You do not need to shame your body for struggling to come down.
            </h3>
            <p className="mt-5 leading-8 text-[#f5ddd8]">
              Your system may simply need a gentler exit from the night. Regulation starts with being met,
              not pushed.
            </p>
          </div>
        </section>

        <section className="mt-8 rounded-[38px] bg-[var(--vala-cream)] p-8 shadow-sm ring-1 ring-[var(--vala-line)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--vala-mauve)]">
            Who this is for
          </p>
          <h3 className="mt-3 text-3xl font-semibold leading-tight">
            Designed for women whose work happens under pressure, performance, and late-night stimulation
          </h3>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {whoItsFor.map((item) => (
              <div
                key={item}
                className="rounded-full bg-[#eaded7] px-5 py-4 text-[#4f3c39] shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_0.95fr]">
          <div className="rounded-[38px] border border-[var(--vala-line)] bg-[var(--vala-cream)] p-8 shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--vala-mauve)]">
              VALA Somatic Reset - Nightworker Edition
            </p>
            <h3 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight text-[var(--vala-deep)] sm:text-5xl lg:text-6xl">
              A nervous system reset for women who stay{" "}
              <span className="italic text-[var(--vala-burgundy)]">"on"</span> for work
            </h3>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-[var(--vala-body)]">
              If your job requires you to be seen, social, and on, this reset is for you. A
              35-minute luxury somatic experience for nightlife professionals, entertainers,
              and women who need a softer way to come down after shift.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {previewTags.map((tag) => (
                <div
                  key={tag}
                  className="rounded-full border border-[#dfb8af] bg-[#f2d8d1] px-4 py-3 text-sm text-[#7a544e]"
                >
                  {tag}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#pricing"
                className="inline-flex rounded-full bg-[#9f3127] px-7 py-4 font-medium text-white transition hover:opacity-90"
              >
                View pricing
              </a>
              <a
                href="#course"
                className="inline-flex rounded-full border border-[#b65f50] px-7 py-4 font-medium text-[#8b3429] transition hover:bg-[#f6e7e1]"
              >
                Preview course flow
              </a>
            </div>
          </div>

          <div className="rounded-[38px] border border-[var(--vala-line)] bg-[#f8ece7] p-5 shadow-sm">
            <div className="rounded-[30px] bg-white/60 p-4">
              <div className="rounded-[26px] border border-dashed border-[#ddb7ae] bg-[#ecd2ca] p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[#b07e76]">Dreanna - VALA Narrator</p>
                {hasNarratorVideo ? (
                  <div className="relative mt-4 overflow-hidden rounded-[22px] bg-[#dbc3ba]">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="aspect-[3/4] w-full object-cover"
                    >
                      <source src="/video/dreanna_vala_narrator.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="mt-4 flex aspect-[3/4] w-full items-center justify-center rounded-[22px] bg-[#dbc3ba] text-center">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[#8f6962]">
                        Dreanna - VALA Narrator
                      </p>
                      <p className="mt-3 text-sm text-[#7d5b55]">3:4 narrator MP4 video holder</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="course" className="py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--vala-mauve)]">
            Inside the course
          </p>
          <h3 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl">
            A feminine, luxury-centered somatic ritual for the end of the night
          </h3>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {courseHighlights.map((card) => (
              <div
                key={card.title}
                className="rounded-[28px] bg-[var(--vala-cream)] p-7 shadow-sm ring-1 ring-[var(--vala-line)]"
              >
                <h4 className="text-2xl font-semibold">{card.title}</h4>
                <p className="mt-4 leading-8 text-[var(--vala-body)]">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.75fr]">
          <div className="rounded-[38px] bg-[var(--vala-cream)] p-8 shadow-sm ring-1 ring-[var(--vala-line)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--vala-mauve)]">
              What it supports
            </p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight">
              Built for the moments when the night follows you home
            </h3>
            <ul className="mt-6 space-y-3 text-[#4e3a37]">
              {afterShiftMoments.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>

            <div className="mt-8 rounded-[26px] bg-[#f3e4dc] p-6">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#9a6d65]">Access options</p>
              <p className="mt-3 leading-8 text-[#5a4744]">
                Choose the $7 intro offer for a lighter first step or the $39 option for full access to
                the VALA Nightworker reset experience. This page only collects waitlist emails, and the
                paylinks are sent later by email.
              </p>
            </div>
          </div>

          <div className="rounded-[38px] bg-[#f5e5de] p-6 shadow-sm ring-1 ring-[#e1c3b8]">
            <div className="rounded-[28px] bg-[#efe2d6] p-7">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#9a6d65]">
                In 35 minutes
              </p>
              <h3 className="mt-3 text-3xl font-semibold leading-tight">The reset flow</h3>
              <ol className="mt-5 space-y-3 leading-8 text-[#5b4642]">
                {resetSteps.map((item, index) => (
                  <li key={item}>
                    {index + 1}. {item}
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-sm leading-7 text-[#735b57]">
                The goal is not to become someone else after work. The goal is to help your body feel safe
                enough to come back to itself.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[38px] bg-[var(--vala-cream)] p-8 shadow-sm ring-1 ring-[var(--vala-line)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--vala-mauve)]">
            What You’ll Move Through
          </p>
          <h3 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl">
            Seven short modules designed to help your body come down gently after the night.
          </h3>
          <p className="mt-4 text-sm leading-7 text-[var(--vala-muted)]">
            Led by Dreanna and Brock VALA.
          </p>

          <div className="mt-8 grid gap-4">
            {courseModules.map((module, i) => (
              <div
                key={module.title}
                className="flex items-center gap-5 rounded-[28px] bg-[#f5e5de] p-6 shadow-sm ring-1 ring-[#e1c3b8] sm:p-7"
              >
                <div className="aspect-square w-20 shrink-0 overflow-hidden rounded-[16px] bg-[#dbc3ba] sm:w-24">
                  <img
                    alt={`Module ${i + 1}`}
                    className="h-full w-full object-cover"
                    src={`/images/${i + 1}_image_mod.png`}
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[var(--vala-deep)] sm:text-2xl">
                    {module.title}
                  </h4>
                  <p className="mt-3 max-w-4xl leading-7 text-[#5a4744]">{module.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] bg-[#f8efea] p-6 ring-1 ring-[#e8d0c5]">
            <p className="text-base leading-7 text-[#5a4744]">
              Join the waitlist and experience the reset your body can use after shift.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href="#waitlist-7"
                className="inline-flex justify-center rounded-full bg-[var(--vala-burgundy)] px-6 py-3 font-medium text-white transition hover:opacity-90"
              >
                Join $7 Waitlist
              </a>
              <a
                href="#waitlist-39"
                className="inline-flex justify-center rounded-full border border-[var(--vala-mauve)] px-6 py-3 font-medium text-[var(--vala-deep)] transition hover:bg-[#f2e4dc]"
              >
                Join $39 Waitlist
              </a>
            </div>
          </div>
        </section>

        <section id="membership" className="mt-12 rounded-[38px] bg-[var(--vala-cream)] p-8 shadow-sm ring-1 ring-[var(--vala-line)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--vala-mauve)]">
            VALA Somatic Membership
          </p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                Everything included at $39<span className="text-2xl font-normal text-[var(--vala-body)]">/mo</span>
              </h3>
              <p className="mt-3 text-lg text-[var(--vala-body)]">Full access — every benefit, every month.</p>
            </div>
            <div className="rounded-[22px] bg-[var(--vala-burgundy)] px-6 py-4 text-center text-white">
              <p className="text-2xl font-semibold">$39 <span className="text-base font-normal opacity-80">/ month</span></p>
              <p className="mt-1 text-sm tracking-wide opacity-70">Core membership</p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Guided somatic resets",
                body: "Audio + video practices for nervous system regulation, body awareness, and emotional fatigue.",
              },
              {
                title: "Brock VALA somatic check-in app",
                body: "Daily nervous system check-ins, grounding prompts, and somatic reset suggestions.",
              },
              {
                title: "Private VALA community",
                body: "Premium-access space for ongoing support, early releases, and connection with women on the same path.",
              },
              {
                title: "Valadation Method™ access",
                body: "The full identity framework — Valuable, Accepted, Loved, Approved — as embodied practice.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[24px] bg-[#f5e5de] p-6 ring-1 ring-[#e1c3b8]">
                <h4 className="text-lg font-semibold text-[var(--vala-deep)]">{item.title}</h4>
                <p className="mt-3 leading-7 text-[#5a4744]">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--vala-mauve)]">
              New additions <span className="text-base">✦</span>
            </p>
            <div className="grid gap-5 md:grid-cols-3">
              <div className="relative overflow-hidden rounded-[24px] bg-[var(--vala-burgundy)] p-6 text-white ring-2 ring-[#c9574a]">
                <div className="absolute left-0 top-0 w-full bg-[#c9574a]/60 px-5 py-2 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-white/90">
                  Limited time — included at $39/mo
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <h4 className="text-lg font-semibold leading-tight">1-on-1 weekly private coaching</h4>
                  <span className="shrink-0 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold tracking-wide">New</span>
                </div>
                <p className="mt-4 leading-7 text-[#f5ddd8]">
                  A private weekly call with Brock VALA — personalized somatic support, nervous system guidance, and identity coaching tailored to your specific life and stress patterns.
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold tracking-wide">$200 value</span>
                  <span className="text-xs text-white/60">Normally $200 / session</span>
                </div>
              </div>

              <div className="relative rounded-[24px] bg-[#f5e5de] p-6 ring-1 ring-[#e1c3b8]">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-lg font-semibold leading-tight text-[var(--vala-deep)]">Personalized workbook app</h4>
                  <span className="shrink-0 rounded-full bg-[var(--vala-burgundy)]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[var(--vala-burgundy)]">New</span>
                </div>
                <p className="mt-4 leading-7 text-[#5a4744]">
                  Your own guided digital workbook — tracks your Valadation Method™ progress, somatic journal entries, and regulation milestones.
                </p>
                <span className="absolute bottom-5 right-5 rounded-full bg-[#eaded7] px-3 py-1 text-xs font-semibold text-[#7a544e]">$29 value</span>
              </div>

              <div className="relative rounded-[24px] bg-[#f5e5de] p-6 ring-1 ring-[#e1c3b8]">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-lg font-semibold leading-tight text-[var(--vala-deep)]">Full VALA resource links</h4>
                  <span className="shrink-0 rounded-full bg-[var(--vala-burgundy)]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[var(--vala-burgundy)]">New</span>
                </div>
                <p className="mt-4 leading-7 text-[#5a4744]">
                  Curated access to all VALA learning resources — courses, somatic guides, reset tools, and Brock's full reference library in one place.
                </p>
                <span className="absolute bottom-5 right-5 rounded-full bg-[#eaded7] px-3 py-1 text-xs font-semibold text-[#7a544e]">$49 value</span>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mt-12 rounded-[38px] bg-[#f8efea] p-8 shadow-sm ring-1 ring-[#e8d0c5] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6d65]">
            Course access
          </p>
          <h3 className="mt-3 text-4xl font-semibold leading-tight">Choose your way into VALA</h3>
          <p className="mt-4 max-w-3xl leading-8 text-[#5a4744]">
            This is not just content. These are tools your body can use the same night you need help
            coming down.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-[28px] border border-[#e1c3b8] bg-white p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6d65]">Start here</p>
              <h4 className="mt-3 text-2xl font-semibold text-[#311d1b]">$7 Intro Offer</h4>
              <p className="mt-3 leading-7 text-[#5a4744]">
                A lighter first step for women who want to begin with the tone and foundation of the
                VALA Nightworker reset before moving into the full access tier.
              </p>
              <ul className="mt-5 space-y-3 text-[#5a4744]">
                <li>• Introductory reset access</li>
                <li>• Gentle entry into the VALA nightworker experience</li>
                <li>• Soft, low-risk first step</li>
              </ul>
              <div className="mt-5 rounded-[22px] bg-[#f8efea] p-4">
                <p className="text-sm font-semibold text-[#442c29]">Not included</p>
                <ul className="mt-3 space-y-2 text-sm text-[#735b57]">
                  {introOfferExclusions.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <WaitlistForm
                buttonLabel="Join $7 Waitlist"
                compact
                formId="waitlist-7"
                helperText="Waitlist only. We’ll email the $7 paylink when this option opens."
                introText="Enter your name and email to join the $7 intro waitlist. The paylink will be sent by email, not shown on this page."
                source="pricing-7"
                title="$7 intro waitlist"
              />
            </div>

            <div className="rounded-[28px] border border-[#d9b7ab] bg-[#f5e5de] p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6d65]">Full access</p>
              <h4 className="mt-3 text-2xl font-semibold text-[#311d1b]">$39 Access</h4>
              <p className="mt-3 leading-7 text-[#5a4744]">
                The fuller VALA access point for women who want the complete course experience and a deeper
                nervous system support rhythm from the start.
              </p>
              <ul className="mt-5 space-y-3 text-[#5a4744]">
                {fullAccessFeatures.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <WaitlistForm
                buttonLabel="Join $39 Waitlist"
                compact
                formId="waitlist-39"
                helperText="Waitlist only. We’ll email the $39 paylink when full access opens."
                introText="Enter your name and email to join the $39 full-access waitlist. The paylink will be sent by email, not shown on this page."
                source="pricing-39"
                title="$39 full-access waitlist"
              />
            </div>
          </div>
        </section>

        <section id="final-access" className="mt-12 rounded-[40px] bg-[var(--vala-cream)] p-10 text-center shadow-sm ring-1 ring-[var(--vala-line)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--vala-mauve)]">
            Final access
          </p>
          <h3 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
            Choose the access level that fits the way you want to enter the VALA Nightworker reset.
          </h3>
          <p className="mx-auto mt-6 max-w-3xl leading-8 text-[var(--vala-body)]">
            Start with the $7 intro offer or choose the $39 full access option for the more complete
            course experience. Both options are waitlist-only here, and paylinks are sent by email.
          </p>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex rounded-full bg-[var(--vala-burgundy)] px-7 py-4 font-medium text-white transition hover:opacity-90"
            >
              Choose $7 access
            </a>
            <a
              href="#pricing"
              className="inline-flex rounded-full border border-[var(--vala-mauve)] px-7 py-4 font-medium text-[var(--vala-deep)] transition hover:bg-[#f2e4dc]"
            >
              Choose $39 access
            </a>
          </div>
          <p className="mt-6 text-sm text-[var(--vala-muted)]">
            VALA Nightworker 35-Minute Somatic Reset Course • Houston, Texas • Educational wellness experience
          </p>
        </section>

        <footer className="pb-8 pt-6 text-center text-sm text-[var(--vala-muted)]">
          Contact Brock VALA at{" "}
          <a
            href="mailto:valadreammodel@gmail.com"
            className="text-[var(--vala-deep)] underline decoration-[var(--vala-line)] underline-offset-4 transition hover:text-[var(--vala-burgundy)]"
          >
            valadreammodel@gmail.com
          </a>
        </footer>
      </div>
    </main>
  );
}
