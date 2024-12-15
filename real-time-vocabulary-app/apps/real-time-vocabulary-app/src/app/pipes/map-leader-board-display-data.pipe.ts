import { Pipe, PipeTransform } from '@angular/core';
import { LeaderBoard, LeaderBoardDisplay } from '../models/leader-board.model';

@Pipe({
  name: 'mapLeaderBoardDisplayData',
  standalone: true,
})
export class MapLeaderBoardDisplayDataPipe implements PipeTransform {
  public transform(leaderBoards: LeaderBoard[]): LeaderBoardDisplay[] {
    return leaderBoards.map((item) => new LeaderBoardDisplay(item));
  }
}
