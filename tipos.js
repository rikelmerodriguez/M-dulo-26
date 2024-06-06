class Carro extends Veiculo {
    constructor(marca, modelo, ano, numPortas) {
        super(marca, modelo, ano);
        this.numPortas = numPortas;
    }

    descricao() {
        return `${super.descricao()} com ${this.numPortas} portas`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, tipo) {
        super(marca, modelo, ano);
        this.tipo = tipo;
    }

    descricao() {
        return `${super.descricao()} do tipo ${this.tipo}`;
    }
}
