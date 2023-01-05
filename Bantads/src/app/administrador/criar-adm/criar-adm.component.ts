import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Gerente,Endereco } from 'src/app/shared';
import { AdministradorService } from '../services/administrador.service';

@Component({
  selector: 'app-criar-adm',
  templateUrl: './criar-adm.component.html',
  styleUrls: ['./criar-adm.component.css']
})
export class CriarAdmComponent implements OnInit {
  @ViewChild('formAdm') formAdm! : NgForm;
  gerente! : Gerente;
  endereco! :Endereco;

  constructor(
    private administradorService: AdministradorService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.gerente = new Gerente;
    this.endereco = new Endereco;
  }
  inserir(): void{
    if(this.formAdm.form.valid) {
      this.gerente.endereco = this.endereco;
      this.administradorService.inserir(this.gerente);
      this.router.navigate( ["/adm/lista"] );
    }
  }

}
