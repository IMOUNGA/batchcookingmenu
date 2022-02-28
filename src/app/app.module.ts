import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NouveautesComponent } from './home/nouveautes/nouveautes.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import {ComingSoonModule} from "./coming-soon/coming-soon.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NouveautesComponent,
    ComingSoonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComingSoonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
