import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardActions } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'lib-quiz-navigation-action-buttons',
  standalone: true,
  imports: [CommonModule, MatCardActions, MatButton],
  templateUrl: './quiz-navigation-action-buttons.component.html',
  styleUrl: './quiz-navigation-action-buttons.component.scss',
})
export class QuizNavigationActionButtonsComponent {
  public nextQuestion(): void {}

  public previousQuestion(): void {}
}
