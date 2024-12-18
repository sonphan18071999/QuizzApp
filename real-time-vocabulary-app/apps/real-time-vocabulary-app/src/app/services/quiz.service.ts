import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QUESTIONS_MOCK } from '../mocks/question-mock';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private questions = new BehaviorSubject<Quiz[]>(QUESTIONS_MOCK as Quiz[]);

  constructor() {}

  public getQuestions(): Observable<Quiz[]> {
    return this.questions.asObservable();
  }
}
