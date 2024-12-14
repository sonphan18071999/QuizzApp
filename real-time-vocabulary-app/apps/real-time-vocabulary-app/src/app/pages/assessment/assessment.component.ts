import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '@real-time-vocabulary-app/share-ui';

@Component({
  selector: 'app-assessment',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent],
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.scss',
})
export class AssessmentComponent {}
