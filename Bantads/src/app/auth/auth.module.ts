import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from '../shared';
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    NgxMaskModule.forRoot(),
    CurrencyMaskModule,
    SharedModule

  ],
  providers: [
    LoginComponent,
    { provide: LOCALE_ID, useValue: 'pt-br'}
  ]
})
export class AuthModule { }
