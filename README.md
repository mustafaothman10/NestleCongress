# Nestle Congress App

## Overview
This project is a mobile conference app built with Expo and React Native for the Nestle Congress experience. It combines a modern event app flow with authentication, agenda browsing, speaker profiles, resources, venue information, polls, and attendee interaction. The app is structured as a local SQLite-backed experience, designed to work as an offline-capable demo while still supporting a database-driven architecture.

The goal of the app is to give users a smooth conference journey: access the app, sign in or create an account, browse the event schedule, view key speakers, access resources, and interact with conference content.

## Stack Used
The project uses the following stack:

- React Native + Expo
  - App development platform and runtime
  - Expo Router for navigation
- TypeScript
  - Typed application and service layers
- SQLite
  - Local persistent storage for app data
- Drizzle ORM
  - Database schema definition and data access layer
- Expo SQLite
  - Native SQLite database access in the mobile app
- NativeWind / Tailwind CSS
  - Styling and UI presentation layer
- Expo Router
  - File-based app routing and navigation structure

## Project Structure
The repository is organized around a clean app + services + database structure:

- app/
  - Root application routes and screens
  - app/index.tsx: entry point
  - app/_layout.tsx: main route layout and database bootstrap
  - app/(auth)/: login and signup flow
  - app/(tabs)/: core app screens such as profile, agenda, speakers, venue, and voting
  - app/(quick_access)/: quick-access screens and navigation entry points

- services/
  - Auth logic for login/signup
  - Database helpers and schema definitions
  - Seed logic for initializing demo records
  - User profile and data operations

- drizzle/
  - Migration files and database schema migration setup

- global.css and theme configuration
  - Shared styling/theme definitions

## Database and Data Flow
The app uses a local SQLite database as the primary source of application data. The database schema is defined in the Drizzle schema layer and includes tables such as:

- users
- speakers
- sessions
- polls
- poll_options
- resources
- questions
- answers
- venues

This structure allows the app to load conference-related records from the database instead of depending only on static frontend state. The app initializes the DB on startup and seeds it if empty.

## AI-Generated Data and Profile Usage
AI tools were used to help generate and shape the sample profile data and initial demo content used in this project.

This includes:
- generated demo user profiles such as Sara Khalid, John Müller, and Li Wei
- sample user metadata used for login-testing and profile presentation
- placeholder but realistic conference-style values for development and UI validation

These AI-assisted data entries were used only for demonstration and prototyping in the local development database. They are not intended to represent production or real customer records.

Where AI tools were not used:
- the core app architecture and project structure were built manually
- the navigation stack and screen logic were created directly in the codebase
- the SQLite schema structure and Drizzle configuration were implemented intentionally by the developer
- the real application flow, auth behavior, and database logic were built and debugged as actual code rather than generated as final production data

## Real Data Source
The real application data in this app is intended to come from the local SQLite database, not from hardcoded screen values.

Examples of real DB-driven data:
- users and authentication data
- speaker information
- session data
- survey/poll data
- questions, answers, resources, and venue records

The seed step in the project populates the database with initial demo records, and the application reads from that database when rendering data-driven screens. This follows the correct application pattern: DB as the source of truth, UI as the presentation layer.

## Authentication and Access Flow
The project includes a functional local authentication flow with:
- login screen
- signup screen
- route flow between auth and application screens
- database-backed user creation and lookup

The app is designed to be expanded further with stronger security protections and route-level authorization.

## Current App Scope
The app currently includes the following functional areas:
- authentication (login/signup)
- profile management and user records
- conference agenda
- speaker directory
- resources and resource access
- venue information
- voting / polls
- ask / questions / Q&A style interactions

## Future Improvements (If More Time Were Available)
The following enhancements would make the app stronger and closer to a production-ready conference platform:

- Search bar
  - Add global or local search across speakers, sessions, resources, and questions

- Better Authentication and Authorization Stack
  - Replace demo local auth with a more complete JWT/session-based flow
  - Add protected routes and role-based access checks
  - Add account recovery, password reset, and secure session management

- Better UI Structure
  - Create a more scalable component design system
  - Break the screens into reusable widgets and modular UI blocks
  - Improve consistency across tab screens and quick-access views

- Functional Features
  - Add real filtering and sorting for agenda and resources
  - Add favorites/bookmarks with persistent user state
  - Add push notifications or reminders for sessions
  - Add better profile editing and attendee engagement flows

- No Hardcoded Data at All
  - Remove all demo/static assumptions from the app
  - Fully source all content and profiles from a backend or database layer
  - Ensure all app data is real, validated, and environment-specific rather than seeded or handwritten for mockup testing

- Testing Coverage with Jest and Maestro
  - Add backend unit and integration tests with Jest for auth, database, and service logic
  - Add mobile end-to-end UI testing with Maestro for login, signup, navigation, and core app flows
  - Automate regression checks for critical user journeys and database behaviors

## Notes
This project is a strong working demo of a database-driven mobile event experience built on Expo, TypeScript, SQLite, and Drizzle. It successfully demonstrates the foundations of a conference app with local auth, route-based navigation, and SQLite-backed records. The remaining improvements are mainly around production-hardening, stronger auth, cleaner UI structure, full removal of mock data patterns, and stronger automated testing.
