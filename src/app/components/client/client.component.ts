import {Component, OnInit} from '@angular/core';
import {ClientModel} from "../../models/client.model";
import {ClientService} from "../../client.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: ClientModel[];

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.getClients();
  }

  private getClients() {
    this.clientService.getClients().subscribe(data => {
      this.clients = data;
    });
  }
}
