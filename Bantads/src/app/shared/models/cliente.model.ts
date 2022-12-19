import { Endereco } from "./endereco.model";
import { Conta } from "./conta.model";

export class Cliente {
    constructor(
        public endereco?: Endereco,
        public conta?: Conta,
        public id?: number,
        public nome?: string,
        public email?: string,
        public cpf?: number,
        public telefone?: number,
        public salario?: number,
        public status?: boolean,

        ){
    }
}
