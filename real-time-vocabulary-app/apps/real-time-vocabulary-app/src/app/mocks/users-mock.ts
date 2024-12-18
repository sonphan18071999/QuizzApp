import { User } from '../models/user.model';

export const MOCK_USERS: User[] = [
  {
    id: 'a19dca5c-46ac-40fc-a3d7-89e7a0ddb66d',
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    phone: '123-456-7890',
    avatarUrl: 'https://example.com/avatar1.png',
    token: 'abc123xyz',
  },
  {
    id: 'd8a80a34-e097-4695-84f4-e587432b08a7',
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bob.smith@example.com',
    phone: '987-654-3210',
    avatarUrl: 'https://example.com/avatar2.png',
    token: 'def456uvw',
  },
  {
    id: '106402e4-35ea-4d3a-90e3-7130c5b00093',
    firstName: 'Charlie',
    lastName: 'Brown',
    email: 'charlie.brown@example.com',
    avatarUrl: 'https://example.com/avatar3.png',
    token: 'ghi789rst',
  },
  {
    id: 'f89bb952-2b72-48aa-a41e-c9afa4e7da02',
    firstName: 'David',
    lastName: 'Williams',
    email: 'david.williams@example.com',
    phone: '555-123-4567',
    avatarUrl: 'https://example.com/avatar4.png',
    token: 'jkl012xyz',
  },
  {
    id: '7a1468fd-26e0-4a8e-b656-0a1509ce701c',
    firstName: 'Eve',
    lastName: 'Davis',
    email: 'eve.davis@example.com',
    avatarUrl: 'https://example.com/avatar5.png',
    token: 'mno345pqr',
  },
];
