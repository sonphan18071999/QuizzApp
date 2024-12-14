import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './lib/header/header.component';
import { FooterComponent } from './lib/footer/footer.component';
import { InformationCardComponent } from './lib/information-card/information-card.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    InformationCardComponent,
  ],
  exports: [HeaderComponent, FooterComponent, InformationCardComponent],
})
export class ShareUiModule {}
