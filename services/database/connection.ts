
import {
  openDatabaseAsync,
  type SQLiteDatabase,
} from 'expo-sqlite';

import { sql } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { migrate } from 'drizzle-orm/expo-sqlite/migrator';

import migrations from './../../drizzle/migrations';
import * as schema from './schema';

export const DB_NAME = 'nestle.db';

function createDatabase(client: SQLiteDatabase) {
  return drizzle(client, { schema });
}

export type DatabaseClient = ReturnType<typeof createDatabase>;

let sqliteDatabase: SQLiteDatabase | null = null;
let database: DatabaseClient | null = null;

async function ensureUserPasswordColumn(): Promise<void> {
  if (!sqliteDatabase) {
    return;
  }

  try {
    const columns = (await sqliteDatabase.getAllAsync('PRAGMA table_info(users);')) as Array<{ name?: string }>;
    const hasPasswordColumn = columns.some((column) => column.name === 'password');

    if (!hasPasswordColumn) {
      await sqliteDatabase.execAsync("ALTER TABLE users ADD COLUMN password TEXT DEFAULT '';");
    }

    await sqliteDatabase.execAsync(`
      UPDATE users
      SET password = 'demo123'
      WHERE (password IS NULL OR password = '')
        AND email IN ('sara.khalid@example.com', 'john.muller@example.com', 'li.wei@example.com');
    `);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const cause = (error as { cause?: unknown })?.cause;
    const causeMessage = cause instanceof Error ? cause.message : String(cause ?? '');
    const combined = `${message} ${causeMessage}`.toLowerCase();

    if (
      !combined.includes('duplicate column') &&
      !combined.includes('duplicate column name') &&
      !combined.includes('already exists')
    ) {
      throw error;
    }
  }
}

// Initialize SQLite and Drizzle
export async function initDatabase(): Promise<DatabaseClient> {
  if (database) {
    return database;
  }

  const client = await openDatabaseAsync(DB_NAME);

  try {
    const db = createDatabase(client);

    // Run generated Drizzle migrations
    await migrate(db, migrations);

    sqliteDatabase = client;
    database = db;

    await ensureUserPasswordColumn();

    console.log('SQLite database initialized');

    return db;
  } catch (error) {
    await client.closeAsync();
    throw error;
  }
}

// Get the initialized database
export function getDb(): DatabaseClient {
  if (!database) {
    throw new Error(
      'Database not initialized. Call initDatabase() first.'
    );
  }

  return database;
}

// Close the database
export async function closeDatabase(): Promise<void> {
  if (sqliteDatabase) {
    await sqliteDatabase.closeAsync();
    sqliteDatabase = null;
    database = null;
  }
}
