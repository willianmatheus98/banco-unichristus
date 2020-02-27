# Banco unichristus


## Installation

For use the files, execute the commands below

```bash
npm install -g typescript
tsc app.ts
node app.js 
```

## Usage

```typescript
import { PessoaJuridica } from "./src/model/PessoaJuridica";
import { PessoaFisica } from "./src/model/PessoaFisica";

let contaUnichristus = new PessoaJuridica('unichristus', '1198198165165');

contaUnichristus.depositar(15000);
```