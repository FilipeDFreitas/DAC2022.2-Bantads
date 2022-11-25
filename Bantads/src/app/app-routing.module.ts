import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './cliente/index/index.component';
import { ClienteDadosComponent } from './cliente/cliente-dados/cliente-dados.component';

const routes: Routes = [
    { path: '', 
      redirectTo: 'clientes/index', 
      pathMatch: 'full' },
    { path: 'clientes', 
      redirectTo: 'clientes/index' },
    { path: 'clientes/index', 
      component:  IndexComponent },
    { path: 'clientes/cliente-editar', 
      component: ClienteDadosComponent }
      
];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
export class AppRoutingModule { }