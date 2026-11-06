import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './services/database/schema.ts',
  out: './drizzle',
  dialect: 'sqlite',
  driver: 'expo',
});