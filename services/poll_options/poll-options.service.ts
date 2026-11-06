import { eq } from 'drizzle-orm';

import { getDb } from '../database';
import { pollOptions } from '../database/schema';

export type PollOption = typeof pollOptions.$inferSelect;
export type NewPollOption = typeof pollOptions.$inferInsert;

export async function listPollOptions(): Promise<PollOption[]> {
  const db = getDb();
  return db.select().from(pollOptions);
}

export async function getPollOptionById(id: number): Promise<PollOption | null> {
  const db = getDb();
  const result = await db.select().from(pollOptions).where(eq(pollOptions.id, id));
  return result[0] ?? null;
}

export async function getPollOptionsByPollId(pollId: number): Promise<PollOption[]> {
  const db = getDb();
  return db.select().from(pollOptions).where(eq(pollOptions.pollId, pollId));
}

export async function createPollOption(input: NewPollOption): Promise<PollOption> {
  const db = getDb();
  const result = await db.insert(pollOptions).values(input).returning();

  if (!result[0]) {
    throw new Error('Failed to create poll option.');
  }

  return result[0];
}

export async function updatePollOption(
  id: number,
  updates: Partial<NewPollOption>
): Promise<PollOption | null> {
  const db = getDb();
  const result = await db
    .update(pollOptions)
    .set(updates)
    .where(eq(pollOptions.id, id))
    .returning();

  return result[0] ?? null;
}

export async function deletePollOption(id: number): Promise<boolean> {
  const db = getDb();
  const result = await db.delete(pollOptions).where(eq(pollOptions.id, id)).returning();
  return result.length > 0;
}
