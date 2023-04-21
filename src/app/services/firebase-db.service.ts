import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDBService {

  constructor(private http: HttpClient) { }

  getUser(userId: string) {
    return this.http.get(`https://fantastudio-17fbd-default-rtdb.firebaseio.com/users/${userId}.json`);
  }

}
