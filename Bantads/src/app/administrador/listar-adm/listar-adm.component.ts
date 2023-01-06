import { Component, OnInit } from '@angular/core';
import { Gerente } from 'src/app/shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAdmComponent } from '../modal-adm/modal-adm.component';
import { AdministradorService } from '../services/administrador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-adm',
  templateUrl: './listar-adm.component.html',
  styleUrls: ['./listar-adm.component.css']
})
export class ListarAdmComponent implements OnInit {
  gerentes : Gerente[] =[];

  constructor(
    private AdministradorService: AdministradorService,
    private modalService: NgbModal,
    private router: Router) { }

  ngOnInit(): void {
    this.gerentes = this.listarTodos();
  }

  listarTodos(): Gerente[]{

    this.AdministradorService.listarGerentes().subscribe({
      next: (data: Gerente[]) => {
         if (data == null) {
           this.gerentes = [];
        }
         else {
           this.gerentes = data;
         }
 
       }
 
     });
    return this.gerentes;
    
  }
  remover($event: any, gerente: Gerente): void {
    $event.preventDefault();
    if (confirm(`Deseja realment remover o gerente ${gerente.nome}?`)){
      this.AdministradorService.remover(gerente.id).subscribe(gerente => {
        this.router.navigate( ["/adm/lista"] );});
    }
  }
  abrirModal(gerente: Gerente){
    const modalRef = this.modalService.open(ModalAdmComponent,{ windowClass: 'modal-xl'});
    modalRef.componentInstance.gerente=gerente;
  }

}
