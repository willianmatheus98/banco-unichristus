import { Pessoa } from "./Pessoa";

export class PessoaFisica extends Pessoa {
    private cpf: string;
    private idade: number;

    constructor(nome: string, cpf: string, idade?: number) {
        super(nome);
        this.cpf = cpf;
        this.idade = idade;
    }
}
