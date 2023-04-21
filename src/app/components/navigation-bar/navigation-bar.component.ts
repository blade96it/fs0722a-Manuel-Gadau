import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseDBService } from 'src/app/services/firebase-db.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit{

  iconaAccount = faUser;
  iconaFreccia = faCaretDown;
  uidUtenteLoggato!: string;
  user!: any;

  constructor(public authService: AuthService, private firebaseService: FirebaseDBService) {}

  ngOnInit(): void {
    const userData = JSON.parse(localStorage.getItem('user')!);
    this.getUserById(userData.uid);
  }

  getUserById(userId: string) {
    this.firebaseService.getUser(userId).subscribe((userData) => {
      this.user = userData;
    });
  }

  logOutUser() {
    if(this.authService.isLoggedIn) {
      this.authService.SignOut();
    }
  }

}
