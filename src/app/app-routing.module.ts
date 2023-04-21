import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NewsComponent } from './components/news/news.component';
import { FantaDatabaseComponent } from './components/fanta-database/fanta-database.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerificaIndirizzoMailComponent } from './components/verifica-indirizzo-mail/verifica-indirizzo-mail.component';
import { PasswordDimenticataComponent } from './components/password-dimenticata/password-dimenticata.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'news', component: NewsComponent},
  {path: 'news/:id', component: NewsComponent},
  {path: 'fanta-database', component: FantaDatabaseComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'verifica-indirizzo-mail', component: VerificaIndirizzoMailComponent},
  {path: 'password-dimenticata', component: PasswordDimenticataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
