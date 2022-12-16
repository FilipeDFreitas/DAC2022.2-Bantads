import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
//import { NumericoDirective } from '../shared/directives/numerico.directive';
//import { MeuPipePipe } from '../shared/pipes/meu-pipe.pipe';
//import { NgxMaskModule, IConfig } from 'ngx-mask'
//export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [
    LoginComponent,
    //NumericoDirective,
    //MeuPipePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    //NgxMaskModule.forRoot()
  ]
})
export class AuthModule { }
