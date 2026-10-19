import { Captions, Gauge, Repeat2, Volume2 } from "lucide-react";
import { ReferenceAudioPlayer } from "@/features/audio/components/reference-audio-player";
import type { AudioCue } from "@/features/lessons/types";

export function AudioPracticePanel({ cues }: { cues: AudioCue[] }) {
  return (
    <section className="rounded-lg border border-[var(--border)] bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
            Listen and shadow
          </p>
          <h2 className="mt-2 text-2xl font-semibold">Reference audio</h2>
        </div>
        <Volume2 aria-hidden="true" className="text-[var(--accent)]" size={28} />
      </div>

      <div className="mt-5 grid gap-3">
        {cues.map((cue) => (
          <article
            className="rounded-md border border-[var(--border)] bg-[var(--panel-strong)] p-4"
            key={cue.text}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold">{cue.text}</h3>
                {cue.ipa ? (
                  <p className="mt-1 font-mono text-sm text-[var(--muted)]">
                    {cue.ipa}
                  </p>
                ) : null}
              </div>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[var(--brand-strong)]">
                {cue.audioSrc ? "Audio path ready" : "Audio pending"}
              </span>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              <ControlPill icon={Repeat2} label="Repeat mode" value="available" />
              <ControlPill icon={Gauge} label="Slow audio" value="0.75x / 0.9x / 1x" />
              <ControlPill icon={Captions} label="Captions" value="manual cues" />
            </div>

            <ReferenceAudioPlayer cue={cue} />

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {cue.caption ? (
                <div className="rounded-md bg-white p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                    Caption
                  </p>
                  <p className="mt-1 text-sm leading-6">{cue.caption}</p>
                </div>
              ) : null}
              {cue.rhythm ? (
                <div className="rounded-md bg-white p-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                    Rhythm
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-6 text-[var(--accent)]">
                    {cue.rhythm}
                  </p>
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ControlPill({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Repeat2;
  label: string;
  value: string;
}) {
  return (
    <div className="flex min-h-12 items-center gap-2 rounded-md bg-white px-3 text-sm">
      <Icon aria-hidden="true" className="shrink-0 text-[var(--brand)]" size={17} />
      <div>
        <p className="font-semibold">{label}</p>
        <p className="text-xs text-[var(--muted)]">{value}</p>
      </div>
    </div>
  );
}
