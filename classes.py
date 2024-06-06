class Veiculo:
    def __init__(self, marca, modelo, ano):
        self.marca = marca
        self.modelo = modelo
        self.ano = ano
    
    def descricao(self):
        return f"{self.ano} {self.marca} {self.modelo}"
