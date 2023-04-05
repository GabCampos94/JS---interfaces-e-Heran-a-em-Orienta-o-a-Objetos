import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{ //extend serve para herdar propriedades de outra classe criada.
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        super(0, cliente, agencia)//referencia uma classe superior.
        ContaCorrente.numeroDeContas += 1;
   }

   sacar(valor){  //sobreescrevendo o comportamento de sacar do arquivo conta.js.
      let taxa = 1.1;
      return this._sacar(valor, taxa);
   }
}
    

/*para criar o arquivo de módulo package.json -> No node digitar npm init 
e no arquivo gerado adicionar a linha "type": "module".*/