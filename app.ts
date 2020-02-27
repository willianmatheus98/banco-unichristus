import { PessoaJuridica } from "./src/model/PessoaJuridica";
import { PessoaFisica } from "./src/model/PessoaFisica";

let contaUnichristus = new PessoaJuridica('unichristus', '1198198165165');
let contaAluno1 = new PessoaFisica("Willian", '1326565165');
let contaAluno2 = new PessoaFisica("Matheus", '9181919819', 19);

contaUnichristus.visualizarSaldo();
contaUnichristus.depositar(15000);
contaUnichristus.visualizarSaldo();
contaUnichristus.transferir(contaAluno1, 1597);
contaUnichristus.transferir(contaAluno2, 6587);
contaUnichristus.sacar(1001);
contaAluno1.visualizarSaldo();
contaAluno2.visualizarSaldo();
contaUnichristus.visualizarSaldo();
