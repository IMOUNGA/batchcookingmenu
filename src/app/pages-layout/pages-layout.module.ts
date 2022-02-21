import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesLayoutAppRoutingModule } from './pages-layout-app-routing.module';

import { HomeComponent } from "./home/home.component";


@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesLayoutAppRoutingModule
  ]
})
export class PagesLayoutModule { }
