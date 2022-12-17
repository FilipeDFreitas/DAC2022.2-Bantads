import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenteService } from './services/gerente.service';
import { HomeGerenteComponent } from './home-gerente/home-gerente.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModalGerenteComponent } from './modal-gerente/modal-gerente.component';
import { ListarTodosClientesComponent } from './listar-todos-clientes/listar-todos-clientes.component';



@NgModule({
  declarations: [
    HomeGerenteComponent,
    ModalGerenteComponent,
    ListarTodosClientesComponent
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
