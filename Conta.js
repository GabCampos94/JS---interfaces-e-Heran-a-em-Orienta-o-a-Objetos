//Classe Abstrata - Serve para ser herdada e não instanciada (criada diretamente)
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

        if(this.constructor == Conta){
            throw new Error("Voce não deveria instanciar um obj do tipo conta diretamente.");
        }
    }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }    
    }

    get cliente() {
        return this._cliente;
    }

    // #saldo = 0. Em aprovação, o # serve para transformar o atributo em privado
    //_saldo = 0;  /* _ antes do atributo serve para mostrar que é privado. 
   
   get saldo(){
        return this._saldo;
   }

    //Métodos
    sacar(valor){ //Méto do abstrato.
        throw new Error("Métodos sacar é abstrato, e met abstratos devem ser sobrescritos pelas classes filhas.");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            
        }
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
