import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  navigateToFacebook() {
    window.open('https://www.facebook.com/CustomWorksRo')
  }

  navigateToInstagram() {
    window.open('https://www.instagram.com/customworkscrew/')
  }

  navigateToYoutube() {
    window.open('https://www.youtube.com/c/CustomWorksCrew')
  }

  navigateToResmerita() {
    window.open('https://github.com/RazRes')
  }

  navigateToBocancea() {
    window.open('https://github.com/cristian6p')
  }
}
