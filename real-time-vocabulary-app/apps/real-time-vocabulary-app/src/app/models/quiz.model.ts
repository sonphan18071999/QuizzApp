export interface Quiz {
  id: string;
  question: string;
  choices: string[];
  answer: string | string[];
  type: 'single-choice' | 'multiple-choice' | 'checkbox' | 'fill-in-blank';
  selection?: string;
}
