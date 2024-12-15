import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LeaderBoard, LeaderBoardDisplay } from '../models/leader-board.model';
import { LEADER_BOARD_MOCK } from '../mocks/leader-board-mock';

@Injectable({
  providedIn: 'root',
})
export class LeaderBoardService {
  private leaderBoards = new BehaviorSubject<LeaderBoard[]>(
    LEADER_BOARD_MOCK as LeaderBoard[],
  );

  constructor() {}

  public retrieveLeaderBoard(): void {
    this.leaderBoards.next(LEADER_BOARD_MOCK);
  }

  public getLeaderBoard(): Observable<LeaderBoard[]> {
    return this.leaderBoards.asObservable();
  }

  public leaderBoardToDisplay$(): Observable<LeaderBoardDisplay[]> {
    const leaderBoardDisplayData = this.leaderBoards.value.map(
      (item) => new LeaderBoardDisplay(item),
    );
    return of(leaderBoardDisplayData);
  }
}
