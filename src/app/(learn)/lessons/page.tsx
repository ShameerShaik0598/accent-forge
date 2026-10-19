import { ArrowRight, BookOpen, Headphones, Layers3 } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { AppFrame } from "@/components/layout/app-frame";
import { getAllLessons, getCurriculumModules } from "@/features/lessons/data-access/lessons";

export default function LessonsPage() {
  const lessons = getAllLessons();
  const modules = getCurriculumModules();

  return (
    <AppFrame activeHref="/lessons">
      <main className="mx-auto w-full max-w-5xl px-5 pb-28 pt-6 sm:px-8 lg:px-10">
        <section className="rounded-lg border border-[var(--border)] bg-white p-5 shadow-sm">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
                Lesson library
              </p>
              <h1 className="mt-3 text-3xl font-semibold">Level 1 Curriculum</h1>
            </div>
            <Layers3 aria-hidden="true" className="text-[var(--accent)]" size={30} />
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--muted)]">
            A practical RP learning path for Indian English speakers: sounds first,
            then rhythm, connected speech, and shadowing.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {modules.map((module) => (
              <span
                className="rounded-full bg-[var(--panel-strong)] px-3 py-1 text-xs font-semibold text-[var(--brand-strong)]"
                key={module}
              >
                {module}
              </span>
            ))}
          </div>
        </section>

        <div className="mt-6 grid gap-3">
          {lessons.map((lesson) => {
            const href = `/lessons/${lesson.slug}` as Route;

            return (
              <article
                className="rounded-lg border border-[var(--border)] bg-white p-4 shadow-sm"
                key={lesson.id}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                        Lesson {lesson.order}
                      </span>
                      <span className="rounded-full bg-[var(--panel-strong)] px-3 py-1 text-xs font-semibold text-[var(--brand-strong)]">
                        {lesson.module}
                      </span>
                    </div>
                    <h2 className="mt-3 text-xl font-semibold">{lesson.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {lesson.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-[var(--muted)]">
                      <span>{lesson.estimatedMinutes} min</span>
                      <span aria-hidden="true">•</span>
                      <span>{lesson.ipaFocus}</span>
                    </div>
                  </div>
                  <div className="grid shrink-0 place-items-center gap-2 text-center">
                    <span className="text-3xl" aria-hidden="true">
                      {lesson.coachEmoji}
                    </span>
                    <Headphones
                      aria-hidden="true"
                      className="text-[var(--brand)]"
                      size={22}
                    />
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-4">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)]">
                    <BookOpen aria-hidden="true" size={16} />
                    {lesson.keyCues.length} cues · {lesson.drillSentences.length} drill
                  </span>
                  <Link
                    href={href}
                    className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[var(--border)] px-3 text-sm font-semibold transition hover:border-[var(--brand)]"
                  >
                    Open
                    <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </main>
    </AppFrame>
  );
}
