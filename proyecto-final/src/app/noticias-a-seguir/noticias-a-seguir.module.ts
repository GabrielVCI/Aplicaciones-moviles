import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticiasASeguirPageRoutingModule } from './noticias-a-seguir-routing.module';

import { NoticiasASeguirPage } from './noticias-a-seguir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticiasASeguirPageRoutingModule
  ],
  declarations: [NoticiasASeguirPage]
})
export class NoticiasASeguirPageModule {}
