import { Component, OnInit } from '@angular/core';
import { GerenteService } from '../services/gerente.service';
import { Cliente, Endereco } from 'src/app/shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalGerenteComponent } from '../modal-gerente/modal-gerente.component';

@Component({
  selector: 'app-home-gerente',
  templateUrl: './home-gerente.component.html',
  styleUrls: ['./home-gerente.component.css']
})
export class HomeGerenteComponent implements OnInit {

  clientes : Cliente[] = [];

  constructor( private gerenteService : GerenteService,
                private modalService: NgbModal) { }

  ngOnInit(): void {
    this.clientes = this.listarClientes();
  
  }
  listarClientes(): Cliente[] {
    return[
    new Cliente (undefined, 125, "Jorge", "jorge@gmail.com", undefined, 326598, 50000, undefined, undefined),
    new Cliente (undefined, 128, "MArta", "jorge@gmail.com", undefined, 326598, 5000, undefined, undefined),
    new Cliente (undefined, 129, "Pele", "jorge@gmail.com", undefined, 326598, 500000, undefined, undefined)
    
    ];
        //return this.gerenteService.listarClientes();
  }

  abrirModalRecusar(cliente: Cliente) {
    const modalRef = this.modalService.open(ModalGerenteComponent);
    modalRef.componentInstance.cliente = cliente;
  } 





}
