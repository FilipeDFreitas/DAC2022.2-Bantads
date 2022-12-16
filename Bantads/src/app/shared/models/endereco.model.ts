export class Endereco {
    constructor(
        public id?: number,
        public logradouro?: string,
        public numero?: number,
        public cep?: number,
        public cidade?: string,
        public estado?: string,
        public complemento?: string){
        }
}
