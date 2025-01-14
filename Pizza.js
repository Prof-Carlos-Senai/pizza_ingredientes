class Pizza{
    constructor(raio,espessura){
        this.raio = raio
        this.espessura = espessura
    }

    calcularArea(){
        const area = Math.PI * this.raio * this.raio
        return area.toFixed(2)
    }

    calcularVolume(){
        const area = this.calcularArea()
        const volume = area * this.espessura
        return volume.toFixed(2)
    }
}

export default Pizza