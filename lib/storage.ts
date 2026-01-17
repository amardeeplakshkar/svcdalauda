import { db } from "./db";
import {
  forms,
  submissions,
  type InsertForm,
  type Form,
  type InsertSubmission,
  type Submission,
  type UpdateFormRequest,
  Faculty,
  CreateFacultyRequest,
  UpdateFacultyRequest,
  Post,
  CreatePostRequest,
  UpdatePostRequest,
  faculty,
  posts
} from "@/shared/schema";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getForms(): Promise<Form[]>;
  getForm(id: number): Promise<Form | undefined>;
  createForm(form: InsertForm): Promise<Form>;
  updateForm(id: number, updates: UpdateFormRequest): Promise<Form>;
  createSubmission(submission: InsertSubmission): Promise<Submission>;
  getSubmissions(formId: number): Promise<Submission[]>;
   // Faculty
  getFacultyList(): Promise<Faculty[]>;
  getFaculty(id: number): Promise<Faculty | undefined>;
  createFaculty(faculty: CreateFacultyRequest): Promise<Faculty>;
  updateFaculty(id: number, updates: UpdateFacultyRequest): Promise<Faculty>;
  deleteFaculty(id: number): Promise<void>;

  // Posts
  getPosts(category?: "blog" | "announcement" | "notice"): Promise<Post[]>;
  getPost(id: number): Promise<Post | undefined>;
  createPost(post: CreatePostRequest): Promise<Post>;
  updatePost(id: number, updates: UpdatePostRequest): Promise<Post>;
  deletePost(id: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getForms(): Promise<Form[]> {
    return await db.select().from(forms).orderBy(desc(forms.createdAt));
  }

  async getForm(id: number): Promise<Form | undefined> {
    const [form] = await db.select().from(forms).where(eq(forms.id, id));
    return form;
  }

  async createForm(insertForm: InsertForm): Promise<Form> {
    const [form] = await db.insert(forms).values(insertForm).returning();
    return form;
  }

  async updateForm(id: number, updates: UpdateFormRequest): Promise<Form> {
    const [updated] = await db
      .update(forms)
      .set(updates)
      .where(eq(forms.id, id))
      .returning();
    return updated;
  }

  async createSubmission(insertSubmission: InsertSubmission): Promise<Submission> {
    const [submission] = await db
      .insert(submissions)
      .values(insertSubmission)
      .returning();
    return submission;
  }

  async getSubmissions(formId: number): Promise<Submission[]> {
    return await db
      .select()
      .from(submissions)
      .where(eq(submissions.formId, formId))
      .orderBy(desc(submissions.submittedAt));
  }

  // Faculty Operations
  async getFacultyList(): Promise<Faculty[]> {
    return await db.select().from(faculty);
  }

  async getFaculty(id: number): Promise<Faculty | undefined> {
    const [item] = await db.select().from(faculty).where(eq(faculty.id, id));
    return item;
  }

  async createFaculty(insertFaculty: CreateFacultyRequest): Promise<Faculty> {
    const [item] = await db.insert(faculty).values(insertFaculty).returning();
    return item;
  }

  async updateFaculty(id: number, updates: UpdateFacultyRequest): Promise<Faculty> {
    const [item] = await db.update(faculty)
      .set(updates)
      .where(eq(faculty.id, id))
      .returning();
    return item;
  }

  async deleteFaculty(id: number): Promise<void> {
    await db.delete(faculty).where(eq(faculty.id, id));
  }

  // Post Operations
  async getPosts(category?: "blog" | "announcement" | "notice"): Promise<Post[]> {
    if (category) {
      return await db.select().from(posts).where(eq(posts.category, category)).orderBy(desc(posts.createdAt));
    }
    return await db.select().from(posts).orderBy(desc(posts.createdAt));
  }

  async getPost(id: number): Promise<Post | undefined> {
    const [item] = await db.select().from(posts).where(eq(posts.id, id));
    return item;
  }

  async createPost(insertPost: CreatePostRequest): Promise<Post> {
    const [item] = await db.insert(posts).values(insertPost).returning();
    return item;
  }

  async updatePost(id: number, updates: UpdatePostRequest): Promise<Post> {
    const [item] = await db.update(posts)
      .set(updates)
      .where(eq(posts.id, id))
      .returning();
    return item;
  }

  async deletePost(id: number): Promise<void> {
    await db.delete(posts).where(eq(posts.id, id));
  }
}

export const storage = new DatabaseStorage();
