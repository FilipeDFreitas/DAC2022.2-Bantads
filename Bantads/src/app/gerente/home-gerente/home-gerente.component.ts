import { Component, OnInit } from '@angular/core';
import { GerenteService } from '../services/gerente.service';
import { Cliente, Endereco } from 'src/app/shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalRecusarClienteComponent } from '../modal/modal-recusar-cliente/modal-recusar-cliente.component';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-gerente',
  templateUrl: './home-gerente.component.html',
  styleUrls: ['./home-gerente.component.css']
})
export class HomeGerenteComponent implements OnInit {

  clientes : Cliente[] = [];

  constructor( private gerenteService : GerenteService,
                private modalService: NgbModal,
                private router: Router) { }

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
              let data1:Cliente[] = data.filter(cliente => cliente.status === false);
              let data2:Cliente[] = data1.filter(cliente => cliente.conta?.motivoReprovacao === "aguardando");
              this.clientes = data2;
              
              }
            }
        });
        return this.clientes;

      }
  
  
  aprovar(cliente: Cliente){

   
      cliente.conta!.motivoReprovacao = "aprovado";
      cliente.status = true;
      cliente.conta!.dataAprovOuReprov = new Date();
      console.log(cliente.conta!.motivoReprovacao);
      console.log("chegou no modal");
      console.log(cliente.conta!.dataAprovOuReprov);
      this.gerenteService.aprovar(cliente);
      this.router.navigate(['/gerente/home']);
      
    
  }

  abrirModalRecusar(cliente: Cliente) {
    const modalRef = this.modalService.open(ModalRecusarClienteComponent);
    modalRef.componentInstance.cliente = cliente;
  } 





}
