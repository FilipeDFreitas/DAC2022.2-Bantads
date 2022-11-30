import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import { Cliente, Endereco, Login } from 'src/app/shared';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  @ViewChild('formLogin') formLogin! : NgForm;
  login: Login = new Login();
  loading: boolean = false;
  message!: string;
  
  constructor(
    private loginService: LoginService, 
    private clienteService: ClienteService, // parte do cadastro
    private router: Router,
    private route: ActivatedRoute) { 
      if (this.loginService.usuarioLogado) {
        this.router.navigate( ["/home"] );
      } 
    }


  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
    this.message = params['error'];
    });
    // Cadastro - Cria uma instância vazia, para não dar erro de referência
    this.cliente = new Cliente(new Endereco());
  }

  logar(): void {
    this.loading = true;
    if (this.formLogin.form.valid) {
      this.loginService.login(this.login).subscribe((usu) => {
        if (usu != null) {
          this.loginService.usuarioLogado = usu;
          this.loading = false;
          this.router.navigate( ["/home"] ); 
        }
        else {
          this.message = "Usuário/Senha inválidos.";
        }
      });
    }
    this.loading = false;
  }

  //parte do cadastro
  @ViewChild('formCliente') formCliente! : NgForm;
  cliente! : Cliente;

   //--------- Cadastrooooooo
   //OBS:: no html em senha eu coloquei login.senha em vez de cliente.senha>>verificar o correto
  // Para inserir:
  // - Verifica se o formulário é válido, se não deu nenhum erro
  // - Se OK
  // . Chama o inserir do Service, this.pessoa está preenchida (binding)
  // . Redireciona para /pessoas
  inserir(): void {
    if (this.formCliente.form.valid) {
      this.clienteService.inserir(this.cliente);
      this.router.navigate( ["/home"] );
    }
  }

}