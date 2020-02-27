"use strict";
exports.__esModule = true;
var Pessoa = /** @class */ (function () {
    function Pessoa(theName) {
        this.nome = theName;
        this.saldo = 0;
    }
    Pessoa.prototype.depositar = function (valor) {
        console.log("Feito um deposito para conta " + this.nome + " de R$ " + valor + " ");
        this.saldo += valor;
    };
    Pessoa.prototype.sacar = function (valor) {
        console.log("Feito um saque da conta " + this.nome + " de R$ " + valor + " ");
        this.saldo -= valor;
    };
    Pessoa.prototype.transferir = function (pessoaDestino, valor) {
        this.saldo -= valor;
        pessoaDestino.saldo += valor;
        console.log("Feito uma transferencia da conta " + this.nome + " para a conta " + pessoaDestino.nome + " no valor de R$ " + valor + " ");
    };
    Pessoa.prototype.visualizarSaldo = function () {
        console.log("A conta " + this.nome + " tem o saldo de R$ " + this.saldo + " ");
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
