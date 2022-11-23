import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente.model';

const LS_CHAVE:  string =  "clientes";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  listarTodos(): Cliente[]{
    const clientes = localStorage[LS_CHAVE];
    //PRECISA DO CONDICIONAL POIS RETORNA UNDEFINED SE A CHAVE NAO EXISTE
    return clientes ? JSON.parse(clientes) : [];
  }

  inserir(cliente: Cliente):void{
    const clientes = this.listarTodos();

    cliente.id= new Date().getTime();

    clientes.push(cliente);

    localStorage[LS_CHAVE] = JSON.stringify(clientes);
  }

  buscarPorId(id:number): Cliente | undefined {
    const clientes: Cliente[] = this.listarTodos();

    return clientes.find(cliente => cliente.id == id);
  }

  atualizar(cliente: Cliente): void{
    const clientes:Cliente[] = this.listarTodos();

    clientes.forEach((obj, index, objs) => {
      if(cliente.id == obj.id){
        objs[index] = cliente
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(clientes);
  }

  remover(id:number): void{
    let clientes: Cliente[] = this.listarTodos();
    clientes = clientes.filter(cliente => cliente.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(clientes);
  }

}
