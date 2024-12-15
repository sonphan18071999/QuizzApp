import { User } from './user.model';

export interface LeaderBoard {
  id: string;
  user: User;
  score: string;
  time: string;
}

export class LeaderBoardDisplay {
  id: string;
  name: string;
  score: string;
  time: string;

  constructor(leaderBoard: LeaderBoard) {
    this.id = leaderBoard.id;
    this.name = `${leaderBoard.user.firstName} ${leaderBoard.user.lastName}`;
    this.score = leaderBoard.score;
    this.time = leaderBoard.time;
  }
}
