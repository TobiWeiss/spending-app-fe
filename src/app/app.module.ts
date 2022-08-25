import {NgModule} from '@angular/core';
import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {SpendingMgmtComponent} from './spending-mgmt/spending-mgmt.component';
import {HammerModule} from "../../node_modules/@angular/platform-browser";
import {SideMenuComponent} from './core/components/side-menu/side-menu.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HistoryComponent} from './history/history.component';

declare var Hammer: any;


export class MyHammerConfig extends HammerGestureConfig {
  override overrides = <any>{
    'swipe': {
      direction: Hammer.DIRECTION_ALL, threshold:
        10
    },
    'pan': {velocity: 0.4, threshold: 20}
    // override default settings
  };
}

@NgModule({
  declarations: [
    AppComponent,
    SpendingMgmtComponent,
    SideMenuComponent,
    StatisticsComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HammerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),

  ],

  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig,
  },],
  bootstrap: [AppComponent]
})
export class AppModule {
}
