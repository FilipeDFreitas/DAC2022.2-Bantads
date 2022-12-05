import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorService } from './services/administrador.service';
import { ListarAdmComponent } from './listar-adm/listar-adm.component';
import { EditarAdmComponent } from './editar-adm/editar-adm.component';
import { CriarAdmComponent } from './criar-adm/criar-adm.component';
import { ConsultarClientesAdmComponent } from './consultar-clientes-adm/consultar-clientes-adm.component';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms'



@NgModule({
  declarations: [
    ListarAdmComponent,
    EditarAdmComponent,
    CriarAdmComponent,
    ConsultarClientesAdmComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    AdministradorService
  ]
})
export class AdministradorModule { }
