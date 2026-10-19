import { z } from "zod";

export const audioCueSchema = z.object({
  label: z.string().min(1),
  text: z.string().min(1),
  ipa: z.string().optional(),
  audioSrc: z.string().min(1).optional(),
  caption: z.string().min(1).optional(),
  rhythm: z.string().min(1).optional(),
  pauseAfterMs: z.number().int().positive().optional(),
});

export const minimalPairSchema = z.object({
  left: audioCueSchema,
  right: audioCueSchema,
  note: z.string().min(1),
});

export const drillSentenceSchema = z.object({
  text: z.string().min(1),
  ipa: z.string().optional(),
  audioSrc: z.string().min(1).optional(),
  caption: z.string().min(1).optional(),
  rhythm: z.string().min(1).optional(),
  coachingCue: z.string().min(1),
});

export const lessonSectionSchema = z.object({
  heading: z.string().min(1),
  body: z.string().min(1),
  coachTip: z.string().min(1).optional(),
});

export const shadowingPassageSchema = z.object({
  title: z.string().min(1),
  text: z.string().min(1),
  audioSrc: z.string().min(1).optional(),
  rhythm: z.array(z.string().min(1)).min(1),
  captionCues: z.array(z.string().min(1)).min(1),
});

export const lessonSchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  level: z.number().int().positive(),
  module: z.string().min(1),
  order: z.number().int().positive(),
  title: z.string().min(1),
  shortTitle: z.string().min(1),
  focusSound: z.string().min(1),
  ipaFocus: z.string().min(1),
  summary: z.string().min(1),
  introduction: z.string().min(1),
  estimatedMinutes: z.number().int().positive(),
  coachEmoji: z.string().min(1),
  learningGoals: z.array(z.string().min(1)).min(1),
  sections: z.array(lessonSectionSchema).min(1),
  keyCues: z.array(audioCueSchema).min(1),
  minimalPairs: z.array(minimalPairSchema).default([]),
  drillSentences: z.array(drillSentenceSchema).min(1),
  shadowingPassage: shadowingPassageSchema.optional(),
  productionNotes: z.array(z.string().min(1)).min(1),
});

export const curriculumSchema = z.array(lessonSchema).min(1);

export type Lesson = z.infer<typeof lessonSchema>;
export type AudioCue = z.infer<typeof audioCueSchema>;
export type DrillSentence = z.infer<typeof drillSentenceSchema>;
export type MinimalPair = z.infer<typeof minimalPairSchema>;
