import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/auth/services/login.service';
import { Cliente, Conta } from '../../shared';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {
  @ViewChild('formTransferencia') formTransferencia!: NgForm;

  public cliente: Cliente = new Cliente();
  public conta: Conta = new Conta();
  public isLoading = true;
  public valorTransferencia = 0;
  public numeroContaDestino = 0;


  constructor(
    private clienteService: ClienteService,
    private loginService: LoginService,
    //private contaService: ContaService,
  ) { }

  ngOnInit(): void {

  }

  public transferir(): void {
    console.log('');
    //if (this.formTransferencia.form.valid) {
      //this.contaService.transferir(this.conta.numero!, this.numeroContaDestino, this.valorTransferencia)
        //.subscribe({
          //next: () => {
            //alert('Transferência realizada com sucesso.');
            //this.formTransferencia.form.reset();
            //this.buscarInformacoesConta();
         // },
          //error: (error) => {
            //if (error.status == 404) {
              //alert('Conta de destino não encontrada.');
            //} else {
              //alert('Erro ao realizar transferência.');
           // }
          //}
    //}
  }
}
