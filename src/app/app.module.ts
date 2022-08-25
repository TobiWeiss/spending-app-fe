import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {SpendingMgmtComponent} from './spending-mgmt/spending-mgmt.component';
import {AngularFullpageModule} from "@fullpage/angular-fullpage";
import {SideMenuComponent} from './core/components/side-menu/side-menu.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HistoryComponent } from './history/history.component';


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
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    AngularFullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
