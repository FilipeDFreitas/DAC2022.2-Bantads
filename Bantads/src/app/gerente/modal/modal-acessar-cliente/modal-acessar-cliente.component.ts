import { Component, OnInit , Input} from '@angular/core';
import { Cliente } from 'src/app/shared';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-acessar-cliente',
  templateUrl: './modal-acessar-cliente.component.html',
  styleUrls: ['./modal-acessar-cliente.component.css']
})
export class ModalAcessarClienteComponent implements OnInit {

  @Input() cliente!:Cliente;




  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
