import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioGroup, MatRadioModule } from '@angular/material/radio';
import {
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Quiz } from '../../../../../apps/real-time-vocabulary-app/src/app/models/quiz.model';

@Component({
  selector: 'lib-multiple-question-choice',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatRadioGroup,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './multiple-question-choice.component.html',
  styleUrl: './multiple-question-choice.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MultipleQuestionChoiceComponent,
      multi: true,
    },
  ],
})
export class MultipleQuestionChoiceComponent implements OnInit {
  @Input() numberOrder: number = 1;
  @Input() question: Quiz = {} as Quiz;
  @Input() quizFormControl!: FormControl;

  ngOnInit(): void {
    this.quizFormControl = new FormControl(null, Validators.required);
    this.listenFormControlChange();
  }

  public listenFormControlChange(): void {
    this.quizFormControl.valueChanges.pipe().subscribe((res) => {
      const quizAnswered = this.question;
      quizAnswered.selection = res;
    });
  }
}
