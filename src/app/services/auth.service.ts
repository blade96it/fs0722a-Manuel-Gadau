import { Injectable, NgZone } from '@angular/core';
import { User } from '../interfaces/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Database, ref, set, update} from '@angular/fire/database'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any; // Save logged in user data
  firebaseUrl = 'https://fantastudio-17fbd-default-rtdb.firebaseio.com';



  constructor(
    public afs: AngularFirestore, // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone, // NgZone service to remove outside scope warning
    private http: HttpClient,
    private database: Database
  ) {
    /* Salva l'utente nel local storage quando si logga
    e lo imposta su null quando avviene il logout. */
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

    // Sign in con email e password
    SignIn(email: string, password: string, mailNonVerificata: string) {
      return this.afAuth
        .signInWithEmailAndPassword(email, password)
        .then((result) => {
          this.afAuth.authState.subscribe((user) => {
            if (user) {
              if(user.emailVerified) {
                this.router.navigate(['']).then(() => {
                  window.location.reload();
                });
              }
            }
          });
        })
    }

    // Sign up con email e password
  SignUp(email: string, password: string, username: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        /* Chiama il metodo SendVerificaitonMail() quando l'utente si iscrive
        e restituisce una promise */
        this.SendVerificationMail();
        this.userPost(result.user, username)
      })
  }

  // Invia una mail di verifica quando l'utente si iscrive
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verifica-indirizzo-mail']);
      });
  }

  // Reset per password dimenticata
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
  }

  // Restituisce true quando l'utente è loggato e la mail è verificata
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }


  // Registrazione con Google e relativo inserimento nel DB
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['']).then(() => {
        window.location.reload();
      });;
    });
  }

  // Registrazione con Facebook e relativo inserimento nel DB
  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider()).then((res: any) => {
      this.router.navigate(['']).then(() => {
        window.location.reload();
      });;
    });
  }

  // Logica di autorizzazione unicamente per Google
  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['']);
        this.userPostGoogle(result.user)
        console.log(result.user);
      })
  }


  //POST dell'utente nel DB
    userPost(user: any, username: string) {
      const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: username,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      premium: "N",
      gettone: "0",
      leghe: []
    }
    const userURL = `https://fantastudio-17fbd-default-rtdb.firebaseio.com/users/${user.uid}.json`;
     return this.http.put(userURL, userData).subscribe(data => {});
  }

  //POST dell'utente Google nel DB
  async userPostGoogle(user: any) {
    if(!(await this.checkChildExistence(user.uid))) {
    set(ref(this.database, 'users/' + user.uid), {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    emailVerified: user.emailVerified,
    premium: "N",
    gettone: "0",
    leghe: []
    })
    } else {
    console.log("non serpeverde, non perseverde non dersercsde,vsxcvndfvdfb....................");
    }
    }

  //Funzione asincrona che verificherà se all'interno del database esista un utente con pari ID a quello che si vorrà inserire
  async checkChildExistence(childId: string) {
    const response = await this.http.get(`${this.firebaseUrl}/users/${childId}.json?auth=AIzaSyDq-CtTc47-EWlYyZqVAHf2Pc2iRN05j5E`).toPromise();
    console.log(response);
    return response !== null;
    }

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
    });
  }
}
