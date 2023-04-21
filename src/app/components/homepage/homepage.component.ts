import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { faArrowCircleLeft, faArrowCircleRight, } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import * as AOS from 'aos';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

  iconaFrecciaSinistra = faArrowCircleLeft;
  iconaFrecciaDestra = faArrowCircleRight;
  iconaFacebook = faFacebook;
  iconaInstagram = faInstagram;
  iconaLinkedin = faLinkedin;

  constructor (private authService: AuthService) { }

  ngOnInit(): void {
    AOS.init();
  }

}
