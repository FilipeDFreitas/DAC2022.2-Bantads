import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePrincipalComponent } from './cliente/home-principal/home-principal.component';
import { ClienteDadosComponent } from './cliente/cliente-dados/cliente-dados.component';

const routes: Routes = [
    { path: '', 
      redirectTo: 'clientes/home-principal', 
      pathMatch: 'full' },
    { path: 'clientes', 
      redirectTo: 'clientes/home-principal' },
    { path: 'clientes/home-principal', 
      component:  HomePrincipalComponent },
    { path: 'clientes/cliente-editar', 
      component: ClienteDadosComponent }
];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
export class AppRoutingModule { }