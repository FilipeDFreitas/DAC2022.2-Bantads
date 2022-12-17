import { Component, OnInit } from '@angular/core';
import { GerenteService } from '../services/gerente.service';
import { Cliente, Endereco } from 'src/app/shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalRecusarClienteComponent } from '../modal/modal-recusar-cliente/modal-recusar-cliente.component';
import { Observable } from 'rxjs';
import { ModalAcessarClienteComponent } from '../modal/modal-acessar-cliente/modal-acessar-cliente.component';

@Component({
  selector: 'app-listar-todos-clientes',
  templateUrl: './listar-todos-clientes.component.html',
  styleUrls: ['./listar-todos-clientes.component.css']
})
export class ListarTodosClientesComponent implements OnInit {

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
          let data1:Cliente[] = data.filter(cliente => cliente.status === true);
          data1.sort();

          this.clientes = data1;



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