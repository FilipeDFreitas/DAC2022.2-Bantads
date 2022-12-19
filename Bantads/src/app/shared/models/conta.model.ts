import { Cliente } from "./cliente.model";
import { Gerente } from "./gerente.model";

export class Conta {
    constructor(
        public gerente?: Gerente,
        public numeroConta?: number,
        public dataCriacao?: Date,
        public limite?: number,
        public motivoReprovacao?: string,
        public dataAprovOuReprov?: Date,
        public saldo?: number){
    }
}
