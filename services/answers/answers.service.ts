import { eq } from 'drizzle-orm';

import { getDb } from '../database';
import { answers } from '../database/schema';

export type Answer = typeof answers.$inferSelect;
export type NewAnswer = typeof answers.$inferInsert;

export async function listAnswers(): Promise<Answer[]> {
  const db = getDb();
  return db.select().from(answers);
}

export async function getAnswerById(id: number): Promise<Answer | null> {
  const db = getDb();
  const result = await db.select().from(answers).where(eq(answers.id, id));
  return result[0] ?? null;
}

export async function createAnswer(input: NewAnswer): Promise<Answer> {
  const db = getDb();
  const result = await db.insert(answers).values(input).returning();

  if (!result[0]) {
    throw new Error('Failed to create answer.');
  }

  return result[0];
}

export async function updateAnswer(
  id: number,
  updates: Partial<NewAnswer>
): Promise<Answer | null> {
  const db = getDb();
  const result = await db
    .update(answers)
    .set(updates)
    .where(eq(answers.id, id))
    .returning();

  return result[0] ?? null;
}

export async function deleteAnswer(id: number): Promise<boolean> {
  const db = getDb();
  const result = await db.delete(answers).where(eq(answers.id, id)).returning();
  return result.length > 0;
}
