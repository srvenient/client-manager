import {Component, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {ActivatedRoute} from "@angular/router";
import {ClientService} from "../../../services/client/client.service";
import {ClientComponent} from "../client.component";
import {MatDialog} from "@angular/material/dialog";
import {BsModalService} from "ngx-bootstrap/modal";
import {ErrorComponent} from "../error/error.component";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
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
        ]),
        trigger('showAndHideError', [
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
export class SearchComponent implements OnInit {
    advanceSearch = false;
    error = false;

    sharedKey: string; // This variable is used to store the shared key entered by the user.

    /**
     * These variables are used to store the business id, phone and email entered by the user.
     */
    businessId: string;
    phone: string;
    email: string;

    constructor(private route: ActivatedRoute, private clientComponent: ClientComponent, private clientService: ClientService, private modalService: BsModalService) {
    }

    ngOnInit(): void {

    }

    getClientBySharedKey() {
        if (this.sharedKey == null || this.sharedKey == '') {
            this.clientService.getClients().subscribe(data => {
                this.clientComponent.clients = data;
            });
            return;
        }

        this.clientService.getClientsBySharedKey(this.sharedKey).subscribe(data => {
                this.clientComponent.clients = data;
            },
            error => {
                if (error.status == 404) {
                    this.modalService.show(ErrorComponent);
                }
            });
    }

    getClientByAdvanceSearch() {
        this.clientService.getClientsByAdvanceSearch(this.businessId, this.phone, this.email)
            .subscribe(data => {
                    this.clientComponent.clients = data;
                },
                error => {
                    if (error.status == 404) {
                        this.modalService.show(ErrorComponent);
                    }
                });

        this.advanceSearchToggle();
    }

    advanceSearchToggle(): void {
        this.advanceSearch = !this.advanceSearch;
    }

    errorToggle(): void {
        this.error = !this.error;
    }
}
