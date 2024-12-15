import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import {
  InformationCardComponent,
  LeaderBoardComponent,
} from '@real-time-vocabulary-app/share-ui';
import { Assessment } from '../../models/assessment.model';
import { ASSESSMENTS_MOCK } from '../../mocks/assessments-mock';
import { LeaderBoardDisplay } from '../../models/leader-board.model';
import { MapLeaderBoardDisplayDataPipe } from '../../pipes/map-leader-board-display-data.pipe';
import { LEADER_BOARD_MOCK } from '../../mocks/leader-board-mock';

@Component({
  selector: 'app-assessment-cards',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    InformationCardComponent,
    LeaderBoardComponent,
    MapLeaderBoardDisplayDataPipe,
  ],
  templateUrl: './assessment-cards.component.html',
  styleUrl: './assessment-cards.component.scss',
})
export class AssessmentCardsComponent implements OnInit {
  public assessments: Assessment[] = ASSESSMENTS_MOCK;
  public router = inject(Router);

  public leaderBoards: LeaderBoardDisplay[] = this.mapLeaderBoarDisplay();

  ngOnInit(): void {}

  public navigateToDetail(assessmentId: string): void {
    if (assessmentId) {
      this.router.navigate([`/assessment/${assessmentId}/detail`]);
    }
  }

  public mapLeaderBoarDisplay(): LeaderBoardDisplay[] {
    return [...LEADER_BOARD_MOCK.map((item) => new LeaderBoardDisplay(item))];
  }
}
