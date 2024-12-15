import { LeaderBoard } from '../models/leader-board.model';
import { MOCK_USERS } from './users-mock';

export const LEADER_BOARD_MOCK: LeaderBoard[] = [
  {
    id: '101',
    user: MOCK_USERS[0],
    score: '95',
    time: '00:02:45',
  },
  {
    id: '102',
    user: MOCK_USERS[1],
    score: '92',
    time: '00:02:50',
  },
  {
    id: '103',
    user: MOCK_USERS[2],
    score: '85',
    time: '00:03:10',
  },
  {
    id: '104',
    user: MOCK_USERS[3],
    score: '90',
    time: '00:03:00',
  },
  {
    id: '105',
    user: MOCK_USERS[4],
    score: '88',
    time: '00:03:05',
  },
];
