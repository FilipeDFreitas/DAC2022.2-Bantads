import { Cliente } from "./cliente.model";
import { Gerente } from "./gerente.model";

export class Conta {
    constructor(
        public idCliente: Cliente,
        public numeroConta: number,
        public dataCriacao: Date,
        public limite?: number,
        public idGerente?: Gerente,
        public motivoReprovacao?: string,
        public dataAprovOuReprov?: Date){
    }
}
