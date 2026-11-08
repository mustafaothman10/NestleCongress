import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './services/database/schema.ts',
  out: './drizzle/migrations',
  dialect: 'sqlite',
  driver: 'expo',
});