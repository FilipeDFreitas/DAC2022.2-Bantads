import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteDadosComponent } from './cliente/cliente-dados/cliente-dados.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './cliente/home/home.component';


const routes: Routes = [
    { path: '', 
      redirectTo: 'login', 
      pathMatch: 'full' },

    { path: 'clientes', 
      redirectTo: 'clientes/home',
    },
    { path: 'clientes/home', 
      component:  HomeComponent,
      canActivate: [AuthGuard],
      data: {
        role: 'CLIENTE'
      }   
    },
    { path: 'clientes/cliente-editar', 
      component: ClienteDadosComponent,
      canActivate: [AuthGuard],
      data: {
        role: 'CLIENTE'
      },
    },  
    { 
      path: 'login',
      component: LoginComponent},
      ...LoginRoutes
];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
export class AppRoutingModule { }