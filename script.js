import Pizza from "./Pizza.js"

const calcular = document.getElementById('calcular')
const area = document.getElementById('area')
const volume = document.getElementById('volume')
console.log(calcular,area,volume)

calcular.addEventListener('click', ()=>{
    const raio = Number(document.getElementById('raio').value)
    console.log(raio)
    const espessura = Number(document.getElementById('espessura').value)
    console.log(espessura)

    const pizza = new Pizza(raio,espessura)

    const areaCalc = pizza.calcularArea()
    const volumeCalc= pizza.calcularVolume()

    console.log('Area = ',areaCalc)
    console.log('Volume = ',volumeCalc)

    area.innerHTML = `${areaCalc} cm²`
    volume.innerHTML = `${volumeCalc} cm³`
})

