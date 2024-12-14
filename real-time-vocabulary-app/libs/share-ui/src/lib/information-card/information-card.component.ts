import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Assessment } from '../../../../../apps/real-time-vocabulary-app/src/app/models/assessment.model';

@Component({
  selector: 'lib-information-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './information-card.component.html',
  styleUrl: './information-card.component.scss',
})
export class InformationCardComponent {
  @Input() public assessment: Assessment = {
    title: '',
    description: '',
    id: '',
    duration: '',
    attempt: undefined,
  };
  @Output() public cardClick: EventEmitter<string> = new EventEmitter<string>();

  public onCardClick(): void {
    this.cardClick.emit(this.assessment.id);
  }
}
