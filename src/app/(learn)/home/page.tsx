import { BookOpen, CheckCircle2, Clock3 } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { AppFrame } from "@/components/layout/app-frame";
import { getAllLessons } from "@/features/lessons/data-access/lessons";

export default function HomePage() {
  const lessons = getAllLessons();
  const firstLesson = lessons[0];

  return (
    <AppFrame activeHref="/home">
      <main className="mx-auto w-full max-w-5xl px-5 pb-28 pt-6 sm:px-8 lg:px-10">
        <section className="rounded-lg border border-[var(--border)] bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
            Continue
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight">
            Your RP practice starts here
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">
            The Level 1 curriculum now has structured lessons with IPA, rhythm
            cues, captions, and planned reference audio paths.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {firstLesson ? (
              <Link
                href={`/lessons/${firstLesson.slug}` as Route}
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[var(--brand)] px-5 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)]"
              >
                <BookOpen aria-hidden="true" size={18} />
                Start Lesson 1
              </Link>
            ) : null}
            <Link
              href="/lessons"
              className="inline-flex min-h-12 items-center gap-2 rounded-md border border-[var(--border)] bg-white px-5 text-sm font-semibold transition hover:border-[var(--brand)]"
            >
              View all lessons
            </Link>
          </div>
        </section>

        <section className="mt-6 grid gap-3 sm:grid-cols-3">
          <StatusTile
            icon={Clock3}
            label="Current phase"
            value="Phase 2A"
          />
          <StatusTile
            icon={BookOpen}
            label="Lessons"
            value={`${lessons.length} built`}
          />
          <StatusTile
            icon={CheckCircle2}
            label="Progress"
            value="Next phase"
          />
        </section>
      </main>
    </AppFrame>
  );
}

function StatusTile({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock3;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-white p-4 shadow-sm">
      <Icon aria-hidden="true" className="text-[var(--brand)]" size={22} />
      <p className="mt-4 text-sm text-[var(--muted)]">{label}</p>
      <p className="mt-1 text-lg font-semibold">{value}</p>
    </div>
  );
}
