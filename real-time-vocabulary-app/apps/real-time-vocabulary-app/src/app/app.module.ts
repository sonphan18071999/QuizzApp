import { NgModule } from '@angular/core';
import { ShareUiModule } from '@real-time-vocabulary-app/share-ui';
import { ShareLogicModule } from '@real-time-vocabulary-app/share-logic';

@NgModule({
  imports: [ShareUiModule, ShareLogicModule],
})
export class AppModule {}
