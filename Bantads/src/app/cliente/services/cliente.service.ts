import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/shared';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  BASE_URL = "http://localhost:3000/clientes/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  listarTodos(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.BASE_URL,
      this.httpOptions);
  }

  buscarPorId(id: number): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.BASE_URL + id,
      this.httpOptions);
  }

  buscarPorEmail(email: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(this.BASE_URL + email,
      this.httpOptions);
  }

  inserir(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.BASE_URL,
      JSON.stringify(cliente),
      this.httpOptions);
  }
  remover(id: number): Observable<Cliente> {
    return this.httpClient.delete<Cliente>(this.BASE_URL + id,
      this.httpOptions);
  }
  alterar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(this.BASE_URL + cliente.id,
      JSON.stringify(cliente),
      this.httpOptions);
  }

}
