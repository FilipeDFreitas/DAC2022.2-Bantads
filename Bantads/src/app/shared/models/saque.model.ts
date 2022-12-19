import { Cliente } from "./cliente.model";

export class Saque {
  constructor(
    public cliente?: Cliente,
    public id?: number,
    public valor?: number,
    public destino?: string | number,
    public data?: Date,
    public tipo?: string,
    ){
  }
}
