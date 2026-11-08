import { initDatabase } from '@/services/database';
import { createUser, getUserByEmail, updateUser } from '@/services/users';

export type CreateAccountInput = {
  name: string;
  email: string;
  hospital?: string | null;
  password: string;
};

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

const legacyDemoPasswords: Record<string, string> = {
  'sara.khalid@example.com': 'demo123',
  'john.muller@example.com': 'demo123',
  'li.wei@example.com': 'demo123',
};

export async function loginWithEmail(email: string, password: string) {
  await initDatabase();

  const normalizedEmail = normalizeEmail(email);

  if (!normalizedEmail) {
    throw new Error('Email is required.');
  }

  if (!password || password.trim().length < 6) {
    throw new Error('Password must be at least 6 characters long.');
  }

  const user = await getUserByEmail(normalizedEmail);

  if (!user) {
    throw new Error('No account found with that email.');
  }

  const expectedPassword = legacyDemoPasswords[normalizedEmail] ?? user.password ?? '';

  if (user.password !== password && expectedPassword !== password) {
    throw new Error('Incorrect password.');
  }

  if (!user.password || user.password === '') {
    await updateUser(user.id, { password: expectedPassword });
  }

  return { ...user, password: expectedPassword };
}

export async function signupWithEmail({ name, email, hospital, password }: CreateAccountInput) {
  await initDatabase();

  const normalizedName = name.trim();
  const normalizedEmail = normalizeEmail(email);

  if (!normalizedName) {
    throw new Error('Full name is required.');
  }

  if (!normalizedEmail) {
    throw new Error('Email is required.');
  }

  if (!password || password.trim().length < 6) {
    throw new Error('Password must be at least 6 characters long.');
  }

  const existingUser = await getUserByEmail(normalizedEmail);

  if (existingUser) {
    throw new Error('An account with this email already exists.');
  }

  return createUser({
    name: normalizedName,
    email: normalizedEmail,
    hospital: hospital?.trim() || null,
    location: null,
    password,
    sessionsAttended: '[]',
    certificatesGained: '[]',
    savedItems: '[]',
  });
}
