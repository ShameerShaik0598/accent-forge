import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { LessonViewer } from "@/features/lessons/components/lesson-viewer";
import { getAllLessons } from "@/features/lessons/data-access/lessons";

describe("lesson curriculum", () => {
  it("has ordered Level 1 lessons with unique slugs", () => {
    const lessons = getAllLessons();
    const slugs = new Set(lessons.map((lesson) => lesson.slug));

    expect(lessons.length).toBeGreaterThanOrEqual(12);
    expect(slugs.size).toBe(lessons.length);
    expect(lessons.map((lesson) => lesson.order)).toEqual(
      [...lessons].map((lesson) => lesson.order).sort((a, b) => a - b),
    );
  });

  it("keeps every lesson usable before audio files are uploaded", () => {
    const lessons = getAllLessons();

    for (const lesson of lessons) {
      expect(lesson.learningGoals.length).toBeGreaterThan(0);
      expect(lesson.keyCues.length).toBeGreaterThan(0);
      expect(lesson.drillSentences.length).toBeGreaterThan(0);
      expect(lesson.productionNotes.length).toBeGreaterThan(0);
    }
  });

  it("uses unique audio paths for generated reference files", () => {
    const lessons = getAllLessons();
    const audioPaths = lessons.flatMap((lesson) => [
      ...lesson.keyCues.flatMap((cue) => (cue.audioSrc ? [cue.audioSrc] : [])),
      ...lesson.drillSentences.flatMap((drill) =>
        drill.audioSrc ? [drill.audioSrc] : [],
      ),
      ...(lesson.shadowingPassage?.audioSrc ? [lesson.shadowingPassage.audioSrc] : []),
    ]);

    expect(new Set(audioPaths).size).toBe(audioPaths.length);
    expect(audioPaths.every((path) => path.startsWith("/audio/lessons/"))).toBe(true);
  });

  it("renders audio playback controls for drills and the classroom line", () => {
    const lesson = getAllLessons().find(
      (candidate) => candidate.drillSentences[0]?.audioSrc && candidate.shadowingPassage?.audioSrc,
    );

    expect(lesson).toBeDefined();

    const html = renderToStaticMarkup(createElement(LessonViewer, { lesson: lesson! }));
    const playButtons = html.match(/>Play<\/button>/g) ?? [];

    expect(playButtons.length).toBeGreaterThanOrEqual(lesson!.keyCues.length + 2);
  });
});
