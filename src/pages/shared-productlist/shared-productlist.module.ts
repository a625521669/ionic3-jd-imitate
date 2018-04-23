import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedProductlistPage } from './shared-productlist';

@NgModule({
  declarations: [
    SharedProductlistPage,
  ],
  imports: [
    IonicPageModule.forChild(SharedProductlistPage),
  ],
})
export class SharedProductlistPageModule {}
