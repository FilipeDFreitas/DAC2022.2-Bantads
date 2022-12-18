import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import { Cliente, Endereco, Login, Conta } from 'src/app/shared';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  @ViewChild('formLogin') formLogin!: NgForm;
  login: Login = new Login();
  loading: boolean = false;
  message!: string;

  //cadastro
  public endereco = new Endereco();
  public estados: string[] = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA",
    "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];
  public conta = new Conta();
  public idConta = 0;

  constructor(
    private loginService: LoginService,
    private clienteService: ClienteService, // parte do cadastro
    private router: Router,
    private route: ActivatedRoute) {}



  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.message = params['error'];
      });
    // Cadastro - Cria uma instância vazia, para não dar erro de referência

    // com o prof, antes de fazer o json db >
    this.cliente = new Cliente(new Endereco()),(new Conta());

  }

  logar(): void {
    this.loading = true;
    if (this.formLogin.form.valid) {
      this.loginService.login(this.login).subscribe((usu) => {
        if (usu != null) {
          this.loginService.usuarioLogado = usu;
          this.loading = false;
          if (usu.perfil == "ADMIN") {
            //ajustar rota administrador
            this.router.navigate([""]);
          } else if (usu.perfil == "GERENTE") {
            //ajustar rota gerente
            this.router.navigate([""])
          } else if (usu.perfil == "CLIENTE") {
            this.router.navigate(['/clientes']);
          }
        }
        else {
          this.message = "Usuário/Senha inválidos.";
        }
      });
    }
    this.loading = false;
  }

  //parte do cadastro
  @ViewChild('formCliente') formCliente!: NgForm;
  cliente!: Cliente;

  //--------- Cadastrooooooo
  //OBS:: no html em senha eu coloquei login.senha em vez de cliente.senha>>verificar o correto
  // Para inserir:
  // - Verifica se o formulário é válido, se não deu nenhum erro
  // - Se OK
  // . Chama o inserir do Service, this.pessoa está preenchida (binding)
  // . Redireciona para /pessoas
  cadastrarCliente(): void {
    if (this.formCliente.form.valid) {
      this.cliente.endereco = this.endereco;
      this.cliente.status = false;
      this.cliente.conta = this.conta;
      this.cliente.conta.dataAprovOuReprov = undefined;
      this.cliente.conta.dataCriacao = new Date();
      this.cliente.conta.idGerente = undefined;
      this.cliente.conta.limite = undefined;
      this.cliente.conta.motivoReprovacao = "aguardando";
      this.cliente.conta.numeroConta = this.idConta+1;
      this.cliente.conta.saldo = undefined;

      this.clienteService.inserir(this.cliente).subscribe(cliente => {this.loading = false;
      this.router.navigate([''])
    });
    this.formCliente.reset();
    }
  }

}
