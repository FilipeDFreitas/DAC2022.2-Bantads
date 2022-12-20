import { AppRoutingModule } from './../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteService } from './services/cliente.service';
import { ClienteDadosComponent } from './cliente-dados/cliente-dados.component';
import { DepositarComponent } from './depositar/depositar.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { SaldoComponent } from './saldo/saldo.component';
import { SaqueComponent } from './saque/saque.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { NgxMaskModule, IConfig } from 'ngx-mask'
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

import { FormsModule } from '@angular/forms';
import { TransferenciaService } from './services/transferencia.service';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import localeES from '@angular/common/locales/es';
import localeDE from '@angular/common/locales/de';
import localeFR from '@angular/common/locales/fr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
registerLocaleData(localePT);
registerLocaleData(localeES);
registerLocaleData(localeDE);
registerLocaleData(localeFR);


@NgModule({
  declarations: [
    ClienteDadosComponent,
    DepositarComponent,
    ExtratoComponent,
    SaldoComponent,
    SaqueComponent,
    TransferenciaComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    TransferenciaService,
    { provide: LOCALE_ID, useValue: 'pt-br'}
  ]
})
export class ClienteModule { }
