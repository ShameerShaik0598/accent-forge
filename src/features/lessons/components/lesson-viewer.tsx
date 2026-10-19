import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mic,
  Music2,
  NotebookText,
  Target,
} from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { PracticeRecorder } from "@/features/audio/components/practice-recorder";
import { ReferenceAudioPlayer } from "@/features/audio/components/reference-audio-player";
import { AudioPracticePanel } from "@/features/lessons/components/audio-practice-panel";
import type { Lesson } from "@/features/lessons/types";

export function LessonViewer({
  lesson,
  nextLesson,
  previousLesson,
}: {
  lesson: Lesson;
  nextLesson?: Lesson;
  previousLesson?: Lesson;
}) {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 pb-28 pt-6 sm:px-8 lg:px-10">
      <Link
        href="/lessons"
        className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[var(--border)] bg-white px-3 text-sm font-semibold transition hover:border-[var(--brand)]"
      >
        <ArrowLeft aria-hidden="true" size={16} />
        Lessons
      </Link>

      <section className="mt-5 rounded-lg border border-[var(--border)] bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
              Level {lesson.level} • Lesson {lesson.order}
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              {lesson.title}
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">
              {lesson.summary}
            </p>
          </div>
          <div className="flex min-w-44 items-center gap-3 rounded-md bg-[var(--panel-strong)] p-3">
            <span className="text-4xl" aria-hidden="true">
              {lesson.coachEmoji}
            </span>
            <div>
              <p className="text-sm font-semibold">Coach cue</p>
              <p className="text-sm text-[var(--muted)]">{lesson.focusSound}</p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <InfoTile icon={Target} label="IPA focus" value={lesson.ipaFocus} />
          <InfoTile
            icon={Clock3}
            label="Practice time"
            value={`${lesson.estimatedMinutes} min`}
          />
          <InfoTile icon={Music2} label="Module" value={lesson.module} />
        </div>
      </section>

      <section className="mt-5 grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-lg border border-[var(--border)] bg-white p-4 shadow-sm">
          <h2 className="text-xl font-semibold">Goals</h2>
          <div className="mt-4 space-y-3">
            {lesson.learningGoals.map((goal) => (
              <div className="flex gap-3" key={goal}>
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[var(--brand)]"
                  size={18}
                />
                <p className="text-sm leading-6">{goal}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-[var(--border)] bg-white p-4 shadow-sm">
          <h2 className="text-xl font-semibold">Plain-language concept</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            {lesson.introduction}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {lesson.sections.map((section) => (
              <article
                className="rounded-md bg-[var(--panel-strong)] p-3"
                key={section.heading}
              >
                <h3 className="font-semibold">{section.heading}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                  {section.body}
                </p>
                {section.coachTip ? (
                  <p className="mt-3 rounded-md bg-white p-3 text-sm font-medium leading-6 text-[var(--brand-strong)]">
                    {section.coachTip}
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-5">
        <AudioPracticePanel cues={lesson.keyCues} />
      </div>

      {lesson.minimalPairs.length > 0 ? (
        <section className="mt-5 rounded-lg border border-[var(--border)] bg-white p-4 shadow-sm">
          <h2 className="text-2xl font-semibold">Minimal pairs</h2>
          <div className="mt-4 grid gap-3">
            {lesson.minimalPairs.map((pair) => (
              <article
                className="rounded-md border border-[var(--border)] p-3"
                key={`${pair.left.text}-${pair.right.text}`}
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <PairSide label={pair.left.label} text={pair.left.text} ipa={pair.left.ipa} />
                  <PairSide label={pair.right.label} text={pair.right.text} ipa={pair.right.ipa} />
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                  {pair.note}
                </p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mt-5 rounded-lg border border-[var(--border)] bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
              Drill
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Say it in context</h2>
          </div>
          <Mic aria-hidden="true" className="text-[var(--accent)]" size={28} />
        </div>
        <div className="mt-4 grid gap-3">
          {lesson.drillSentences.map((drill) => (
            <article
              className="rounded-md bg-[var(--panel-strong)] p-4"
              key={drill.text}
            >
              <p className="text-lg font-semibold leading-7">{drill.text}</p>
              {drill.ipa ? (
                <p className="mt-2 font-mono text-sm text-[var(--muted)]">
                  {drill.ipa}
                </p>
              ) : null}
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <Detail label="Caption" value={drill.caption ?? "Caption pending"} />
                <Detail label="Rhythm" value={drill.rhythm ?? "Rhythm pending"} strong />
                <Detail label="Try this" value={drill.coachingCue} />
              </div>
              <div className="mt-4 rounded-md bg-white p-3">
                <ReferenceAudioPlayer
                  cue={{
                    label: drill.text,
                    text: drill.text,
                    ipa: drill.ipa,
                    audioSrc: drill.audioSrc,
                    caption: drill.caption,
                    rhythm: drill.rhythm,
                  }}
                />
              </div>
              <div className="mt-4">
                <PracticeRecorder targetText={drill.text} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {lesson.shadowingPassage ? (
        <section className="mt-5 rounded-lg border border-[var(--border)] bg-white p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <NotebookText aria-hidden="true" className="text-[var(--brand)]" size={24} />
            <h2 className="text-2xl font-semibold">{lesson.shadowingPassage.title}</h2>
          </div>
          <p className="mt-4 text-lg leading-8">{lesson.shadowingPassage.text}</p>
          <div className="mt-4 rounded-md bg-[var(--panel-strong)] p-3">
            <ReferenceAudioPlayer
              cue={{
                label: lesson.shadowingPassage.title,
                text: lesson.shadowingPassage.text,
                audioSrc: lesson.shadowingPassage.audioSrc,
                caption: lesson.shadowingPassage.captionCues.join(" • "),
                rhythm: lesson.shadowingPassage.rhythm.join(" • "),
              }}
            />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-md bg-[var(--panel-strong)] p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                Rhythm chunks
              </p>
              <div className="mt-2 space-y-2">
                {lesson.shadowingPassage.rhythm.map((line) => (
                  <p className="text-sm font-semibold text-[var(--accent)]" key={line}>
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-md bg-[var(--panel-strong)] p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                Caption cues
              </p>
              <div className="mt-2 space-y-2">
                {lesson.shadowingPassage.captionCues.map((cue) => (
                  <p className="text-sm leading-6" key={cue}>
                    {cue}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="mt-5 rounded-lg border border-[var(--border)] bg-white p-4 shadow-sm">
        <h2 className="text-xl font-semibold">Audio production notes</h2>
        <div className="mt-3 grid gap-2">
          {lesson.productionNotes.map((note) => (
            <p className="text-sm leading-6 text-[var(--muted)]" key={note}>
              {note}
            </p>
          ))}
        </div>
      </section>

      <nav className="mt-5 grid gap-3 sm:grid-cols-2" aria-label="Lesson navigation">
        {previousLesson ? (
          <LessonNavLink direction="previous" lesson={previousLesson} />
        ) : (
          <div />
        )}
        {nextLesson ? <LessonNavLink direction="next" lesson={nextLesson} /> : null}
      </nav>
    </main>
  );
}

function InfoTile({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Target;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-md bg-[var(--panel-strong)] p-3">
      <Icon aria-hidden="true" className="text-[var(--brand)]" size={18} />
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}

function PairSide({
  ipa,
  label,
  text,
}: {
  ipa?: string;
  label: string;
  text: string;
}) {
  return (
    <div className="rounded-md bg-[var(--panel-strong)] p-3">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold">{text}</p>
      {ipa ? <p className="mt-1 font-mono text-sm text-[var(--muted)]">{ipa}</p> : null}
    </div>
  );
}

function Detail({
  label,
  strong = false,
  value,
}: {
  label: string;
  strong?: boolean;
  value: string;
}) {
  return (
    <div className="rounded-md bg-white p-3">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
        {label}
      </p>
      <p
        className={`mt-1 text-sm leading-6 ${
          strong ? "font-semibold text-[var(--accent)]" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function LessonNavLink({
  direction,
  lesson,
}: {
  direction: "next" | "previous";
  lesson: Lesson;
}) {
  const href = `/lessons/${lesson.slug}` as Route;
  const isNext = direction === "next";

  return (
    <Link
      className={`flex min-h-20 items-center gap-3 rounded-lg border border-[var(--border)] bg-white p-4 shadow-sm transition hover:border-[var(--brand)] ${
        isNext ? "justify-between sm:col-start-2" : ""
      }`}
      href={href}
    >
      {!isNext ? <ArrowLeft aria-hidden="true" className="shrink-0" size={18} /> : null}
      <div className={isNext ? "text-right" : ""}>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
          {isNext ? "Next lesson" : "Previous lesson"}
        </p>
        <p className="mt-1 font-semibold">{lesson.shortTitle}</p>
      </div>
      {isNext ? <ArrowRight aria-hidden="true" className="shrink-0" size={18} /> : null}
    </Link>
  );
}
