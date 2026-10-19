import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppFrame } from "@/components/layout/app-frame";
import {
  getAllLessons,
  getLessonBySlug,
  getNextLesson,
  getPreviousLesson,
} from "@/features/lessons/data-access/lessons";
import { LessonViewer } from "@/features/lessons/components/lesson-viewer";

export function generateStaticParams() {
  return getAllLessons().map((lesson) => ({
    lessonSlug: lesson.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lessonSlug: string }>;
}): Promise<Metadata> {
  const { lessonSlug } = await params;
  const lesson = getLessonBySlug(lessonSlug);

  if (!lesson) {
    return {
      title: "Lesson not found",
    };
  }

  return {
    title: lesson.title,
    description: lesson.summary,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ lessonSlug: string }>;
}) {
  const { lessonSlug } = await params;
  const lesson = getLessonBySlug(lessonSlug);

  if (!lesson) {
    notFound();
  }

  return (
    <AppFrame activeHref="/lessons">
      <LessonViewer
        lesson={lesson}
        nextLesson={getNextLesson(lesson)}
        previousLesson={getPreviousLesson(lesson)}
      />
    </AppFrame>
  );
}
