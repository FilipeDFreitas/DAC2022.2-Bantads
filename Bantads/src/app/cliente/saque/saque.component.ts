import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Saque } from 'src/app/shared/models/saque.model';
import { SaqueService } from '../services/saque.service';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent{
  @Output() aoSaque = new EventEmitter<any>();
  public valor = 0;
  public destino = 0;

  constructor(
    private saqueService: SaqueService
    ) {}


  saque(){

    const valorEmitir: Saque = {valor : this.valor};

    this.saqueService.adicionar(valorEmitir).subscribe(
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
