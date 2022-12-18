import { Cliente } from './../../shared/models/cliente.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from 'src/app/shared';

@Component({
  selector: 'app-cliente-dados',
  templateUrl: './cliente-dados.component.html',
  styleUrls: ['./cliente-dados.component.css']
})
export class ClienteDadosComponent implements OnInit {

  @ViewChild('formCliente') formCliente!: NgForm;
  cliente: Cliente = new Cliente(new Endereco);
  id!: string;
  loading!: boolean;

  endereco: Endereco = new Endereco();
  public estados: string[] = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA",
    "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  constructor(

    private clienteService:ClienteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.cliente = new Cliente(new Endereco());
    this.loading = false;
    this.id = "2";

    this.clienteService.buscarPorId(+this.id).subscribe(cliente => {
        this.cliente = cliente;
      });
    }

  salvar(): void {

    this.loading = true;
    if (this.formCliente.form.valid) {
      this.clienteService.alterar(this.cliente).subscribe(
        cliente => {
            this.loading = false;
            this.router.navigate(["/clientes"]);
          }
        );
      }

    this.loading = false;
  }
}

