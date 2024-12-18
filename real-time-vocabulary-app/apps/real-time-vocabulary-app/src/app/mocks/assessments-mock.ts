import { Assessment } from '../models/assessment.model';

export const ASSESSMENTS_MOCK: Assessment[] = [
  {
    id: '1',
    name: 'Grammar Proficiency Test',
    description:
      'This assessment tests your understanding of English grammar rules.',
    duration: '60',
    point: '100',
  },
  {
    id: '2',
    name: 'Vocabulary Building Quiz',
    description: 'A quiz to evaluate your vocabulary knowledge and usage.',
    duration: '30',
    point: '100',
  },
  {
    id: '4',
    name: 'Writing Skills Evaluation',
    description:
      'A test to assess your ability to write clearly and coherently in English.',
    duration: '60',
    point: '100',
  },
  {
    id: '5',
    name: 'Listening Comprehension Test',
    description:
      'This assessment evaluates your ability to understand spoken English.',
    duration: '2:00 PM - 4:00 PM',
    point: '100',
  },
];
