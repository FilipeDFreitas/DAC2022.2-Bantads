import { Observable } from 'rxjs';
import { Transferencia } from '../../shared/models/Transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencia : any [];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
   }

   get transferencias() {
    return this.listaTransferencia;
   }

   adicionar(transferencia: Transferencia) : Observable<Transferencia>{
    this.hidratar(transferencia);
    this.tipo(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferencia);
   }

   todas() {
    return this.httpClient.get<Transferencia[]>(this.url);
   }

   private hidratar(transferencia: Transferencia){
    transferencia.data = new Date();
   }
   private tipo(transferencia: Transferencia){
    transferencia.tipo= "transferencia";
   }
}
