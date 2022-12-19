export class Transferencia {
  constructor(
    public id?: number,
    public valor?: number,
    public destino?: string | number,
    public data?: Date
    ){
  }
}
