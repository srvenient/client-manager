import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../client.service";
import {Router} from "@angular/router";
import {ClientModel} from "../../models/client.model";

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {

  client: ClientModel = new ClientModel()

  constructor(private clientService: ClientService, private router: Router) {
  }

  ngOnInit(): void {

  }

  saveClient() {
    this.clientService.createClient(this.client).subscribe(data => {
      console.log(data);
      this.goToClientList();
    });
  }

  goToClientList() {
    this.router.navigate(['/clients']).then(r => console.log(r));
  }

  onSubmit() {
    this.saveClient();
  }
}
