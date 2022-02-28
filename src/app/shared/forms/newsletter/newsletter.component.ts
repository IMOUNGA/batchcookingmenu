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


  constructor(private email: EmailjsService) { }

  ngOnInit(): void {
  }

  subscribeCustomer(): void {
    const email = this.userEmail?.nativeElement.value;
    const name = this.userName?.nativeElement.value;


    if (email.length > 0 && name.length > 0) {
      const validateEmailRegex = /^\S+@\S+\.\S+$/;

      if (email.match(validateEmailRegex)) {
        console.log(("c'est ok"))
        //const result = this.email.send(name, email);
      } else {
        console.error('Mail value is not a mail');
      }
    }
  }

}
