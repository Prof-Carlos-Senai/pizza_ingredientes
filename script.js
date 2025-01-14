import Pizza from "./Pizza.js"
import Receita from "./Receita.js"

const calcular = document.getElementById('calcular')
const area = document.getElementById('area')
const volume = document.getElementById('volume')
const farinha = document.getElementById('farinha')
const agua = document.getElementById('agua')
const azeite = document.getElementById('azeite')
const sal = document.getElementById('sal')
const fermento = document.getElementById('fermento')
const acucar = document.getElementById('acucar')
const ovo = document.getElementById('ovo')

console.log(calcular,area,volume,farinha,agua,azeite,sal,fermento,acucar,ovo)

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

    const receitaPadrao = new Receita(189, 106, 4, 3.8, 3.1, 2.1, volumeCalc)
    const ingredientes = receitaPadrao.calcularIngredientes()

    console.log('Ingredientes calculados:', ingredientes)

    farinha.innerHTML = `${ingredientes.farinha} g`
    agua.innerHTML = `${ingredientes.agua} ml`
    azeite.innerHTML = `${ingredientes.azeite} ml`
    sal.innerHTML = `${ingredientes.sal} g`
    fermento.innerHTML = `${ingredientes.fermento} g`
    acucar.innerHTML = `${ingredientes.acucar} g`
    ovo.innerHTML = `${ingredientes.ovo} g`

})

