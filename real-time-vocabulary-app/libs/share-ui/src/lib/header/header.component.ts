import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { User } from '../../../../../apps/real-time-vocabulary-app/src/app/models/user.model';
import { MOCK_USERS } from '../../../../../apps/real-time-vocabulary-app/src/app/mocks/users-mock';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, MatIcon, MatToolbar, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public user: User = MOCK_USERS[Math.floor(Math.random() * MOCK_USERS.length)];

  ngOnInit(): void {
    localStorage.setItem('randomUser', JSON.stringify(this.user));
  }
}
