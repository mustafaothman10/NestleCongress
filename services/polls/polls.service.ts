import { eq } from 'drizzle-orm';

import { getDb } from '../database';
import { polls } from '../database/schema';

export type Poll = typeof polls.$inferSelect;
export type NewPoll = typeof polls.$inferInsert;

export async function listPolls(): Promise<Poll[]> {
  const db = getDb();
  return db.select().from(polls);
}

export async function getPollById(id: number): Promise<Poll | null> {
  const db = getDb();
  const result = await db.select().from(polls).where(eq(polls.id, id));
  return result[0] ?? null;
}

export async function createPoll(input: NewPoll): Promise<Poll> {
  const db = getDb();
  const result = await db.insert(polls).values(input).returning();

  if (!result[0]) {
    throw new Error('Failed to create poll.');
  }

  return result[0];
}

export async function updatePoll(
  id: number,
  updates: Partial<NewPoll>
): Promise<Poll | null> {
  const db = getDb();
  const result = await db
    .update(polls)
    .set(updates)
    .where(eq(polls.id, id))
    .returning();

  return result[0] ?? null;
}

export async function deletePoll(id: number): Promise<boolean> {
  const db = getDb();
  const result = await db.delete(polls).where(eq(polls.id, id)).returning();
  return result.length > 0;
}
