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
import { ConsultarClientesAdmComponent } from './administrador/consultar-clientes-adm/consultar-clientes-adm.component';
import { CriarAdmComponent } from './administrador/criar-adm/criar-adm.component';
import { EditarAdmComponent } from './administrador/editar-adm/editar-adm.component';
import { ListarAdmComponent } from './administrador/listar-adm/listar-adm.component';
import { HomeAdmComponent } from './administrador/home-adm/home-adm.component';



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
    { path: 'clientes/depositar', 
      component: DepositarComponent,
      canActivate: [AuthGuard],
      data: {
        role: 'CLIENTE'
      },
    },
    { path: 'clientes/saque', 
      component: SaqueComponent,
      canActivate: [AuthGuard],
      data: {
        role: 'CLIENTE'
      },
    },
    { path: 'clientes/transferir', 
      component: TransferenciaComponent,
      canActivate: [AuthGuard],
      data: {
        role: 'CLIENTE'
      },
    },
    { path: 'clientes/saldo', 
      component: SaldoComponent,
      canActivate: [AuthGuard],
      data: {
        role: 'CLIENTE'
      },
    }, 
    { path: 'clientes/extrato', 
    component: ExtratoComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'CLIENTE'
     },
    },     
    { 
      path: 'login',
      component: LoginComponent},
    ...LoginRoutes,

    { path: 'adm',
      redirectTo: 'adm/home'
    },
    { path: 'adm/home',
      component: HomeAdmComponent
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