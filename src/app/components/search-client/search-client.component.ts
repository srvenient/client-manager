import {Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {ClientModel} from "../../models/client.model";
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../../client.service";
import {ClientComponent} from "../client/client.component";

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrls: ['./search-client.component.css'],
  animations: [
    trigger('showAndHide', [
      state('show', style({
        opacity: 1,
        height: '*'
      })),
      state('hide', style({
        opacity: 0,
        height: '0'
      })),
      transition('show => hide', [
        animate('0.3s')
      ]),
      transition('hide => show', [
        animate('0.3s')
      ])
    ])
  ]
})
export class SearchClientComponent implements OnInit {
  show = false;

  sharedKey: string;
  client: ClientModel;

  constructor(private route: ActivatedRoute, private clientComponent:ClientComponent, private clientService: ClientService) {

  }

  ngOnInit(): void {

  }

  getClientBySharedKey() {
    this.client = new ClientModel();

    if (this.sharedKey == null || this.sharedKey == '') {
      this.clientService.getClients().subscribe(data => {
        this.clientComponent.clients = data;
      });
      return;
    }

    this.clientService.getClientsBySharedKey(this.sharedKey).subscribe(data => {
      this.clientComponent.clients = data;
    });
  }

  toggle(): void {
    this.show = !this.show;
  }
}
