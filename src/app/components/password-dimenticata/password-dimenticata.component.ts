import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-password-dimenticata',
  templateUrl: './password-dimenticata.component.html',
  styleUrls: ['./password-dimenticata.component.scss']
})
export class PasswordDimenticataComponent implements OnInit {

  messaggioErrore!: string;
  messaggioConferma!: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const email = form.value.email
    this.authService.ForgotPassword(email).then(() => {
      this.messaggioConferma = "Ti è stata inviata una mail all'indirizzo da te fornito, controlla la tua casella di posta."
    }).catch((error => {
      this.messaggioErrore = "Non esiste un account con tale indirizzo E-mail, riprova."
    }))
    form.reset();
  }

}
