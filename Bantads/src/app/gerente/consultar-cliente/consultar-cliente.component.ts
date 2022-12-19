import { Component, OnInit } from '@angular/core';
import { GerenteService } from '../services/gerente.service';
import { Cliente, Endereco } from 'src/app/shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalRecusarClienteComponent } from '../modal/modal-recusar-cliente/modal-recusar-cliente.component';
import { Observable } from 'rxjs';
import { Input } from '@angular/core';


@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent implements OnInit {

  @Input() cliente!:Cliente;
  clientes: Cliente[] = [];

  constructor( private gerenteService : GerenteService,
                private modalService: NgbModal,
                ) { }


  ngOnInit(): void {
    this.cliente = new Cliente;
  }

  buscarCpf(cpf: String): Cliente[] {
    this.gerenteService.listarClientes().subscribe({
      next: (data: Cliente[]) => {
        if (data == null) {
          this.clientes = [];
        }
        else {
          let data1: Cliente[] = data.filter(cliente => cliente.status === true);
          let data2: Cliente[] = data.filter(cliente => cliente.cpf!.toString() === cpf);
          
          this.clientes = data2;
        }
      }
    });
    
    return this.clientes;
    
  }

  






}