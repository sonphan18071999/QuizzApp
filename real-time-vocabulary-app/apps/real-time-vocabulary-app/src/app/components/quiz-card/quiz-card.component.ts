import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
} from '@angular/material/card';
import {
  CountdownTimerComponent,
  MultipleQuestionChoiceComponent,
  QuizNavigationActionButtonsComponent,
} from '@real-time-vocabulary-app/share-ui';
import { MatButton } from '@angular/material/button';
import { QuizMapComponent } from '../quiz-map/quiz-map.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Quiz } from '../../models/quiz.model';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AssessmentService } from '../../services/assessment/asssessment.service';
import { HttpClientModule } from '@angular/common/http';
import { Assessment } from '../../models/assessment.model';
import { ASSESSMENTS_MOCK } from '../../mocks/assessments-mock';
import { ActivatedRoute, Router } from '@angular/router';
import { SseServiceService } from '../../services/sse-service/sse-service.service';
import { Subscription, take } from 'rxjs';
import { QuizService } from '../../services/quiz.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardContent,
    MultipleQuestionChoiceComponent,
    CountdownTimerComponent,
    MatButton,
    MatCardActions,
    QuizMapComponent,
    QuizNavigationActionButtonsComponent,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
})
export class QuizCardComponent implements OnInit {
  public quizService = inject(QuizService);
  public assessmentService = inject(AssessmentService);
  public destroyRef = inject(DestroyRef);
  public formBuilder = inject(FormBuilder);
  public activatedRoute = inject(ActivatedRoute);
  public sse = inject(SseServiceService);
  public questions: Quiz[] = [] as Quiz[];
  public form!: FormGroup;
  private sseSubscription!: Subscription;
  private router = inject(Router);

  public get questionsFormArray(): FormArray<FormControl> {
    return this.form.get('questions') as FormArray<FormControl>;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      questions: this.formBuilder.array([]),
    });
    this.retrieveQuestions();
  }

  public retrieveQuestions(): void {
    this.quizService
      .getQuestions()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res) => {
        this.questions = res;
        this.mapFormControls();
      });
  }

  public mapFormControls(): void {
    const controls = this.questions.map(() =>
      this.formBuilder.control(null, [Validators.required]),
    );
    this.form.setControl('questions', this.formBuilder.array(controls));
  }

  public submitQuiz(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (!id) {
      console.error('Quiz ID not found in the route.');
      return;
    }

    const assessment = ASSESSMENTS_MOCK.find((i) => i.id === id);
    if (!assessment) {
      console.error(`Assessment with id ${id} not found.`);
      return;
    }

    const quizzes = this.form.value;
    const storedUser: User = JSON.parse(
      localStorage.getItem('randomUser') || '{}',
    );

    const submission: Assessment = {
      ...assessment,
      quizzes,
      userId: storedUser.id,
    };

    this.assessmentService.submit(submission).subscribe({
      next: (res) => {
        this.sseSubscription = this.sse
          .listenToSse()
          .pipe(take(1))
          .subscribe({
            next: (event: MessageEvent) => {
              console.log('Received SSE event:', event);
              console.log(JSON.parse(event.data).leaderBoards);
              this.assessmentService.updateLatest(
                JSON.parse(event.data).leaderBoards as unknown as Assessment[],
              );
              alert('Assessment submitted');
              window.location.href = 'http://localhost:4200/elsa';
            },
            error: (err) => {
              console.error('Error in SSE stream:', err);
            },
          });
      },
      error: (err) => {
        console.error('Error during submission:', err);
      },
    });
  }
}
