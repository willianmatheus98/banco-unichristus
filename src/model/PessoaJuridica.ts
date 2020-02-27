import { Pessoa } from "./Pessoa";

export class PessoaJuridica extends Pessoa{
    private cnpj: string;

    constructor(nome: string, cnpj: string) {
        super(nome);
        this.cnpj = cnpj;
    }
} 