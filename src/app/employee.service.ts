import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {EmployeeModel} from "./models/employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //URL to access the Spring Boot REST API
  private baseUrl = 'http://localhost:8080/api/v1/employees';

  constructor(private httpClient: HttpClient) {
  }

  //Method to get all employees
  getEmployees() {
    return this.httpClient.get<EmployeeModel[]>(this.baseUrl);
  }

  //Method to create an employee
  createEmployee(employee: EmployeeModel) {
    return this.httpClient.post(this.baseUrl, employee);
  }
}
