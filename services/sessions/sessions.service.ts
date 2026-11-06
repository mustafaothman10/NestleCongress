import { eq } from 'drizzle-orm';

import { getDb } from '../database';
import { sessions } from '../database/schema';

export type Session = typeof sessions.$inferSelect;
export type NewSession = typeof sessions.$inferInsert;

export async function listSessions(): Promise<Session[]> {
  const db = getDb();
  return db.select().from(sessions);
}

export async function getSessionById(id: number): Promise<Session | null> {
  const db = getDb();
  const result = await db.select().from(sessions).where(eq(sessions.id, id));
  return result[0] ?? null;
}

export async function getSessionsBySpeakerId(speakerId: number): Promise<Session[]> {
  const db = getDb();
  return db.select().from(sessions).where(eq(sessions.speakerId, speakerId));
}

export async function createSession(input: NewSession): Promise<Session> {
  const db = getDb();
  const result = await db.insert(sessions).values(input).returning();

  if (!result[0]) {
    throw new Error('Failed to create session.');
  }

  return result[0];
}

export async function updateSession(
  id: number,
  updates: Partial<NewSession>
): Promise<Session | null> {
  const db = getDb();
  const result = await db
    .update(sessions)
    .set(updates)
    .where(eq(sessions.id, id))
    .returning();

  return result[0] ?? null;
}

export async function deleteSession(id: number): Promise<boolean> {
  const db = getDb();
  const result = await db.delete(sessions).where(eq(sessions.id, id)).returning();
  return result.length > 0;
}
