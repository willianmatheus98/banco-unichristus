"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Pessoa_1 = require("./Pessoa");
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(nome, cpf, idade) {
        var _this = _super.call(this, nome) || this;
        _this.cpf = cpf;
        _this.idade = idade;
        return _this;
    }
    return PessoaFisica;
}(Pessoa_1.Pessoa));
exports.PessoaFisica = PessoaFisica;
