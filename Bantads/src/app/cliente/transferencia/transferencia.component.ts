import { Transferencia } from './../../shared/models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();
  public valor = 0;
  public destino = 0;


  constructor(
    private transferenciaService: TransferenciaService
  ) { }


  transferir(){
    console.log('Solicitada nova transferência');
    const valorEmitir: Transferencia = {valor : this.valor, destino : this.destino};

    this.transferenciaService.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.limparCampos();
      },
      (error) => console.error(error));
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
