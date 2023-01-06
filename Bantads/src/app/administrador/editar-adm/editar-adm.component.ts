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
    this.endereco = new Endereco;
    this.endereco.cidade= "caralho";
    let id= +this.route.snapshot.params['id'];
    this.administradorService.buscarGerentePorId(id).subscribe(gerente => {
      this.gerente = gerente;
    });
    if(this.gerente.endereco !== undefined){
      this.endereco = this.gerente.endereco;
      
    }
    this.gerente.nome ="caralho";
    
    
  }
  editar(): void{
    if(this.formAdm.form.valid) {
      this.gerente.endereco = this.endereco;
      this.administradorService.atualizarGerente(this.gerente).subscribe(gerente => {
        this.router.navigate( ["/adm/lista"] );});
      
    }
  }
}
