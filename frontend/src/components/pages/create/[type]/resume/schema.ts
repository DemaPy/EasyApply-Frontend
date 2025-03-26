import { z } from "zod";

export const resumeSchema = z.object({
  resume: z.string().min(6, {
    message: "Title must be at least 2 characters.",
  }),
  context: z.string(),
  template: z.string()
});


export type ResumeSchema = typeof resumeSchema;