import { NgModule } from '@angular/core';
import { ShareUiModule } from '@real-time-vocabulary-app/share-ui';
import { ShareLogicModule } from '@real-time-vocabulary-app/share-logic';
import { LeaderBoardService } from './services/leader-board.service';
import { AssessmentService } from './services/assessment/asssessment.service';

@NgModule({
  imports: [ShareUiModule, ShareLogicModule],
  providers: [AssessmentService, LeaderBoardService],
})
export class AppModule {}
