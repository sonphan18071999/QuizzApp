import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuestionsMock } from '../../mocks/question-mock';
import { Quiz } from '../../models/quiz.model';

@Injectable({
  providedIn: 'root',
})
export class AssessmentService {
  private questions = new BehaviorSubject<Quiz[]>(QuestionsMock as Quiz[]);

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
