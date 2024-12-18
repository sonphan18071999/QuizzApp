import { Quiz } from './quiz.model';

export interface Assessment {
  id: string;
  name: string;
  description: string;
  duration: string;
  attempt?: number;
  rule?: string;
  point?: string;
  quizzes?: Quiz[];
  userId?: string;
}
