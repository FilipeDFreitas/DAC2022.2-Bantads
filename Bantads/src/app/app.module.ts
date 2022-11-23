import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ClienteModule } from './cliente/cliente.module';
import { GerenteModule } from './gerente/gerente.module';
import { AdministradorModule } from './administrador/administrador.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClienteModule,
    GerenteModule,
    AdministradorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
