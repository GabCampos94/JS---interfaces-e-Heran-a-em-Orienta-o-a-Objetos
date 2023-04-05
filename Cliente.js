export class Cliente{
    //nome;
    //_cpf; não precisa, já está declarado no construtor.

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, rg){
        this.nome = nome;
        this._cpf = cpf;
        this._rg = rg;
    }

}