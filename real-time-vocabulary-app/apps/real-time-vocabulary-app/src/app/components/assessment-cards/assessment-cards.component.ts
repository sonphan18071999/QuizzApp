import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { InformationCardComponent } from '@real-time-vocabulary-app/share-ui';

@Component({
  selector: 'app-assessment-cards',
  standalone: true,
  imports: [CommonModule, MatCardModule, InformationCardComponent],
  templateUrl: './assessment-cards.component.html',
  styleUrl: './assessment-cards.component.scss',
})
export class AssessmentCardsComponent {
  public assessments = [
    {
      id: '1',
      title: 'Grammar Proficiency Test',
      description:
        'This assessment tests your understanding of English grammar rules.',
      time: '10:00 AM - 12:00 PM',
    },
    {
      id: '2',
      title: 'Vocabulary Building Quiz',
      description: 'A quiz to evaluate your vocabulary knowledge and usage.',
      time: '1:00 PM - 3:00 PM',
    },
    {
      id: '3',
      title: 'Reading Comprehension Assessment',
      description:
        'This assessment measures your ability to understand and interpret written English.',
      time: '9:00 AM - 11:00 AM',
    },
    {
      id: '4',
      title: 'Writing Skills Evaluation',
      description:
        'A test to assess your ability to write clearly and coherently in English.',
      time: '11:30 AM - 1:30 PM',
    },
    {
      id: '5',
      title: 'Listening Comprehension Test',
      description:
        'This assessment evaluates your ability to understand spoken English.',
      time: '2:00 PM - 4:00 PM',
    },
  ];

  joinAssessment(assessmentId: string) {
    console.log('Joining assessment with ID:', assessmentId);
  }
}
