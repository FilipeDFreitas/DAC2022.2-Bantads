import { Component, OnInit } from '@angular/core';
import { GerenteService } from '../services/gerente.service';
import { Cliente, Endereco } from 'src/app/shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalRecusarClienteComponent } from '../modal/modal-recusar-cliente/modal-recusar-cliente.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent implements OnInit {

  clientes : Cliente[] = [];

  constructor( private gerenteService : GerenteService,
                private modalService: NgbModal) { }


  ngOnInit(): void {
    
  }

  buscarCpf(cpf: String){
    
    
  }

}