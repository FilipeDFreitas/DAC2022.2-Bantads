
import { Component, OnInit } from '@angular/core';
import { GerenteService } from '../services/gerente.service';
import { Cliente, Conta, Endereco } from 'src/app/shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalAcessarClienteComponent } from '../modal/modal-acessar-cliente/modal-acessar-cliente.component';

@Component({
  selector: 'app-top5',
  templateUrl: './top5.component.html',
  styleUrls: ['./top5.component.css']
})
export class Top5Component implements OnInit {

  clientes: Cliente[] = [];

  constructor(private gerenteService: GerenteService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.clientes = this.listarClientes();

  }

  listarClientes(): Cliente[] {

    this.gerenteService.listarClientes().subscribe({
      next: (data: Cliente[]) => {
        if (data == null) {
          this.clientes = [];
        }
        else {
          let data1:Cliente[] = data.filter(cliente => cliente.conta?.saldo);

          function(a:Conta, b:Conta) {
            return a.saldo? < b.saldo?;

          }


          data1.sort(function);
          this.clientes = data1.slice(0,5);

        }
      }
    });
    return this.clientes;
  }



  abrirModalAcessarCliente(cliente: Cliente) {
    const modalRef = this.modalService.open(ModalAcessarClienteComponent);
    modalRef.componentInstance.cliente = cliente;
  }










}
