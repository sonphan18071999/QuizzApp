import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../../models/question.model';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent],
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.scss',
})
export class QuizCardComponent {
  @Input() questions: Question[] = [];
  currentIndex = 0;
  selectedAnswer: string | string[] | null = null;

  get currentQuestion() {
    return this.questions[this.currentIndex];
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
      this.selectedAnswer = null;
    }
  }

  previousQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.selectedAnswer = null;
    }
  }

  selectAnswer(answer: string | string[]) {
    this.selectedAnswer = answer;
  }

  isAnswerCorrect() {
    if (Array.isArray(this.currentQuestion.answer)) {
      return this.selectedAnswer === this.currentQuestion.answer;
    }
    return this.selectedAnswer === this.currentQuestion.answer;
  }
}
