import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './lib/header/header.component';
import { FooterComponent } from './lib/footer/footer.component';
import { InformationCardComponent } from './lib/information-card/information-card.component';
import { MultipleQuestionChoiceComponent } from './lib/multiple-question-choice/multiple-question-choice.component';
import { CountdownTimerComponent } from './lib/countdown-timer/countdown-timer.component';
import { QuizNavigationActionButtonsComponent } from './lib/quiz-navigation-action-buttons/quiz-navigation-action-buttons.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    InformationCardComponent,
    MultipleQuestionChoiceComponent,
    CountdownTimerComponent,
    QuizNavigationActionButtonsComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    InformationCardComponent,
    MultipleQuestionChoiceComponent,
    CountdownTimerComponent,
    QuizNavigationActionButtonsComponent,
  ],
})
export class ShareUiModule {}
