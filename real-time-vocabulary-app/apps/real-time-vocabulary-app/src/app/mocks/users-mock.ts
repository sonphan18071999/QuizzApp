import { User } from '../models/user.model';

export const MOCK_USERS: User[] = [
  {
    id: '1',
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    phone: '123-456-7890',
    avatarUrl: 'https://example.com/avatar1.png',
    token: 'abc123xyz',
  },
  {
    id: '2',
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bob.smith@example.com',
    phone: '987-654-3210',
    avatarUrl: 'https://example.com/avatar2.png',
    token: 'def456uvw',
  },
  {
    id: '3',
    firstName: 'Charlie',
    lastName: 'Brown',
    email: 'charlie.brown@example.com',
    avatarUrl: 'https://example.com/avatar3.png',
    token: 'ghi789rst',
  },
  {
    id: '4',
    firstName: 'David',
    lastName: 'Williams',
    email: 'david.williams@example.com',
    phone: '555-123-4567',
    avatarUrl: 'https://example.com/avatar4.png',
    token: 'jkl012xyz',
  },
  {
    id: '5',
    firstName: 'Eve',
    lastName: 'Davis',
    email: 'eve.davis@example.com',
    avatarUrl: 'https://example.com/avatar5.png',
    token: 'mno345pqr',
  },
];
