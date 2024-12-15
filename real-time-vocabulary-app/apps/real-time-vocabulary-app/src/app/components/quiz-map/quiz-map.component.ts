import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { Quiz } from '../../models/quiz.model';

@Component({
  selector: 'app-quiz-map',
  standalone: true,
  imports: [CommonModule, MatButton],
  templateUrl: './quiz-map.component.html',
  styleUrl: './quiz-map.component.scss',
})
export class QuizMapComponent {
  @Input() questions: Quiz[] = [];
  @Input() startQuestion: number = 1;

  constructor() {}

  navigateToQuestion(questionId: string) {
    console.log('Navigating to question with ID:', questionId);
  }
}
