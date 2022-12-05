import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarClientesAdmComponent } from './administrador/consultar-clientes-adm/consultar-clientes-adm.component';
import { CriarAdmComponent } from './administrador/criar-adm/criar-adm.component';
import { EditarAdmComponent } from './administrador/editar-adm/editar-adm.component';
import { ListarAdmComponent } from './administrador/listar-adm/listar-adm.component';

const routes: Routes = [
    { path: '',
      redirectTo: 'adm/lista',
      pathMatch: 'full'
    },
    { path: 'adm',
      redirectTo: 'adm/lista'
    },
    { path: 'adm/lista',
      component: ListarAdmComponent
    },
    { path: 'adm/criar',
      component: CriarAdmComponent
    },
    { path: 'adm/editar',
      component: EditarAdmComponent
    },
    { path: 'adm/consulta',
      component:ConsultarClientesAdmComponent
    }
  ];
    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
export class AppRoutingModule { }