import { sql } from 'drizzle-orm';
import {
  check,
  index,
  integer,
  real,
  sqliteTable,
  text,
} from 'drizzle-orm/sqlite-core';

// USERS
export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  password: text('password').notNull().default(''),
  hospital: text('hospital'),
  location: text('location'),
  sessionsAttended: text('sessions_attended').default('[]'),
  certificatesGained: text('certificates_gained').default('[]'),
  savedItems: text('saved_items').default('[]'),
});

// SPEAKERS
// A speaker may have at most one session (enforced by the UNIQUE on sessions.speaker_id)
export const speakers = sqliteTable('speakers', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  description: text('description').notNull(),
  country: text('country').notNull(),
});

// SESSIONS
// Every session has exactly one speaker (NOT NULL), and a speaker can only
// be attached to one session (UNIQUE) => one-to-one, speaker side optional.
export const sessions = sqliteTable('sessions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  type: text('type').notNull(),
  date: text('date').notNull(),
  time: text('time').notNull(),
  speakerId: integer('speaker_id')
    .notNull()
    .unique()
    .references(() => speakers.id, { onDelete: 'restrict' }),
});

// POLLS
export const polls = sqliteTable('polls', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  createdAt: text('created_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

export const pollOptions = sqliteTable('poll_options', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  pollId: integer('poll_id')
    .notNull()
    .references(() => polls.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  voteCount: integer('vote_count').notNull().default(0),
});

// RESOURCES
export const resources = sqliteTable('resources', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  type: text('type').notNull(),
  fileUrl: text('file_url'),
  fileName: text('file_name'),
  mimeType: text('mime_type'),
  createdAt: text('created_at')
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
});

// QUESTIONS
export const questions = sqliteTable(
  'questions',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    title: text('title'),
    body: text('body').notNull(),
    askedAt: text('asked_at')
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
    answered: integer('answered').notNull().default(0),
    voteCount: integer('vote_count').notNull().default(0),
  },
  (table) => [
    check('questions_answered_check', sql`${table.answered} IN (0, 1)`),
  ]
);

// ANSWERS
// One question has many answers; deleting a question deletes its answers.
export const answers = sqliteTable(
  'answers',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    questionId: integer('question_id')
      .notNull()
      .references(() => questions.id, { onDelete: 'cascade' }),
    body: text('body').notNull(),
    answeredAt: text('answered_at')
      .notNull()
      .default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => [index('answers_question_id_idx').on(table.questionId)]
);

// VENUES
export const venues = sqliteTable(
  'venues',
  {
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    dateFrom: text('date_from').notNull(),
    dateTo: text('date_to').notNull(),
    parking: integer('parking').notNull().default(0),
    wifi: integer('wifi').notNull().default(0),
    projector: integer('projector').notNull().default(0),
    catering: integer('catering').notNull().default(0),
    accessible: integer('accessible').notNull().default(0),
    xCoordinate: real('x_coordinate'),
    yCoordinate: real('y_coordinate'),
  },
  (table) => [
    check('venues_parking_check', sql`${table.parking} IN (0, 1)`),
    check('venues_wifi_check', sql`${table.wifi} IN (0, 1)`),
    check('venues_projector_check', sql`${table.projector} IN (0, 1)`),
    check('venues_catering_check', sql`${table.catering} IN (0, 1)`),
    check('venues_accessible_check', sql`${table.accessible} IN (0, 1)`),
  ]
);