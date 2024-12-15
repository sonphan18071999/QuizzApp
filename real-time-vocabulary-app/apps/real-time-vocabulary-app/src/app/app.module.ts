import { NgModule } from '@angular/core';
import { ShareUiModule } from '@real-time-vocabulary-app/share-ui';
import { ShareLogicModule } from '@real-time-vocabulary-app/share-logic';
import { HttpClientModule } from '@angular/common/http';
import { AssessmentService } from './services/assessment/assessment.service';

@NgModule({
  imports: [HttpClientModule, ShareUiModule, ShareLogicModule],
  providers: [AssessmentService],
})
export class AppModule {}
