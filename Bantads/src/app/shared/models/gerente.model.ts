import { Endereco } from "./endereco.model";

export class Gerente {
  constructor(
    public endereco?: Endereco,
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
