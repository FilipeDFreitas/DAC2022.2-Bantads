import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteDadosComponent } from './cliente/cliente-dados/cliente-dados.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './cliente/home/home.component';
import { DepositarComponent } from './cliente/depositar/depositar.component';
import { SaqueComponent } from './cliente/saque/saque.component';
import { TransferenciaComponent } from './cliente/transferencia/transferencia.component';
import { SaldoComponent } from './cliente/saldo/saldo.component';
import { ExtratoComponent } from './cliente/extrato/extrato.component';
import { HomeGerenteComponent } from './gerente/home-gerente/home-gerente.component';
import { ListarTodosClientesComponent } from './gerente/listar-todos-clientes/listar-todos-clientes.component';
import { ModalRecusarClienteComponent } from './gerente/modal/modal-recusar-cliente/modal-recusar-cliente.component';
import { Top5Component } from './gerente/top5/top5.component';
import { ConsultarClienteComponent } from './gerente/consultar-cliente/consultar-cliente.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'clientes',
    redirectTo: 'clientes/home',
  },
  {
    path: 'clientes/home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'CLIENTE'
    }
  },
  {
    path: 'clientes/cliente-editar',
    component: ClienteDadosComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'CLIENTE'
    },
  },
  {
    path: 'clientes/depositar',
    component: DepositarComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'CLIENTE'
    },
  },
  {
    path: 'clientes/saque',
    component: SaqueComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'CLIENTE'
    },
  },
  {
    path: 'clientes/transferir',
    component: TransferenciaComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'CLIENTE'
    },
  },
  {
    path: 'clientes/saldo',
    component: SaldoComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'CLIENTE'
    },
  },
  {
    path: 'clientes/extrato',
    component: ExtratoComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'CLIENTE'
    },
  },

  {
    path: 'gerente',
    redirectTo: 'gerente/home',
  },


  {
    path: 'gerente/home',
    component: HomeGerenteComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'GERENTE'
    },

  },

  {
    path: 'gerente/modal-recusar/:id',
    component: ModalRecusarClienteComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'GERENTE'
    },
  },

  {
    path: 'gerente/listarTodosClientes',
    component: ListarTodosClientesComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'GERENTE'
    },
  },
  {
    path: 'gerente/top5',
    component: Top5Component,
    canActivate: [AuthGuard],
    data: {
      role: 'GERENTE'
    },
  },
  {
    path: 'gerente/consultarCliente',
    component: ConsultarClienteComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'GERENTE'
    },
  },

  {
    path: 'login',
    component: LoginComponent
  },
  ...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }