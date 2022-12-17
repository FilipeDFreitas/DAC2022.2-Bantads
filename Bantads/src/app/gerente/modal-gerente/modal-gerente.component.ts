import { Component, OnInit , Input} from '@angular/core';
import { Cliente } from 'src/app/shared';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-gerente',
  templateUrl: './modal-gerente.component.html',
  styleUrls: ['./modal-gerente.component.css']
})
export class ModalGerenteComponent implements OnInit {

  @Input() cliente!:Cliente;




  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }







}
