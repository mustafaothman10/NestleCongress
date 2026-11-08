import { eq } from 'drizzle-orm';

import { getDb } from '../database';
import { speakers } from '../database/schema';

export type Speaker = typeof speakers.$inferSelect;
export type NewSpeaker = typeof speakers.$inferInsert;

export async function listSpeakers(): Promise<Speaker[]> {
  const db = getDb();
  return db.select().from(speakers);
}

export async function getSpeakerById(id: number): Promise<Speaker | null> {
  const db = getDb();
  const result = await db.select().from(speakers).where(eq(speakers.id, id));
  return result[0] ?? null;
}

export async function createSpeaker(input: NewSpeaker): Promise<Speaker> {
  const db = getDb();
  const result = await db.insert(speakers).values(input).returning();

  if (!result[0]) {
    throw new Error('Failed to create speaker.');
  }

  return result[0];
}

export async function updateSpeaker(
  id: number,
  updates: Partial<NewSpeaker>
): Promise<Speaker | null> {
  const db = getDb();
  const result = await db
    .update(speakers)
    .set(updates)
    .where(eq(speakers.id, id))
    .returning();

  return result[0] ?? null;
}

export async function deleteSpeaker(id: number): Promise<boolean> {
  const db = getDb();
  const result = await db.delete(speakers).where(eq(speakers.id, id)).returning();
  return result.length > 0;
}
