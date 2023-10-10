import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClientModel} from "./models/client.model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  //URL to access the Spring Boot REST API
  private baseUrl = 'http://localhost:8080/api/v1/clients';

  constructor(private httpClient: HttpClient) {
  }

  //Method to get all employees
  getClients() {
    return this.httpClient.get<ClientModel[]>(this.baseUrl);
  }

  getClientsBySharedKey(sharedKey: string) {
    return this.httpClient.get<ClientModel[]>(this.baseUrl + '/' + sharedKey);
  }

  //Method to create an employee
  createClient(client: ClientModel) {
    return this.httpClient.post(this.baseUrl, client);
  }
}
