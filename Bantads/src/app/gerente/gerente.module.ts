import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenteService } from './services/gerente.service';
import { HomeGerenteComponent } from './home-gerente/home-gerente.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListarTodosClientesComponent } from './listar-todos-clientes/listar-todos-clientes.component';
import { ModalRecusarClienteComponent } from './modal/modal-recusar-cliente/modal-recusar-cliente.component';
import { ModalAcessarClienteComponent } from './modal/modal-acessar-cliente/modal-acessar-cliente.component';
import { ConsultarClienteComponent } from './consultar-cliente/consultar-cliente.component';
import { Top5Component } from './top5/top5.component';




@NgModule({
  declarations: [
    HomeGerenteComponent,
    ListarTodosClientesComponent,
    ModalRecusarClienteComponent,
    ModalAcessarClienteComponent,
    ConsultarClienteComponent,
    Top5Component,
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    GerenteService
  ]
})
export class GerenteModule { }
