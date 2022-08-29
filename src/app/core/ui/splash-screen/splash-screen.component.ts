import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  windowHeight!: string;
  showSplash = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.windowHeight = window.innerHeight + "px";

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 500);
    }, 3000);
  }

  constructor() {
  }


}
