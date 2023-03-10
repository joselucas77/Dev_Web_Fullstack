class Tv {
    constructor() {
        this._relacaoCanais = [2,4,7,10]
        this._canalAtivo = 5
        this._volume = 50
    }

    //getters setters
    get canalAtivo() {
        return this._canalAtivo
    }

    set canalAtivo(canal) {
        if(this._relacaoCanais.indexOf(canal) !== -1) {
            this._canalAtivo = canal
        }
    }

}

let tv = new Tv()

tv.canalAtivo = 3
console.log(tv.canalAtivo)
