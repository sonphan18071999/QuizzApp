import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardTitle,
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatActionList, MatList, MatListItem } from '@angular/material/list';
import { InformationCardComponent } from '@real-time-vocabulary-app/share-ui';
import { Assessment } from '../../models/assessment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatList,
    MatListItem,
    InformationCardComponent,
    MatActionList,
  ],
  templateUrl: './assessment-detail.component.html',
  styleUrl: './assessment-detail.component.scss',
})
export class AssessmentDetailComponent extends InformationCardComponent {
  @Input() public assessmentDetail: Assessment = {
    id: 'eng-vocab-001',
    title: 'English Vocabulary Quiz',
    description:
      'Test your knowledge of English vocabulary with this quiz. Choose the correct meaning of the words presented.',
    duration: '30 minutes',
    attempt: 3,
    rule:
      '1. You have 3 attempts to complete the quiz.\n' +
      '2. You must complete the quiz within 30 minutes. \n' +
      '3. For each question, select the correct meaning of the word. No partial credit will be awarded.',
  };

  @Output() startAssessment: EventEmitter<void> = new EventEmitter<void>();
  public router = inject(Router);

  public onStart(): void {
    this.startAssessment.emit();
  }

  public showTheAssessment(): void {
    this.router.navigate([`assessment/${this.assessmentDetail.id}/quiz/0`]);
  }
}
