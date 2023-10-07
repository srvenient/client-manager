import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {EmployeeComponent} from "./components/employee/employee.component";
import {RegisterEmployeeComponent} from "./components/register-employee/register-employee.component";

const routes: Routes = [
  {path: 'employees', component: EmployeeComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'register-employee', component: RegisterEmployeeComponent}
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
