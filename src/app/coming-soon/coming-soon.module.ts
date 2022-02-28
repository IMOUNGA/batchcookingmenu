import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from "../shared/forms/newsletter/newsletter.component";


@NgModule({
  declarations: [
    NewsletterComponent,
  ],
  exports: [
    NewsletterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComingSoonModule { }
