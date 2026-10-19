import { ArrowRight, Headphones, Mic, Sparkles } from "lucide-react";
import Link from "next/link";
import { AppFrame } from "@/components/layout/app-frame";

const signals = [
  { icon: Headphones, label: "Listen to approved RP reference audio" },
  { icon: Mic, label: "Record and replay short pronunciation drills" },
  { icon: Sparkles, label: "Receive practical coaching feedback" },
];

export default function MarketingPage() {
  return (
    <AppFrame activeHref="/">
      <main className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-5xl flex-col px-5 pb-28 pt-8 sm:px-8 lg:px-10">
        <section className="grid flex-1 items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
              RP practice, built for mobile
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-[var(--foreground)] sm:text-6xl">
              AccentForge
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--muted)]">
              Short, structured pronunciation practice for Indian English
              speakers learning clearer British RP patterns.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/home"
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[var(--brand)] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-strong)]"
              >
                Start practice
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link
                href="/lessons"
                className="inline-flex min-h-12 items-center rounded-md border border-[var(--border)] bg-white px-5 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--brand)]"
              >
                Browse lessons
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-[var(--border)] bg-white p-4 shadow-sm">
            <div className="rounded-md bg-[var(--panel-strong)] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-[var(--muted)]">
                    Today&apos;s focus
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold">Non-rhotic R</h2>
                </div>
                <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-sm font-semibold text-[var(--accent)]">
                  Level 1
                </span>
              </div>
              <div className="mt-6 space-y-3">
                {signals.map((item) => (
                  <div
                    className="flex items-center gap-3 rounded-md bg-white p-3"
                    key={item.label}
                  >
                    <item.icon
                      aria-hidden="true"
                      className="shrink-0 text-[var(--brand)]"
                      size={20}
                    />
                    <p className="text-sm leading-6 text-[var(--foreground)]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </AppFrame>
  );
}
