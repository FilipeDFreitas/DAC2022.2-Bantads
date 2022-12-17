import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenteService } from './services/gerente.service';
import { HomeGerenteComponent } from './home-gerente/home-gerente.component';



@NgModule({
  declarations: [
    HomeGerenteComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    GerenteService
  ]
})
export class GerenteModule { }
