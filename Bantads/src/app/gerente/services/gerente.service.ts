import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/shared';

const LS_CHAVE: string = "contas";

@Injectable({
  providedIn: 'root'
})
export class GerenteService {

  constructor() { }

  listarClientes(): Cliente[]{
    const clientes = localStorage[LS_CHAVE];
    return clientes ? JSON.parse(clientes) : [];
  }





}
