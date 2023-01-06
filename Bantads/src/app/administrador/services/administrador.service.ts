import { Injectable } from '@angular/core';
import { Administrador, Gerente } from 'src/app/shared';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const LS_CHAVE: string = "contas";
@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  

  BASE_URL = "http://localhost:3000/gerentes/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

//
//RELACIONADO A GERENTE
//
  listarGerentes(): Observable<Gerente[]> {
    return this.httpClient.get<Gerente[]>(this.BASE_URL,
      this.httpOptions);
  }

  remover(id: number| undefined): Observable<Gerente> {
    return this.httpClient.delete<Gerente>(this.BASE_URL + id,
      this.httpOptions);
  }

  inserir(gerente: Gerente): Observable<Gerente> {
    return this.httpClient.post<Gerente>(this.BASE_URL,
      JSON.stringify(gerente),
      this.httpOptions);
  }
  buscarGerentePorId(id: number): Observable<Gerente> {
    return this.httpClient.get<Gerente>(this.BASE_URL + id,
      this.httpOptions);
  }
  atualizarGerente (gerente : Gerente): Observable<Gerente> {
    return this.httpClient.put<Gerente>(this.BASE_URL + gerente.id,
      JSON.stringify(gerente),
      this.httpOptions);
  }
//
//RELACIONADO A GERENTE
//

}
