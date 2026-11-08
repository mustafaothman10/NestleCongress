import { eq } from 'drizzle-orm';

import { getDb } from '../database';
import { venues } from '../database/schema';

export type Venue = typeof venues.$inferSelect;
export type NewVenue = typeof venues.$inferInsert;

export async function listVenues(): Promise<Venue[]> {
  const db = getDb();
  return db.select().from(venues);
}

export async function getVenueById(id: number): Promise<Venue | null> {
  const db = getDb();
  const result = await db.select().from(venues).where(eq(venues.id, id));
  return result[0] ?? null;
}

export async function createVenue(input: NewVenue): Promise<Venue> {
  const db = getDb();
  const result = await db.insert(venues).values(input).returning();

  if (!result[0]) {
    throw new Error('Failed to create venue.');
  }

  return result[0];
}

export async function updateVenue(
  id: number,
  updates: Partial<NewVenue>
): Promise<Venue | null> {
  const db = getDb();
  const result = await db
    .update(venues)
    .set(updates)
    .where(eq(venues.id, id))
    .returning();

  return result[0] ?? null;
}

export async function deleteVenue(id: number): Promise<boolean> {
  const db = getDb();
  const result = await db.delete(venues).where(eq(venues.id, id)).returning();
  return result.length > 0;
}
