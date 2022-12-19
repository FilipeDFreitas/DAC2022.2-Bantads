import { Conta } from './../../shared/models/conta.model';
import { Component, OnInit } from '@angular/core';
import { Cliente, Endereco, Gerente } from 'src/app/shared';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {
  cliente: Cliente = new Cliente(new Endereco(), new Conta(new Gerente()));
  conta: Conta = new Conta();
  gerente: Gerente = new Gerente();
  loading!: boolean;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.cliente = new Cliente(new Endereco(), new Conta(new Gerente()));
    this.loading = false;
    this.id = "2";

    this.clienteService.buscarPorId(+this.id).subscribe(cliente =>
      { this.cliente = cliente;});

  }

}
