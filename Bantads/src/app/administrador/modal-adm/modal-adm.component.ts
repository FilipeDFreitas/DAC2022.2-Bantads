import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Gerente } from 'src/app/shared';

@Component({
  selector: 'app-modal-adm',
  templateUrl: './modal-adm.component.html',
  styleUrls: ['./modal-adm.component.css']
})
export class ModalAdmComponent {
  @Input() gerente!: Gerente;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
