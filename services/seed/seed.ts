import { getDb, initDatabase } from '../database/connection';
import * as schema from '../database/schema';

const seedData = {
  speakerRows: [
    { id: 1, name: 'Dr. Amira Hassan', description: 'Cardiologist focused on preventive care and digital health.', country: 'Egypt' },
    { id: 2, name: 'Prof. Lars Eriksson', description: 'Researcher in medical AI and diagnostic imaging.', country: 'Sweden' },
    { id: 3, name: 'Dr. Priya Nair', description: 'Public health specialist working on community screening programs.', country: 'India' },
    { id: 4, name: 'Dr. Omar Al-Mansoori', description: 'Emergency medicine physician and trauma educator.', country: 'UAE' },
    { id: 5, name: 'Dr. Elena Petrova', description: 'Health policy advisor and moderator of multi-disciplinary panels.', country: 'Bulgaria' },
    { id: 6, name: 'Dr. Kenji Tanaka', description: 'Guest speaker, session not scheduled yet.', country: 'Japan' },
  ],
  sessionRows: [
    { id: 1, name: 'Opening Keynote: The Future of Care', type: 'keynote', date: '2026-12-01', time: '09:00', speakerId: 1 },
    { id: 2, name: 'AI in Diagnostic Imaging', type: 'talk', date: '2026-12-01', time: '11:00', speakerId: 2 },
    { id: 3, name: 'Community Screening Workshop', type: 'workshop', date: '2026-12-02', time: '10:00', speakerId: 3 },
    { id: 4, name: 'Trauma Response Simulation', type: 'workshop', date: '2026-12-02', time: '14:00', speakerId: 4 },
    { id: 5, name: 'Open Panel Discussion', type: 'panel', date: '2026-12-03', time: '13:00', speakerId: 5 },
  ],
  userRows: [
    {
      id: 1,
      name: 'Sara Khalid',
      email: 'sara.khalid@example.com',
      password: 'demo123',
      hospital: 'City General Hospital',
      location: 'Dubai',
      sessionsAttended: JSON.stringify([1, 2]),
      certificatesGained: JSON.stringify(['keynote-attendance']),
      savedItems: JSON.stringify([{ type: 'session', id: 3 }, { type: 'resource', id: 1 }]),
    },
    {
      id: 2,
      name: 'John Müller',
      email: 'john.muller@example.com',
      password: 'demo123',
      hospital: 'St. Mary Clinic',
      location: 'Berlin',
      sessionsAttended: JSON.stringify([2, 3, 4]),
      certificatesGained: JSON.stringify(['imaging-101', 'screening-basics']),
      savedItems: JSON.stringify([]),
    },
    {
      id: 3,
      name: 'Li Wei',
      email: 'li.wei@example.com',
      password: 'demo123',
      hospital: null,
      location: null,
      sessionsAttended: JSON.stringify([]),
      certificatesGained: JSON.stringify([]),
      savedItems: JSON.stringify([]),
    },
  ],
  pollRows: [
    { id: 1, name: 'Which topic should we cover next?', createdAt: '2026-11-01 10:00:00' },
    { id: 2, name: 'Preferred session format?', createdAt: '2026-11-02 12:30:00' },
  ],
  pollOptionRows: [
    { id: 1, pollId: 1, name: 'AI in healthcare', voteCount: 42 },
    { id: 2, pollId: 1, name: 'Telemedicine', voteCount: 31 },
    { id: 3, pollId: 1, name: 'Mental health', voteCount: 27 },
    { id: 4, pollId: 2, name: 'In person', voteCount: 55 },
    { id: 5, pollId: 2, name: 'Online', voteCount: 18 },
    { id: 6, pollId: 2, name: 'Hybrid', voteCount: 0 },
  ],
  resourceRows: [
    { id: 1, name: 'Conference Program', type: 'pdf', fileUrl: '/files/program.pdf', fileName: 'program.pdf', mimeType: 'application/pdf', createdAt: '2026-11-03 09:00:00' },
    { id: 2, name: 'Imaging Slides', type: 'slides', fileUrl: '/files/imaging.pptx', fileName: 'imaging.pptx', mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', createdAt: '2026-11-04 09:00:00' },
    { id: 3, name: 'Useful Links', type: 'link', fileUrl: null, fileName: null, mimeType: null, createdAt: '2026-11-04 10:00:00' },
  ],
  questionRows: [
    { id: 1, title: 'Data privacy in AI tools', body: 'How do we keep patient data safe when using AI diagnostics?', askedAt: '2026-11-05 08:15:00', answered: 1, voteCount: 14 },
    { id: 2, title: null, body: 'Will the session recordings be available afterwards?', askedAt: '2026-11-05 09:40:00', answered: 1, voteCount: 6 },
    { id: 3, title: 'Certificates', body: 'Do online attendees receive the same certificate?', askedAt: '2026-11-06 11:00:00', answered: 0, voteCount: 3 },
  ],
  answerRows: [
    { id: 1, questionId: 1, body: 'Use on-premise models and anonymise data before processing.', answeredAt: '2026-11-05 12:00:00' },
    { id: 2, questionId: 1, body: 'Also run a data protection impact assessment before rollout.', answeredAt: '2026-11-05 13:30:00' },
    { id: 3, questionId: 1, body: 'Log every access to patient records and review the logs regularly.', answeredAt: '2026-11-06 09:10:00' },
    { id: 4, questionId: 2, body: 'Yes, recordings will be shared with all registered attendees within a week.', answeredAt: '2026-11-05 15:00:00' },
  ],
  venueRows: [
    { id: 1, name: 'Dubai World Trade Centre', dateFrom: '2026-12-01', dateTo: '2026-12-03', parking: 1, wifi: 1, projector: 1, catering: 1, accessible: 1, xCoordinate: 25.2285, yCoordinate: 55.2867 },
    { id: 2, name: 'Sharjah Expo Centre', dateFrom: '2026-12-04', dateTo: '2026-12-04', parking: 1, wifi: 1, projector: 0, catering: 0, accessible: 1, xCoordinate: 25.3085, yCoordinate: 55.4040 },
    { id: 3, name: 'Community Hall (TBC)', dateFrom: '2026-12-05', dateTo: '2026-12-05', parking: 0, wifi: 0, projector: 0, catering: 0, accessible: 0, xCoordinate: null, yCoordinate: null },
  ],
};

export async function seedDatabaseIfEmpty(): Promise<void> {
  await initDatabase();

  const db = getDb();
  const existing = await db.select().from(schema.users).limit(1);

  if (existing.length > 0) {
    return;
  }

  await db.insert(schema.speakers).values(seedData.speakerRows).run();
  await db.insert(schema.sessions).values(seedData.sessionRows).run();
  await db.insert(schema.users).values(seedData.userRows).run();
  await db.insert(schema.polls).values(seedData.pollRows).run();
  await db.insert(schema.pollOptions).values(seedData.pollOptionRows).run();
  await db.insert(schema.resources).values(seedData.resourceRows).run();
  await db.insert(schema.questions).values(seedData.questionRows).run();
  await db.insert(schema.answers).values(seedData.answerRows).run();
  await db.insert(schema.venues).values(seedData.venueRows).run();
}
