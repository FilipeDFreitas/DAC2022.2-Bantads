import { Injectable } from '@angular/core';
import { Cliente, Gerente } from 'src/app/shared';


import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';





const LS_CHAVE: string = "contas";


@Injectable({
  providedIn: 'root'
})
export class GerenteService {
  
  

  BASE_URL = "http://localhost:3000/clientes/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  listarClientes(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.BASE_URL,
      this.httpOptions);
  }


  recusar(cliente: Cliente): Observable<Cliente> {

    console.log(cliente.conta!.motivoReprovacao);
      console.log("*******chegou no gerente");

    return this.httpClient.put<Cliente>
      (this.BASE_URL + cliente.id, JSON.stringify(cliente), this.httpOptions);
  }

  aprovar(cliente: Cliente): Observable<Cliente> {

    console.log(cliente.conta!.motivoReprovacao);
      console.log("*******chegou no gerente");

    return this.httpClient.put<Cliente>
      (this.BASE_URL + cliente.id, JSON.stringify(cliente), this.httpOptions);
  }


  // listarClientes(): Cliente[]{
  //   //const clientes = localStorage[LS_CHAVE];
  //   return clientes ? JSON.parse(clientes) : [];
  // }






}
