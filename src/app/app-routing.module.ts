import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpendingMgmtComponent} from "./spending-mgmt/spending-mgmt.component";

const routes: Routes = [{path: '', redirectTo: '/spending', pathMatch: 'full'},
  {path: 'spending', component: SpendingMgmtComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
