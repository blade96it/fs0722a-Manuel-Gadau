import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  iconaFacebook = faFacebook;
  iconaInstagram = faInstagram;
  iconaLinkedin = faLinkedin;

  isPost!: boolean;

  posts = [
    {
      id: 1,
      titolo: "BENVENUTO SU FANTASTUDIO!",
      body: "FantaStudio è l'applicazione definitiva per gli appassionati del fantacalcio. Con FantaStudio, la gestione delle aste diventa un'esperienza interattiva e dinamica, grazie alla possibilità di giocare in tempo reale e interagire con la community attraverso diversi devices. <br><br> Il sistema di valutazione innovativo, basato sui calcoli delle prestazioni degli ultimi 3 anni dei calciatori, fornisce ai giocatori carte personalizzate con le loro statistiche e valutazioni, per aiutarti a prendere decisioni informate. <br><br> Organizza e partecipa alle tue aste del fantacalcio ovunque tu sia con FantaStudio, l'applicazione che ti permette di personalizzare le tue aste, avere il controllo completo e vivere l'emozione del gioco come mai prima d'ora.",
      img: "post1.jpg",
      data: "20/04/2023"
    },
    {
      id: 2,
      titolo: "BENVENUTO SU FANTASTUDIO!",
      body: "FantaStudio è l'applicazione definitiva per gli appassionati del fantacalcio. Con FantaStudio, la gestione delle aste diventa un'esperienza interattiva e dinamica, grazie alla possibilità di giocare in tempo reale e interagire con la community attraverso diversi devices.<br><br> Il sistema di valutazione innovativo, basato sui calcoli delle prestazioni degli ultimi 3 anni dei calciatori, fornisce ai giocatori carte personalizzate con le loro statistiche e valutazioni, per aiutarti a prendere decisioni informate.<br><br> Organizza e partecipa alle tue aste del fantacalcio ovunque tu sia con FantaStudio, l'applicazione che ti permette di personalizzare le tue aste, avere il controllo completo e vivere l'emozione del gioco come mai prima d'ora.",
      img: "post1.jpg",
      data: "20/04/2023"
      },
    {
      id: 3,
      titolo: "BENVENUTO SU FANTASTUDIO!",
      body: "FantaStudio è l'applicazione definitiva per gli appassionati del fantacalcio. Con FantaStudio, la gestione delle aste diventa un'esperienza interattiva e dinamica, grazie alla possibilità di giocare in tempo reale e interagire con la community attraverso diversi devices.<br><br> Il sistema di valutazione innovativo, basato sui calcoli delle prestazioni degli ultimi 3 anni dei calciatori, fornisce ai giocatori carte personalizzate con le loro statistiche e valutazioni, per aiutarti a prendere decisioni informate.<br><br> Organizza e partecipa alle tue aste del fantacalcio ovunque tu sia con FantaStudio, l'applicazione che ti permette di personalizzare le tue aste, avere il controllo completo e vivere l'emozione del gioco come mai prima d'ora.",
      img: "post1.jpg",
      data: "20/04/2023"
    },
  ]
  post!: Post;

  constructor (private route: ActivatedRoute) {}

  ngOnInit()  {
    if(this.route.snapshot.paramMap.get('id')) {
      this.isPost = true;
      this.post = this.posts[parseInt(this.route.snapshot.paramMap.get('id')!) -1]
    }
    else {
      this.isPost = false;
    }
  }

  tagliaParolePost(testo: string): string {
    const parole = testo.trim().split(/\s+/); // dividere la stringa in parole
    const paroleTagliate = parole.slice(0, 15); // prendere solo le prime 20 parole
    return paroleTagliate.join(" "); // unire le parole in una nuova stringa
  }

}
