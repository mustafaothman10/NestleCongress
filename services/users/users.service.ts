import { eq } from 'drizzle-orm';

import { getDb } from '../database';
import { users } from '../database/schema';

export type AppUser = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export async function listUsers(): Promise<AppUser[]> {
  const db = getDb();
  return db.select().from(users);
}

export async function getUserById(id: number): Promise<AppUser | null> {
  const db = getDb();
  const result = await db.select().from(users).where(eq(users.id, id));
  return result[0] ?? null;
}

export async function getUserByEmail(email: string): Promise<AppUser | null> {
  const db = getDb();
  const result = await db.select().from(users).where(eq(users.email, email));
  return result[0] ?? null;
}

export async function createUser(input: NewUser): Promise<AppUser> {
  const db = getDb();
  const result = await db.insert(users).values(input).returning();

  if (!result[0]) {
    throw new Error('Failed to create user.');
  }

  return result[0];
}

export async function updateUser(
  id: number,
  updates: Partial<NewUser>
): Promise<AppUser | null> {
  const db = getDb();
  const result = await db
    .update(users)
    .set(updates)
    .where(eq(users.id, id))
    .returning();

  return result[0] ?? null;
}

export async function deleteUser(id: number): Promise<boolean> {
  const db = getDb();
  const result = await db.delete(users).where(eq(users.id, id)).returning();
  return result.length > 0;
}
