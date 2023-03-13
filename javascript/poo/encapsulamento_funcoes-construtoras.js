let Carro2 = function() {
    //atributos privados
    var velocidadeMaxima = 180 
    var kmRodados = 0

    this.cor = 'Amarelo'
    this.modelo = "Chevette"
    this.velocidadeAtual = 0
    
    this.acelerar = function() {
        let velocidade = this.getVelocidadeAtual() + 50
        if(velocidade > velocidadeMaxima) {
            velocidade = velocidadeMaxima
        }
        this.setVelocidadeAtual(velocidade)

        setKmRodados(0.07)
        console.log(kmRodados)
    }

    this.getVelocidadeAtual = function() {
        return this.velocidadeAtual
    }

    this.setVelocidadeAtual = function(velocidadeAtual) {
        this.velocidadeAtual = velocidadeAtual
    }

    var setKmRodados = function(km) {
        kmRodados += km
    }
}

let carro2 = new Carro2()

console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
carro2.acelerar()
console.log(carro2.velocidadeAtual)
// carro.velocidadeMaxima = 280
carro2.acelerar()
console.log(carro2.velocidadeAtual)

console.log(carro2)
