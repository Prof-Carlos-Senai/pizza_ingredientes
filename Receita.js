class Receita{
    constructor(farinha, agua, azeite, sal, fermento, acucar, volume){
        this.farinha = farinha
        this.agua = agua
        this.azeite = azeite
        this.sal = sal
        this.fermento = fermento
        this.sal = sal
        this.acucar = acucar
        this.volume = volume
        this.ovo = 56
        this.volumePadrao = 353.43
    }

    calcularFator(){
        return this.volume / this.volumePadrao
    }

    calcularIngredientes(){
        const fator = this.calcularFator()

        return {
            farinha: (this.farinha * fator).toFixed(2),
            agua: (this.agua * fator).toFixed(2),
            azeite: (this.azeite * fator).toFixed(2),
            sal: (this.sal * fator).toFixed(2),
            fermento: (this.fermento * fator).toFixed(2),
            acucar: (this.acucar * fator).toFixed(2),
            ovo: this.ovo.toFixed(2)
        }
    }
}

export default Receita