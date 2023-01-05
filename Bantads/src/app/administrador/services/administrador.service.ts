import { Injectable } from '@angular/core';
import { Gerente } from 'src/app/shared';
const LS_CHAVE: string = "contas";
@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  

  constructor() { }

//
//RELACIONADO A GERENTE
//
  listarGerentes(): Gerente[] {
    const gerentes = localStorage[LS_CHAVE];

    return gerentes ? JSON.parse(gerentes) : [];
  }

  remover(id: number):void{
    let gerentes: Gerente[] = this.listarGerentes();
    gerentes = gerentes.filter(gerente => gerente.id !== id);

    localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  }

  inserir(gerente: Gerente) {
    const gerentes = this.listarGerentes();

    gerente.id = new Date().getTime();

    gerentes.push(gerente);

    localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  }
  buscarGerentePorId(id: number): Gerente | undefined {
    const pessoas: Gerente[] = this.listarGerentes();
    return pessoas.find(pessoa => pessoa.id === id);
  }
  atualizarGerente (gerente : Gerente): void{
    const gerentes = this.listarGerentes();
    gerentes.forEach((obj, index, objs) =>{
      if (gerente.id === obj.id){
        objs[index] = gerente
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(gerentes);
  }
//
//RELACIONADO A GERENTE
//

}
