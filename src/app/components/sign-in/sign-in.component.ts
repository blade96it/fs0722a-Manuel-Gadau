import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user: any;
  messaggio!: string;
  messaggioMailNonVerificata!: string;
  password = '';
  showPassword = false;
  iconaOcchioChiuso = faEyeSlash;
  iconaOcchioAperto = faEye;

  constructor (private authService: AuthService, private appComponent: AppComponent) {}

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
    this.authService.SignIn(email, password, this.messaggioMailNonVerificata).then(() => {
      if(!this.authService.userData.emailVerified) {
        this.messaggioMailNonVerificata = "Non puoi accedere al sito in quanto l'account non è stato ancora verificato. Controlla la tua casella di posta.";
      }
    }).catch((error) => {
      this.messaggio = "Le credenziali da te inserite non sono valide, riprova.";
    });
    console.log(this.messaggioMailNonVerificata);
    form.reset();
  }

  logInGoogle() {
    this.authService.GoogleAuth();
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
