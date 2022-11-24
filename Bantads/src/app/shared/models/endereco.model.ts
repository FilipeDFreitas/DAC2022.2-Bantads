export class Endereco {
    constructor(
        public logradouro: string,
        public numero: number,
        public cep: number,
        public cidade: string,
        public estado: string,
        public complemento?: string){
        }
}
