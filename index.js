import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente('Gabriel', 11122233344, 987654321);
//cliente1.nome = 'Gabriel'
const cliente2 = new Cliente("Luisa", 5556667788, 654123897);
//cliente1.nome = 'Luisa'

const contaCorrCliente1 = new ContaCorrente(cliente1, 1001);
//contaCorrenteCliente1.agencia = 1001;
//contaCorrenteCliente1.cliente = cliente1;
const contaCorrCliente2 = new ContaCorrente(cliente2, 1002);
//contaCorrenteCliente2.cliente = cliente2;
//contaCorrenteCliente2.agencia = ;

contaCorrCliente1.depositar(500); 
contaCorrCliente1.sacar(100);

const contaPoupanca1 = new ContaPoupanca(50, contaCorrCliente1.cliente, 1001);

//Testes
//console.log(contaPoupanca1);
//console.log(contaCorrCliente1);
//console.log(cliente1);
//contaCorrenteCliente1.depositar(500);
//console.log(contaCorrCliente1);
//contaCorrCliente1.transferir(300, contaCorrCliente2);
//const valorSacado = contaCorrCliente1.sacar(50);
//console.log(valorSacado);
//contaCorrenteCliente1.depositar(200); 
//contaCorrenteCliente1.depositar(-1); // teste conta saque de valor negativo.
//const conta = new Conta(0, cliente1, 1001);


