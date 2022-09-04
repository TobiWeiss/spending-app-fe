import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpendingMgmtComponent} from "./spending-mgmt/spending-mgmt.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {HistoryComponent} from "./history/history.component";


export const exportedRoutes: Routes = [{path: 'spending', component: SpendingMgmtComponent, data: {animation: "first"}},
  {path: 'history', component: HistoryComponent, data: {animation: "second"}},
  {path: 'statistics', component: StatisticsComponent, data: {animation: 'third'}}];

const routes: Routes = [{path: '', redirectTo: '/spending', pathMatch: 'full'},
  ...exportedRoutes];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
