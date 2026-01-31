import { pgTable, text, serial, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const careerPaths = pgTable("career_paths", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(), // e.g. "10th", "12th"
  data: jsonb("data").notNull(), // The tree structure
});

export const insertCareerPathSchema = createInsertSchema(careerPaths);

export type CareerPath = typeof careerPaths.$inferSelect;
export type InsertCareerPath = z.infer<typeof insertCareerPathSchema>;

// Recursive type for the JSON data
export type CareerNode = {
  id: string;
  label: string;
  description?: string;
  jobCategory?: "Government" | "Private" | "Both";
  lpaRange?: string;
  children?: CareerNode[];
};

export const careerNodeSchema: z.ZodType<CareerNode> = z.lazy(() =>
  z.object({
    id: z.string(),
    label: z.string(),
    description: z.string().optional(),
    jobCategory: z.enum(["Government", "Private", "Both"]).optional(),
    lpaRange: z.string().optional(),
    children: z.array(careerNodeSchema).optional(),
  })
);
