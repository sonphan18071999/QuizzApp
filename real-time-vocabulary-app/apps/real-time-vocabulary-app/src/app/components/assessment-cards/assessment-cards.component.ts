import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { InformationCardComponent } from '@real-time-vocabulary-app/share-ui';
import { Assessment } from '../../models/assessment.model';

@Component({
  selector: 'app-assessment-cards',
  standalone: true,
  imports: [CommonModule, MatCardModule, InformationCardComponent],
  templateUrl: './assessment-cards.component.html',
  styleUrl: './assessment-cards.component.scss',
})
export class AssessmentCardsComponent {
  public assessments: Assessment[] = [
    {
      id: '1',
      title: 'Grammar Proficiency Test',
      description:
        'This assessment tests your understanding of English grammar rules.',
      duration: '60',
      attempt: 3,
    },
    {
      id: '2',
      title: 'Vocabulary Building Quiz',
      description: 'A quiz to evaluate your vocabulary knowledge and usage.',
      duration: '30',
      attempt: 3,
    },
    {
      id: '3',
      title: 'Reading Comprehension Assessment',
      description:
        'This assessment measures your ability to understand and interpret written English.',
      duration: '30',
      attempt: 3,
    },
    {
      id: '4',
      title: 'Writing Skills Evaluation',
      description:
        'A test to assess your ability to write clearly and coherently in English.',
      duration: '60',
      attempt: 3,
    },
    {
      id: '5',
      title: 'Listening Comprehension Test',
      description:
        'This assessment evaluates your ability to understand spoken English.',
      duration: '2:00 PM - 4:00 PM',
      attempt: 2,
    },
  ];

  public router = inject(Router);

  public navigateToDetail(assessmentId: string): void {
    if (assessmentId) {
      this.router.navigate([`/assessment/${assessmentId}/detail`]);
    }
  }
}
