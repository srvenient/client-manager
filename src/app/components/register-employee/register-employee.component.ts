import {Component, OnInit} from '@angular/core';
import {EmployeeModel} from "../../models/employee.model";
import {EmployeeService} from "../../employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  employee: EmployeeModel = new EmployeeModel()

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit(): void {

  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.goToEmployeeList();
    });
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']).then(r => console.log(r));
  }

  onSubmit() {
    this.saveEmployee();
  }
}
