class Veiculo {
    constructor(marca, modelo, ano) {
        if (new.target === Veiculo) {
            throw new TypeError("Não é possível instanciar a classe abstrata Veiculo diretamente.");
        }
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descricao() {
        return `${this.ano} ${this.marca} ${this.modelo}`;
    }
}
