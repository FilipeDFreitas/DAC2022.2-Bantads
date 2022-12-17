import { Component, OnInit } from '@angular/core';
import { GerenteService } from '../services/gerente.service';
import { Cliente, Endereco } from 'src/app/shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalGerenteComponent } from '../modal-gerente/modal-gerente.component';
import { Observable } from 'rxjs';

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
    console.log("entrou aqui no init");
    this.clientes = this.listarClientes();
    
  
  }

  listarClientes(): Cliente[] {
    console.log("entrou aqui no listar")
        this.gerenteService.listarClientes().subscribe({
          next: (data: Cliente[]) => {
            if (data == null) {
            this.clientes = [];
            }
            else {
              console.log("entrou aqui no else")
              if(data.find( cliente => cliente.status === false )){
                console.log("entrou aqui");
              this.clientes = data;
              } 
              }
            }
            

        });
        return this.clientes;

      }
  

  abrirModalRecusar(cliente: Cliente) {
    const modalRef = this.modalService.open(ModalGerenteComponent);
    modalRef.componentInstance.cliente = cliente;
  } 





}
