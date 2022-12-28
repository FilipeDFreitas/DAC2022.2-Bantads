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

//
//RELACIONADO A GERENTE
//

}
