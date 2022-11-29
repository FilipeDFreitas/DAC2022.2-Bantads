import { Endereco } from "./endereco.model";

export class Cliente {
    constructor(
        public id: number,
        public nome: string,
        public email: string,
        public cpf: number,
        public telefone: number,
        public salario: number,
        public endereco: Endereco,
        public senha: string
        ){
    }
}
