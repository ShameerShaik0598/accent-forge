"use client";

import { Pause, Play, Repeat2, RotateCcw } from "lucide-react";
import { useRef, useState } from "react";
import type { AudioCue } from "@/features/lessons/types";

const playbackRates = [0.75, 0.9, 1] as const;

export function ReferenceAudioPlayer({ cue }: { cue: AudioCue }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeating, setIsRepeating] = useState(false);
  const [playbackRate, setPlaybackRate] = useState<(typeof playbackRates)[number]>(1);
  const [status, setStatus] = useState(cue.audioSrc ? "Ready when file exists" : "Audio pending");

  function syncRate(rate: (typeof playbackRates)[number]) {
    setPlaybackRate(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  }

  async function togglePlayback() {
    const audio = audioRef.current;

    if (!audio || !cue.audioSrc) {
      setStatus("Add the MP3 file to enable playback");
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      setStatus("Paused");
      return;
    }

    audio.playbackRate = playbackRate;

    try {
      await audio.play();
      setIsPlaying(true);
      setStatus("Playing");
    } catch {
      setIsPlaying(false);
      setStatus("Audio file not found yet");
    }
  }

  function restart() {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.currentTime = 0;
    setStatus("Restarted");
  }

  async function handleEnded() {
    const audio = audioRef.current;
    setIsPlaying(false);

    if (!audio || !isRepeating) {
      setStatus("Finished");
      return;
    }

    audio.currentTime = 0;

    try {
      await audio.play();
      setIsPlaying(true);
      setStatus("Repeating");
    } catch {
      setStatus("Could not repeat audio");
    }
  }

  return (
    <div className="mt-4 rounded-md bg-white p-3">
      {cue.audioSrc ? (
        <audio
          onEnded={handleEnded}
          onError={() => {
            setIsPlaying(false);
            setStatus("Audio file not found yet");
          }}
          preload="metadata"
          ref={audioRef}
          src={cue.audioSrc}
        />
      ) : null}

      <div className="flex flex-wrap items-center gap-2">
        <button
          className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[var(--brand)] px-4 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)] disabled:cursor-not-allowed disabled:opacity-55"
          disabled={!cue.audioSrc}
          onClick={togglePlayback}
          type="button"
        >
          {isPlaying ? <Pause aria-hidden="true" size={17} /> : <Play aria-hidden="true" size={17} />}
          {isPlaying ? "Pause" : "Play"}
        </button>

        <button
          className="inline-flex min-h-11 items-center gap-2 rounded-md border border-[var(--border)] px-3 text-sm font-semibold transition hover:border-[var(--brand)] disabled:cursor-not-allowed disabled:opacity-55"
          disabled={!cue.audioSrc}
          onClick={restart}
          type="button"
        >
          <RotateCcw aria-hidden="true" size={16} />
          Restart
        </button>

        <button
          aria-pressed={isRepeating}
          className={`inline-flex min-h-11 items-center gap-2 rounded-md border px-3 text-sm font-semibold transition ${
            isRepeating
              ? "border-[var(--brand)] bg-[var(--panel-strong)] text-[var(--brand-strong)]"
              : "border-[var(--border)] hover:border-[var(--brand)]"
          }`}
          onClick={() => setIsRepeating((value) => !value)}
          type="button"
        >
          <Repeat2 aria-hidden="true" size={16} />
          Repeat
        </button>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
          Speed
        </span>
        {playbackRates.map((rate) => (
          <button
            aria-pressed={playbackRate === rate}
            className={`min-h-9 rounded-md border px-3 text-sm font-semibold transition ${
              playbackRate === rate
                ? "border-[var(--brand)] bg-[var(--panel-strong)] text-[var(--brand-strong)]"
                : "border-[var(--border)] hover:border-[var(--brand)]"
            }`}
            key={rate}
            onClick={() => syncRate(rate)}
            type="button"
          >
            {rate}x
          </button>
        ))}
      </div>

      <p className="mt-3 text-xs font-medium text-[var(--muted)]">{status}</p>
    </div>
  );
}
