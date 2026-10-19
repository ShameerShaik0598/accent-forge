"use client";

import { Mic, Pause, Play, Square } from "lucide-react";
import { useRef, useState } from "react";

type RecorderState = "idle" | "recording" | "recorded" | "unsupported";

export function PracticeRecorder({ targetText }: { targetText: string }) {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const [state, setState] = useState<RecorderState>("idle");
  const [recordingUrl, setRecordingUrl] = useState<string | null>(null);
  const [message, setMessage] = useState("Record your attempt after shadowing the reference.");

  async function startRecording() {
    if (!navigator.mediaDevices || typeof MediaRecorder === "undefined") {
      setState("unsupported");
      setMessage("Recording is not supported in this browser.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      chunksRef.current = [];

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType });
        setRecordingUrl((previousUrl) => {
          if (previousUrl) {
            URL.revokeObjectURL(previousUrl);
          }

          return URL.createObjectURL(blob);
        });
        stream.getTracks().forEach((track) => track.stop());
        setState("recorded");
        setMessage("Replay your recording and compare it with the rhythm cues.");
      };

      mediaRecorderRef.current = recorder;
      recorder.start();
      setState("recording");
      setMessage("Recording...");
    } catch {
      setState("idle");
      setMessage("Microphone permission was not granted.");
    }
  }

  function stopRecording() {
    mediaRecorderRef.current?.stop();
  }

  return (
    <div className="rounded-md border border-[var(--border)] bg-white p-3">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
        Record practice
      </p>
      <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{targetText}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {state !== "recording" ? (
          <button
            className="inline-flex min-h-10 items-center gap-2 rounded-md bg-[var(--brand)] px-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)]"
            onClick={startRecording}
            type="button"
          >
            <Mic aria-hidden="true" size={16} />
            Record
          </button>
        ) : (
          <button
            className="inline-flex min-h-10 items-center gap-2 rounded-md bg-[var(--accent)] px-3 text-sm font-semibold text-white transition"
            onClick={stopRecording}
            type="button"
          >
            <Square aria-hidden="true" size={16} />
            Stop
          </button>
        )}

        {recordingUrl ? (
          <audio className="min-h-10 max-w-full" controls src={recordingUrl}>
            <track kind="captions" />
          </audio>
        ) : (
          <span className="inline-flex min-h-10 items-center gap-2 rounded-md border border-[var(--border)] px-3 text-sm font-semibold text-[var(--muted)]">
            {state === "recording" ? (
              <Pause aria-hidden="true" size={16} />
            ) : (
              <Play aria-hidden="true" size={16} />
            )}
            Replay appears here
          </span>
        )}
      </div>

      <p className="mt-3 text-xs font-medium text-[var(--muted)]">{message}</p>
    </div>
  );
}
