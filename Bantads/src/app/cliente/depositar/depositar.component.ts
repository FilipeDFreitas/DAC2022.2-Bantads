import { Depositar } from './../../shared/models/depositar.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DepositarService } from '../services/depositar.service';

@Component({
  selector: 'app-depositar',
  templateUrl: './depositar.component.html',
  styleUrls: ['./depositar.component.css']
})
export class DepositarComponent {
  @Output() aoDepositar = new EventEmitter<any>();
  public valor = 0;
  public destino = 0;

  constructor(
    private depositarService: DepositarService
    ) {}


  depositar(){

    const valorEmitir: Depositar = {valor : this.valor};

    this.depositarService.adicionar(valorEmitir).subscribe(
      (resultado) => {

        this.limparCampos();
      },
      (error) => error(error));
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
