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

const previewTags = [
  "Bottle girls & cocktail servers",
  "Entertainers & performers",
  "Club hosts & nightlife staff",
  "Creators & models",
];

export default function Page() {
  const narratorVideoPath = path.join(process.cwd(), "public", "dreanna-vala-narrator.mp4");
  const hasNarratorVideo = fs.existsSync(narratorVideoPath);

  return (
    <main className="min-h-screen bg-[var(--vala-sand)] text-[var(--vala-ink)]">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        <header className="rounded-[36px] border border-[var(--vala-line)] bg-[var(--vala-cream)] p-3 text-center text-sm tracking-wide text-[var(--vala-mauve)] shadow-sm">
          Free VALA Nightworker 35-Minute Somatic Reset • Early signup access for women
        </header>

        <section className="grid gap-8 py-10 lg:grid-cols-[1.2fr_0.85fr] lg:items-start">
          <div className="rounded-[40px] bg-[var(--vala-cream)] p-8 shadow-sm ring-1 ring-[var(--vala-line)] sm:p-10">
            <span className="mb-5 inline-flex rounded-full bg-[var(--vala-soft)] px-4 py-2 text-sm font-medium text-[var(--vala-mauve)]">
              Free early-access course
            </span>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Sign up early for the free VALA Nightworker 35-Minute Somatic Reset Course.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--vala-body)]">
              A free luxury somatic experience for nightlife women who want to come down gently after
              shift, regulate the nervous system, and return home to themselves before sleep.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--vala-body)]">
              Women who sign up early will get first access, launch updates, and the first invitation
              when the course opens.
            </p>

            <WaitlistForm buttonLabel="Join the Waitlist" source="hero" />

            <div className="mt-6 flex flex-wrap gap-4">
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
              A free nervous system reset for women who stay{" "}
              <span className="italic text-[var(--vala-burgundy)]">"on"</span> for work
            </h3>
            <p className="mt-6 max-w-3xl text-lg leading-9 text-[var(--vala-body)]">
              If your job requires you to be seen, social, and on, this reset is for you. A
              free 35-minute luxury somatic experience for nightlife professionals, entertainers,
              and women who sign up early.
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
                href="#final-waitlist"
                className="inline-flex rounded-full bg-[#9f3127] px-7 py-4 font-medium text-white transition hover:opacity-90"
              >
                Join course waitlist
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
                <p className="text-xs uppercase tracking-[0.2em] text-[#b07e76]">MP4 holder</p>
                {hasNarratorVideo ? (
                  <div className="relative mt-4 overflow-hidden rounded-[22px] bg-[#dbc3ba]">
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      className="aspect-[3/4] w-full object-cover"
                    >
                      <source src="/dreanna-vala-narrator.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute bottom-4 left-4 rounded-full bg-[#543733] px-4 py-2 text-xs uppercase tracking-[0.22em] text-white">
                      Dreanna - VALA Narrator
                    </div>
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
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#9a6d65]">
                Join the waitlist if you want
              </p>
              <p className="mt-3 leading-8 text-[#5a4744]">
                First access to launch details, reminders when enrollment opens, and an early invitation into
                the VALA Nightworker reset experience.
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

        <section id="final-waitlist" className="mt-12 rounded-[40px] bg-[var(--vala-cream)] p-10 text-center shadow-sm ring-1 ring-[var(--vala-line)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--vala-mauve)]">
            Waitlist invitation
          </p>
          <h3 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">
            Enter your name and email to claim early access to the free 35-minute VALA Nightworker reset.
          </h3>
          <p className="mx-auto mt-6 max-w-3xl leading-8 text-[var(--vala-body)]">
            This page is focused entirely on early signup so women on the waitlist hear first when the
            free course is released.
          </p>
          <div className="mx-auto mt-8 max-w-3xl text-left">
            <WaitlistForm buttonLabel="Join the Waitlist" source="final-cta" />
          </div>
          <p className="mt-6 text-sm text-[var(--vala-muted)]">
            VALA Nightworker 35-Minute Somatic Reset Course • Houston, Texas • Educational wellness experience
          </p>
        </section>
      </div>
    </main>
  );
}
