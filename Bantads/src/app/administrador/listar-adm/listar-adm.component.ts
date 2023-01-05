import { Component, OnInit } from '@angular/core';
import { GerenteService } from 'src/app/gerente/services/gerente.service';
import { Gerente } from 'src/app/shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAdmComponent } from '../modal-adm/modal-adm.component';
import { AdministradorService } from '../services/administrador.service';

@Component({
  selector: 'app-listar-adm',
  templateUrl: './listar-adm.component.html',
  styleUrls: ['./listar-adm.component.css']
})
export class ListarAdmComponent implements OnInit {
  gerentes : Gerente[] =[];

  constructor(private AdministradorService: AdministradorService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.gerentes = this.listarTodos();
  }

  listarTodos(): Gerente[]{
    return this.AdministradorService.listarGerentes();
    
  }
  remover($event: any, gerente: Gerente): void {
    $event.preventDefault();
    if (confirm(`Deseja realment remover o gerente ${gerente.nome}?`)){
      this.AdministradorService.remover(gerente.id!);
      this.gerentes = this.listarTodos();
    }
  }
  abrirModal(gerente: Gerente){
    const modalRef = this.modalService.open(ModalAdmComponent,{ windowClass: 'modal-xl'});
    modalRef.componentInstance.gerente=gerente;
  }

}
