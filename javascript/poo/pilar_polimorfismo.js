class Animal {
    constructor(cor, tamanhoCm, peso) {
        this.cor = cor
        this.tamanhoCm = tamanhoCm
        this.peso = peso
    }

    dormir() {
        console.log('Dorme')
    }

}

class Passaro extends Animal {
    constructor(bico, cor, tamanhoCm, peso) {
        super(cor, tamanhoCm, peso)
        this.bico = bico
    }
    
    voar() {
        console.log('Voa')
    }

}

class Papagaio extends Passaro{
    constructor(sabeFalar, cor, tamanhoCm, peso) {
        super('Médio', cor, tamanhoCm, peso)
        this.sabeFalar = sabeFalar
    }

    falar() {
        console.log('Fala')
    }

}

class Avestruz extends Passaro {
    constructor() {
        super('Grande', 'Branco e preto', 250, 15000)
    }

    enterrarCabeca() {
        console.log('Enterra')
    }

    voar() {
        console.log('Não voa')
    }
}

let papagaio = new Papagaio(true,'Verde', 30, 350)
papagaio.voar()

let avestruz = new Avestruz()
avestruz.enterrarCabeca()
avestruz.voar()