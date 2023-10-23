import {Component} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})
export class ErrorComponent {
    error: string;

    constructor(private modalService: BsModalService, public bsModalRef: BsModalRef) {
    }

    show() {
        const modalRef = this.modalService.show(ErrorComponent);
        modalRef.content.error =  'No se ha encontrado ningun resultado..';
    }

    hide() {
        this.bsModalRef.hide(); // Cierra el cuadro de diálogo
    }
}
