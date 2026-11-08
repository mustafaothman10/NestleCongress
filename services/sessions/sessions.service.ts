import { eq } from 'drizzle-orm';

import { getDb } from '../database';
import { sessions, speakers } from '../database/schema';

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
//quering the Sessions table and joining it with the speakers table to get the speaker name for each session. This will allow us to display the speaker name along with the session details in the app.
export async function listSessionsWithSpeaker() {
  const db = getDb();

  return db
    .select({
      id: sessions.id,
      title: sessions.name,
      time: sessions.time,
      date: sessions.date,
      type: sessions.type,
      speaker: speakers.name,
    })
    .from(sessions)
    .leftJoin(speakers, eq(sessions.speakerId, speakers.id));
}
