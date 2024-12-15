import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-countdown-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.scss',
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  @Input() minutes: number = 5;
  seconds: number = 0;
  timeLeft: string = '';
  timer: any;

  public ngOnInit(): void {
    this.timeLeft = this.formatTime(this.minutes, this.seconds);
    this.startTimer();
  }

  public ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  public startTimer(): void {
    this.timer = setInterval(() => {
      if (this.seconds === 0) {
        if (this.minutes === 0) {
          clearInterval(this.timer);
          alert('Time is up!');
        } else {
          this.minutes--;
          this.seconds = 59;
        }
      } else {
        this.seconds--;
      }
      this.timeLeft = this.formatTime(this.minutes, this.seconds);
    }, 1000);
  }

  public formatTime(minutes: number, seconds: number): string {
    return `${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
  }

  public padNumber(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}
