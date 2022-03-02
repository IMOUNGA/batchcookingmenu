import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesLayoutAppRoutingModule} from './pages-layout-app-routing.module';

import {HomeComponent} from "./home/home.component";
import {NouveautesComponent} from "./home/nouveautes/nouveautes.component";


@NgModule({
  declarations: [
    HomeComponent,
    NouveautesComponent,
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesLayoutAppRoutingModule,
  ]
})
export class PagesLayoutModule {
}
