import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteService } from './services/cliente.service';
import { ClienteDadosComponent } from './cliente-dados/cliente-dados.component';
import { DepositarComponent } from './depositar/depositar.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { IndexComponent } from './index/index.component';
import { SaldoComponent } from './saldo/saldo.component';
import { SaqueComponent } from './saque/saque.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';


@NgModule({
  declarations: [
    ClienteDadosComponent,
    DepositarComponent,
    ExtratoComponent,
    IndexComponent,
    SaldoComponent,
    SaqueComponent,
    TransferenciaComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
