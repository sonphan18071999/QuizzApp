import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Assessment } from '../../models/assessment.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AssessmentService {
  public assessments: BehaviorSubject<Assessment[]> = new BehaviorSubject(
    [] as Assessment[],
  );
  private api = environment.apiUrl;
  private httpClient = inject(HttpClient);

  constructor() {}

  public submit(assessment: Assessment): Observable<Assessment> {
    return this.httpClient.put<Assessment>(
      `${this.api}/assessment/submit`,
      assessment,
    );
  }

  public updateLatest(assessments: Assessment[]): void {
    this.assessments.next(assessments);
  }
}
