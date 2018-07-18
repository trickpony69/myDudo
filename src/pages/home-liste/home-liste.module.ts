import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeListe } from './home-liste';

@NgModule({
  declarations: [
    HomeListe,
  ],
  imports: [
    IonicPageModule.forChild(HomeListe),
  ],
})
export class HomeListeModule {}
