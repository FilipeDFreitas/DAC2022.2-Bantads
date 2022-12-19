import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Saque } from 'src/app/shared/models/saque.model';

@Injectable({
  providedIn: 'root'
})
export class SaqueService {
  private listaSaque : any [];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaSaque = [];
   }

   get saques() {
    return this.listaSaque;
   }

   adicionar(saque: Saque) : Observable<Saque>{
    this.hidratar(saque);
    this.tipo(saque);
    this.destino(saque)

    return this.httpClient.post<Saque>(this.url, saque);
   }

   todas() {
    return this.httpClient.get<Saque[]>(this.url);
   }

   private hidratar(saque: Saque){
    saque.data = new Date();
   }

   private tipo(saque: Saque){
    saque.tipo= "saque";
   }

   private destino(saque: Saque){
    saque.destino= "1";
   }

}
