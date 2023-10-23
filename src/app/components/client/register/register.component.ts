import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../../client.service";
import {Router} from "@angular/router";
import {ClientModel} from "../../../models/client.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  client: ClientModel = new ClientModel()

  constructor(private clientService: ClientService, private router: Router) {
  }

  ngOnInit(): void {

  }

  /**
   * The saveClient() method uses the ClientService to send a client to the
   * Spring Boot application for registration.
   */
  saveClient() {
    this.clientService.registerClient(this.client).subscribe(data => {
      console.log(data);
      this.goToClientList();
    });
  }

  /**
   * The goToClientList() method redirects the user to the client list page.
   */
  goToClientList() {
    this.router.navigate(['/clients']).then(r => console.log(r));
  }

  /**
   * The onSubmit() method is called when the user clicks the submit button.
   */
  onSubmit() {
    this.saveClient();
  }
}
