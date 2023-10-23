import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ClientComponent} from "./components/client/client.component";
import {RegisterComponent} from "./components/client/register/register.component";
import {SearchComponent} from "./components/client/search/search.component";

/**
 * The routes array contains the routes of our application.
 */
const routes: Routes = [
    {path: 'clients', component: ClientComponent},
    {path: '', redirectTo: 'clients', pathMatch: 'full'},
    {path: 'clients/register', component: RegisterComponent},
    {path: 'clients/search/:sharedKey', component: SearchComponent},
];

/**
 * The AppRoutingModule is where we define the routes for our application.
 */
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
