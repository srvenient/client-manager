import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ClientComponent} from "./components/client/client.component";
import {RegisterClientComponent} from "./components/register-client/register-client.component";
import {SearchClientComponent} from "./components/search-client/search-client.component";

const routes: Routes = [
  {path: 'clients', component: ClientComponent},
  {path: '', redirectTo: 'clients', pathMatch: 'full'},
  {path: 'clients/register-client', component: RegisterClientComponent},
  {path: 'clients/:sharedKey', component: SearchClientComponent},
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
