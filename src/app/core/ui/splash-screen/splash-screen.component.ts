import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {
  public readonly TIME_UNTIL_SPLASH_SCREEN_STARTS_TO_DISAPPEAR: number = 3000;
  public readonly ADDITIONAL_TIME_UNTIL_SPLASH_SCREEN_FINALLY_DISAPPEARS: number = 500;
  public distanceToTop!: string;
  public showSplash = true;


  ngOnInit(): void {
    setTimeout(() => {
      this.distanceToTop = window.innerHeight + "px";

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, this.ADDITIONAL_TIME_UNTIL_SPLASH_SCREEN_FINALLY_DISAPPEARS);
    }, this.TIME_UNTIL_SPLASH_SCREEN_STARTS_TO_DISAPPEAR);
  }

  constructor() {
  }


}
