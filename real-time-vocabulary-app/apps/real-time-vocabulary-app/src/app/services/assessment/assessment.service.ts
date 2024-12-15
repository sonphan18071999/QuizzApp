import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from '../../models/quiz.model';
import { QUESTIONS_MOCK } from '../../mocks/question-mock';

@Injectable({
  providedIn: 'root',
})
export class AssessmentService {
  private questions = new BehaviorSubject<Quiz[]>(QUESTIONS_MOCK as Quiz[]);

  getQuestions() {
    return this.questions.asObservable();
  }

  saveQuestions(newQuestions: Quiz[]) {
    const currentQuestions = this.questions.getValue();
    this.questions.next([...currentQuestions, ...newQuestions]);
  }

  public updateQuestion(updatedQuestion: Quiz): void {
    const currentQuestions = this.questions.getValue();

    const questionIndex = currentQuestions.findIndex(
      (question) => question.id === updatedQuestion.id,
    );

    if (questionIndex !== -1) {
      currentQuestions[questionIndex] = updatedQuestion;
      this.questions.next([...currentQuestions]);
    } else {
      throw new Error(`Question with id ${updatedQuestion.id} not found.`);
    }
  }

  deleteQuestion(index: number) {
    const currentQuestions = this.questions.getValue();
    if (index >= 0 && index < currentQuestions.length) {
      currentQuestions.splice(index, 1);
      this.questions.next([...currentQuestions]);
    } else {
      throw new Error('Invalid question index');
    }
  }

  clearQuestions() {
    this.questions.next([]);
  }
}
