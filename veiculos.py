class Carro(Veiculo):
    def __init__(self, marca, modelo, ano, num_portas):
        super().__init__(marca, modelo, ano)
        self.num_portas = num_portas

    def descricao(self):
        return f"{super().descricao()} com {self.num_portas} portas"

class Moto(Veiculo):
    def __init__(self, marca, modelo, ano, tipo):
        super().__init__(marca, modelo, ano)
        self.tipo = tipo

    def descricao(self):
        return f"{super().descricao()} do tipo {self.tipo}"
