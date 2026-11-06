import { eq } from 'drizzle-orm';

import { getDb } from '../database';
import { questions } from '../database/schema';

export type Question = typeof questions.$inferSelect;
export type NewQuestion = typeof questions.$inferInsert;

export async function listQuestions(): Promise<Question[]> {
  const db = getDb();
  return db.select().from(questions);
}

export async function getQuestionById(id: number): Promise<Question | null> {
  const db = getDb();
  const result = await db.select().from(questions).where(eq(questions.id, id));
  return result[0] ?? null;
}

export async function createQuestion(input: NewQuestion): Promise<Question> {
  const db = getDb();
  const result = await db.insert(questions).values(input).returning();

  if (!result[0]) {
    throw new Error('Failed to create question.');
  }

  return result[0];
}

export async function updateQuestion(
  id: number,
  updates: Partial<NewQuestion>
): Promise<Question | null> {
  const db = getDb();
  const result = await db
    .update(questions)
    .set(updates)
    .where(eq(questions.id, id))
    .returning();

  return result[0] ?? null;
}

export async function deleteQuestion(id: number): Promise<boolean> {
  const db = getDb();
  const result = await db.delete(questions).where(eq(questions.id, id)).returning();
  return result.length > 0;
}
