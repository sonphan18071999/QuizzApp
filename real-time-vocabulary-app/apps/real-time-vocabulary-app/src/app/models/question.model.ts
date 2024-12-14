export interface Question {
  question: string;
  choices: string[];
  answer: string | string[];
  type: 'single-choice' | 'multiple-choice' | 'checkbox';
}
