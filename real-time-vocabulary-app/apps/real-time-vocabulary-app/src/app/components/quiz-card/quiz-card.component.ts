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
import { AssessmentService } from '../../services/assessment/assessment.service';
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
  ],
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
})
export class QuizCardComponent implements OnInit {
  public assessmentService = inject(AssessmentService);
  public destroyRef = inject(DestroyRef);
  public formBuilder = inject(FormBuilder);
  public questions: Quiz[] = [] as Quiz[];
  public form!: FormGroup;

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
    this.assessmentService
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
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      console.log('form valid');
    }
  }
}
