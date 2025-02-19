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
import { ActivatedRoute, Router } from '@angular/router';
import { ASSESSMENTS_MOCK } from '../../mocks/assessments-mock';

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
  @Input() public assessmentDetail: Assessment = ASSESSMENTS_MOCK[0];

  @Output() startAssessment: EventEmitter<void> = new EventEmitter<void>();
  public router = inject(Router);
  public activatedRoute = inject(ActivatedRoute);

  public onStart(): void {
    this.startAssessment.emit();
  }

  public showTheAssessment(): void {
    this.router.navigate([
      `assessment/${this.assessmentDetail.id}/quiz/${this.assessmentDetail.id}`,
    ]);
  }
}
