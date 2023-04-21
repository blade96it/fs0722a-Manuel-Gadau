import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  messaggio!: string;
  password = '';
  showPassword = false;
  iconaOcchioChiuso = faEyeSlash;
  iconaOcchioAperto = faEye;

  constructor(private authService: AuthService) {}

  onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    const username = form.value.username
    console.log(email, password)
    this.authService.SignUp(email, password, username).catch((error) => {
      this.messaggio = "L'indirizzo E-mail da te inserito è già stato utilizzato, riprova con un altro."
    });
    form.reset();
  }

  logInGoogle() {
    this.authService.GoogleAuth();
  }

  logInFacebook() {
    this.authService.FacebookAuth();
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

}
