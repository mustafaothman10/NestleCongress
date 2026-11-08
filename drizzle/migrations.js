import journal from './meta/_journal.json';

const m0000 = `CREATE TABLE "answers" (
	"id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	"question_id" integer NOT NULL,
	"body" text NOT NULL,
	"answered_at" text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE "poll_options" (
	"id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	"poll_id" integer NOT NULL,
	"name" text NOT NULL,
	"vote_count" integer DEFAULT 0 NOT NULL,
	FOREIGN KEY ("poll_id") REFERENCES "polls"("id") ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE "polls" (
	"id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	"name" text NOT NULL,
	"created_at" text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "questions" (
	"id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	"title" text,
	"body" text NOT NULL,
	"asked_at" text DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"answered" integer DEFAULT 0 NOT NULL,
	"vote_count" integer DEFAULT 0 NOT NULL,
	CONSTRAINT "questions_answered_check" CHECK("questions"."answered" IN (0, 1))
);
--> statement-breakpoint
CREATE TABLE "resources" (
	"id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	"name" text NOT NULL,
	"type" text NOT NULL,
	"file_url" text,
	"file_name" text,
	"mime_type" text,
	"created_at" text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "speakers" (
	"id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"country" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sessions" (
	"id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	"name" text NOT NULL,
	"type" text NOT NULL,
	"date" text NOT NULL,
	"time" text NOT NULL,
	"speaker_id" integer NOT NULL,
	UNIQUE ("speaker_id"),
	FOREIGN KEY ("speaker_id") REFERENCES "speakers"("id") ON UPDATE no action ON DELETE restrict
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"hospital" text,
	"location" text,
	"sessions_attended" text DEFAULT '[]',
	"certificates_gained" text DEFAULT '[]',
	"saved_items" text DEFAULT '[]'
);
--> statement-breakpoint
CREATE UNIQUE INDEX "users_email_unique" ON "users" ("email");
--> statement-breakpoint
CREATE TABLE "venues" (
	"id" integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	"name" text NOT NULL,
	"date_from" text NOT NULL,
	"date_to" text NOT NULL,
	"parking" integer DEFAULT 0 NOT NULL,
	"wifi" integer DEFAULT 0 NOT NULL,
	"projector" integer DEFAULT 0 NOT NULL,
	"catering" integer DEFAULT 0 NOT NULL,
	"accessible" integer DEFAULT 0 NOT NULL,
	"x_coordinate" real,
	"y_coordinate" real,
	CONSTRAINT "venues_parking_check" CHECK("venues"."parking" IN (0, 1)),
	CONSTRAINT "venues_wifi_check" CHECK("venues"."wifi" IN (0, 1)),
	CONSTRAINT "venues_projector_check" CHECK("venues"."projector" IN (0, 1)),
	CONSTRAINT "venues_catering_check" CHECK("venues"."catering" IN (0, 1)),
	CONSTRAINT "venues_accessible_check" CHECK("venues"."accessible" IN (0, 1))
);
--> statement-breakpoint
CREATE INDEX "answers_question_id_idx" ON "answers" ("question_id");`;

export default {
  journal,
  migrations: {
    m0000,
  },
};
