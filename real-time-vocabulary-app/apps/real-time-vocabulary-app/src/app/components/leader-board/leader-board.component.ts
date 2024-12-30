import { Component, OnInit } from '@angular/core';
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
import { InformationCardComponent } from '@real-time-vocabulary-app/share-ui';

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
  topStudents = [
    { name: 'John Doe', score: 98 },
    { name: 'Jane Smith', score: 95 },
    { name: 'Alice Johnson', score: 93 },
    { name: 'Bob Brown', score: 92 },
    { name: 'Charlie Green', score: 90 },
  ];

  ngOnInit(): void {}
}
