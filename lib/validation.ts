import * as z from "zod";

export const QuestionsSchema = z.object({
  title: z.string().min(5, { message: "Wrong" }).max(130),
  explanation: z.string().min(500),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
});