export abstract class Pessoa {
    private nome: string;
    private saldo: number;

    constructor(theName: string) {
        this.nome = theName;
        this.saldo = 0;
    }

    depositar(valor: number): void {
        console.log(`Feito um deposito para conta ${this.nome} de R$ ${valor} `);
        this.saldo += valor; 
    }

    sacar(valor: number): void {
        console.log(`Feito um saque da conta ${this.nome} de R$ ${valor} `);
        this.saldo -= valor; 
    }

    transferir(pessoaDestino: Pessoa, valor: number){
        this.saldo -= valor;
        pessoaDestino.saldo += valor;
        console.log(`Feito uma transferencia da conta ${this.nome} para a conta ${pessoaDestino.nome} no valor de R$ ${valor} `);
    }

    visualizarSaldo(): void{
        console.log(`A conta ${this.nome} tem o saldo de R$ ${this.saldo} `);
    }

}
