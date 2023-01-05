import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gerente,Endereco } from 'src/app/shared';
import { AdministradorService } from '../services/administrador.service';

@Component({
  selector: 'app-editar-adm',
  templateUrl: './editar-adm.component.html',
  styleUrls: ['./editar-adm.component.css']
})
export class EditarAdmComponent implements OnInit {
  @ViewChild('formAdm') formAdm! : NgForm;
  gerente! : Gerente;
  endereco! :Endereco;

  constructor(
    private administradorService: AdministradorService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    let id= +this.route.snapshot.params['id'];
    const res = this.administradorService.buscarGerentePorId(id);
    if (res !== undefined){
      this.gerente = res;

      if (this.gerente.endereco !== undefined)
        this.endereco = this.gerente.endereco;
      else
      this.endereco = new Endereco;
    }
    else
      throw new Error ("Gerente não encontrado: id + "+ id);
    
  }
  editar(): void{
    if(this.formAdm.form.valid) {
      this.gerente.endereco = this.endereco;
      this.administradorService.atualizarGerente(this.gerente);
      this.router.navigate( ["/adm/lista"] );
    }
  }
}
