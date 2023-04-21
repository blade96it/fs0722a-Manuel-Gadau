import { Injectable } from '@angular/core';
import { Giocatore } from '../interfaces/giocatore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiocatoriService {

  constructor(private http: HttpClient) { }

  getGiocatori() {
    return this.http.get<Giocatore[]>('http://localhost:8080/giocatori');
  }

}
