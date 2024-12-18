import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { MatCard, MatCardModule } from '@angular/material/card';
import { AssessmentService } from '../../services/assessment/asssessment.service';
import { Assessment } from '../../models/assessment.model';
import { SseServiceService } from '../../services/sse-service/sse-service.service';
import { InformationCardComponent } from '@real-time-vocabulary-app/share-ui';
import { MOCK_USERS } from '../../mocks/users-mock';

@Component({
  selector: 'lib-leader-board',
  standalone: true,
  imports: [
    CommonModule,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatColumnDef,
    MatRow,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatCard,
    InformationCardComponent,
    MatCardModule,
  ],
  templateUrl: './leader-board.component.html',
  styleUrl: './leader-board.component.scss',
})
export class LeaderBoardComponent<T extends object> implements OnInit {
  public assessmentService = inject(AssessmentService);
  public sse = inject(SseServiceService);
  public leaderBoards: Assessment[] = [];
  public displayLeaderBoards: DisplayLeaderBoard[] = [];
  public cdr = inject(ChangeDetectorRef);

  public get leaderBoardsItem() {
    return this.leaderBoards;
  }

  public ngOnInit(): void {
    this.retrieveLeaderBoard();
  }

  public retrieveLeaderBoard(): void {
    this.sse
      .listenToSse()
      .pipe()
      .subscribe({
        next: (event: MessageEvent) => {
          const sortedAssessments = (
            JSON.parse(event.data).leaderBoards as unknown as Assessment[]
          ).sort((a, b) => {
            const aPoints = a?.point ?? 0;
            const bPoints = b?.point ?? 0;
            return +bPoints - +aPoints;
          });

          sortedAssessments.forEach((item) => {
            const userFound = MOCK_USERS.filter(
              (user) => user.id === item.id,
            )[0];
            item.name = userFound
              ? `${userFound?.firstName}+${userFound?.lastName}`
              : '-';
          });

          this.assessmentService.updateLatest(sortedAssessments);
          this.leaderBoards = sortedAssessments;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error in SSE stream:', err);
        },
      });
  }
}

export interface DisplayLeaderBoard extends Assessment {
  userName: string;
}
