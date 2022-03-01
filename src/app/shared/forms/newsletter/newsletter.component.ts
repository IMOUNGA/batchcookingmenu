import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EmailjsService} from "../../../services/emailjs.service";

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit {
  @ViewChild('userName') userName: ElementRef | undefined;
  @ViewChild('userEmail') userEmail: ElementRef | undefined;

  isRegistered = false;
  invalidMail = false;
  invalidName = false;


  constructor(private email: EmailjsService) { }

  ngOnInit(): void {
  }

  subscribeCustomer(): void {
    this.init();

    const email = this.userEmail?.nativeElement.value;
    const name = this.userName?.nativeElement.value;

    if (email.length <= 0) this.invalidMail = true;
    if (name.length <= 0) this.invalidName = true;

    if (email.length > 0 && name.length > 0) {
      const validateEmailRegex = /^\S+@\S+\.\S+$/;

      if (email.match(validateEmailRegex)) {
        this.isRegistered = true;
        const result = this.email.send(name, email);
      } else {
        this.invalidMail = true;
      }
    }
  }

  init(): void {
    this.invalidName = false;
    this.invalidMail = false;
  }
}
