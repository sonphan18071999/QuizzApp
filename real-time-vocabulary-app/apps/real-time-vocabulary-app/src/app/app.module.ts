import { NgModule } from '@angular/core';
import { ShareUiModule } from '@real-time-vocabulary-app/share-ui';
import { ShareLogicModule } from '@real-time-vocabulary-app/share-logic';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule, ShareUiModule, ShareLogicModule],
})
export class AppModule {}
