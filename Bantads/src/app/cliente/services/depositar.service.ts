import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depositar } from 'src/app/shared/models/depositar.model';

@Injectable({
  providedIn: 'root'
})
export class DepositarService {
  private listaDepositar : any [];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaDepositar = [];
   }

   get depositos() {
    return this.listaDepositar;
   }

   adicionar(depositar: Depositar) : Observable<Depositar>{
    this.hidratar(depositar);
    this.tipo(depositar);

    return this.httpClient.post<Depositar>(this.url, depositar);
   }

   todas() {
    return this.httpClient.get<Depositar[]>(this.url);
   }

   private hidratar(depositar: Depositar){
    depositar.data = new Date();
   }

   private tipo(depositar: Depositar){
    depositar.tipo= "deposito";
   }

}
