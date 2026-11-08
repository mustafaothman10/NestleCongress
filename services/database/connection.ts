
import {
  openDatabaseAsync,
  type SQLiteDatabase,
} from 'expo-sqlite';

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
