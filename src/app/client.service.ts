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

  /**
   * The getClients() method uses the HttpClient get() method to retrieve
   * all the employees from the Spring Boot application.
   */
  getClients() {
    return this.httpClient.get<ClientModel[]>(this.baseUrl);
  }

  /**
   * The getClientsBySharedKey() method uses the HttpClient get() method to
   * retrieve an employee by sharedKey from the Spring Boot application.
   *
   * @param sharedKey The sharedKey of the employee to retrieve.
   */
  getClientsBySharedKey(sharedKey: string) {
    return this.httpClient.get<ClientModel[]>(this.baseUrl + '/' + sharedKey);
  }

  /**
   * The registerClient() method uses the HttpClient post() method to
   * send a client to the Spring Boot application for registration.
   *
   * @param client The client to create.
   */
  registerClient(client: ClientModel) {
    return this.httpClient.post(this.baseUrl + "/register", client);
  }
}
