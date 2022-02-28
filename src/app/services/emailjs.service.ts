import {Injectable} from '@angular/core';
import emailjs from "@emailjs/browser";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmailjsService {
  /**
   * https://www.npmjs.com/package/@emailjs/browser
   * https://dev.to/iwaniukooo11/send-e-mails-directly-from-front-end-with-js-5d7d
   * https://www.emailjs.com/docs/sdk/installation/
   * https://dashboard.emailjs.com/admin/statistics
   */

  constructor() {
    emailjs.init(environment.email.id);
  }

  send(user_name: string, user_email: string): object {
    return emailjs.send(environment.email.serviceId, environment.email.templateId, {user_name: user_name, user_email: user_email})
      .then(response => {
        return {
          status: response.status,
          text: response.text,
          result: true
        };
      }, err => {
        return {
          err: err,
          result: false
        };
      });
  }
}
