import { Component, OnInit , Input} from '@angular/core';
import { Cliente } from 'src/app/shared';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-recusar-cliente',
  templateUrl: './modal-recusar-cliente.component.html',
  styleUrls: ['./modal-recusar-cliente.component.css']
})
export class ModalRecusarClienteComponent implements OnInit {

  @Input() cliente!:Cliente;




  constructor(public activeModal: NgbActiveModal) { }



  ngOnInit(): void {
  }

}
