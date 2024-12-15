import { Assessment } from '../models/assessment.model';

export const ASSESSMENTS_MOCK: Assessment[] = [
  {
    id: '1',
    title: 'Grammar Proficiency Test',
    description:
      'This assessment tests your understanding of English grammar rules.',
    duration: '60',
    attempt: 3,
  },
  {
    id: '2',
    title: 'Vocabulary Building Quiz',
    description: 'A quiz to evaluate your vocabulary knowledge and usage.',
    duration: '30',
    attempt: 3,
  },
  {
    id: '3',
    title: 'Reading Comprehension Assessment',
    description:
      'This assessment measures your ability to understand and interpret written English.',
    duration: '30',
    attempt: 3,
  },
  {
    id: '4',
    title: 'Writing Skills Evaluation',
    description:
      'A test to assess your ability to write clearly and coherently in English.',
    duration: '60',
    attempt: 3,
  },
  {
    id: '5',
    title: 'Listening Comprehension Test',
    description:
      'This assessment evaluates your ability to understand spoken English.',
    duration: '2:00 PM - 4:00 PM',
    attempt: 2,
  },
];
