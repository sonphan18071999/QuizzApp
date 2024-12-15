import { Component, Input, OnInit } from '@angular/core';
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
import { MatCard } from '@angular/material/card';

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
  ],
  templateUrl: './leader-board.component.html',
  styleUrl: './leader-board.component.scss',
})
export class LeaderBoardComponent<T extends object> implements OnInit {
  @Input() dataSource: T[] = [];
  @Input() displayedColumns: string[] = [];

  public ngOnInit(): void {
    if (!this.dataSource || !this.displayedColumns.length) {
      console.warn(
        'LeaderboardTableComponent: Missing `data` or `displayedColumns` input!',
      );
    }
    this.retrieveLeaderBoard();
  }

  public retrieveLeaderBoard(): void {
    //will implement in new instance
  }
}
