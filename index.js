import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Conta } from "./Conta/Conta.js";
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

//const cliente1 = new Cliente('Gabriel', 11122233344);
//cliente1.nome = 'Gabriel'
//const cliente2 = new Cliente("Luisa", 5556667788);
//cliente1.nome = 'Luisa'
//const contaCorrCliente1 = new ContaCorrente(cliente1, 1001);
//contaCorrenteCliente1.agencia = 1001;
//contaCorrenteCliente1.cliente = cliente1;
//const contaCorrCliente2 = new ContaCorrente(cliente2, 1002);
//contaCorrenteCliente2.cliente = cliente2;
//contaCorrenteCliente2.agencia = ;
//const contaPoupanca1 = new ContaPoupanca(50, contaCorrCliente1.cliente, 1001);

const diretor = new Diretor("Gabriel2", 10000, 12365465455);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Raphael", 5000, 36985214728);
gerente.cadastrarSenha("123");
const cliente3 = new Cliente("Naty", 96385232147, "655");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123"); // teste de autenticação
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123"); // teste de autenticação
const clienteEstaLogado = SistemaAutenticacao.login(cliente3, "555");// teste de autenticação

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado) // resultado do teste de autenticação


//-------------Testes-------------------
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
//contaCorrCliente1.depositar(500); 
//contaCorrCliente1.sacar(100);




