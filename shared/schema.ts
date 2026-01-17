import { pgTable, text, serial, jsonb, timestamp, boolean, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const forms = pgTable("forms", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().default("Untitled Form"),
  description: text("description"),
  content: jsonb("content").notNull().$type<FormElement[]>(), // Array of form elements
  isPublished: boolean("is_published").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const submissions = pgTable("submissions", {
  id: serial("id").primaryKey(),
  formId: integer("form_id").references(() => forms.id),
  data: jsonb("data").notNull(), // Key-value pair of fieldId: value
  submittedAt: timestamp("submitted_at").defaultNow(),
});

export const faculty = pgTable("faculty", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  designation: text("designation").notNull(),
  department: text("department").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  photo: text("photo").notNull(), // Stores URL to photo
  degree: text("degree").notNull(),
});

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  category: text("category", { enum: ["blog", "announcement", "notice"] }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// === BASE SCHEMAS ===
export const insertFacultySchema = createInsertSchema(faculty).omit({ id: true });
export const insertPostSchema = createInsertSchema(posts).omit({ id: true, createdAt: true });

// === EXPLICIT API CONTRACT TYPES ===
export type Faculty = typeof faculty.$inferSelect;
export type InsertFaculty = z.infer<typeof insertFacultySchema>;
export type Post = typeof posts.$inferSelect;
export type InsertPost = z.infer<typeof insertPostSchema>;

// Request types
export type CreateFacultyRequest = InsertFaculty;
export type UpdateFacultyRequest = Partial<InsertFaculty>;
export type CreatePostRequest = InsertPost;
export type UpdatePostRequest = Partial<InsertPost>;

// Response types
export type FacultyResponse = Faculty;
export type FacultyListResponse = Faculty[];
export type PostResponse = Post;
export type PostListResponse = Post[];

// === TYPES ===
export type FormElementType = 
  | "header" 
  | "paragraph" 
  | "text" 
  | "textarea" 
  | "email"
  | "number" 
  | "checkbox" 
  | "radio"
  | "select"
  | "slider"
  | "rating"
  | "date"
  | "file";



export interface FormElement {
  id: string;
  type: FormElementType;
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: string[]; // For select/radio
  min?: number;
  max?: number;
  step?: number;
  accept?: string; // For file upload (e.g., "image/*,application/pdf")
}


export const insertFormSchema = createInsertSchema(forms).omit({ 
  id: true, 
  createdAt: true 
});

export const insertSubmissionSchema = createInsertSchema(submissions).omit({
  id: true,
  submittedAt: true
});

export type Form = typeof forms.$inferSelect;
export type InsertForm = z.infer<typeof insertFormSchema>;
export type Submission = typeof submissions.$inferSelect;
export type InsertSubmission = z.infer<typeof insertSubmissionSchema>;

// === API CONTRACT TYPES ===
export type CreateFormRequest = InsertForm;
export type UpdateFormRequest = Partial<InsertForm>;
export type SubmitFormRequest = { data: Record<string, any> };
