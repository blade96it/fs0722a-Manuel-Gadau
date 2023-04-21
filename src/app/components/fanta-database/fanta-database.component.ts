import { Component, ElementRef, OnInit } from '@angular/core';
import { faUserNinja, faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { Giocatore } from 'src/app/interfaces/giocatore';
import { GiocatoriService } from 'src/app/services/giocatori.service';

@Component({
  selector: 'app-fanta-database',
  templateUrl: './fanta-database.component.html',
  styleUrls: ['./fanta-database.component.scss']
})
export class FantaDatabaseComponent implements OnInit {

  iconaGiocatore = faUserNinja;
  iconaPlus = faPlusCircle;
  iconaMinus = faMinusCircle;

  giocatori!: Giocatore[];

  giocatoriPerPagina = 4;
  paginaCorrente = 0;
  pageCount = 0;


  constructor (private elementRef: ElementRef, private giocatoriService: GiocatoriService) {}

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.scrollTop = 0;

    this.giocatoriService.getGiocatori()
      .subscribe(giocatori => {
        this.giocatori = giocatori;
        this.pageCount = Math.ceil(this.giocatori.length / this.giocatoriPerPagina);
      });
  }

  get pages(): number[] {
    let startPage = 0;
    let endPage = this.pageCount - 1;
    if (this.pageCount > 3) {
      if (this.paginaCorrente < 2) {
        endPage = 2;
      } else if (this.paginaCorrente > this.pageCount - 3) {
        startPage = this.pageCount - 3;
      } else {
        startPage = this.paginaCorrente - 1;
        endPage = this.paginaCorrente + 1;
      }
    }
    return Array(endPage - startPage + 1).fill(0).map((x, i) => startPage + i);
  }

  setPage(page: number) {
    if (page < 1 || page > this.pageCount) {
      return;
    }
    this.paginaCorrente = page - 1;
  }

  goToFirstPage() {
    this.setPage(1);
  }

  goToLastPage() {
    this.setPage(this.pageCount);
  }

  espandiGiocatore(giocatore: { espanso: boolean; }): void {
    giocatore.espanso = !giocatore.espanso;
  }

  tagliaParola(testo: string): string {
    return testo.substring(0, 3).toUpperCase();
  }

}
