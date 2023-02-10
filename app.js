//solución exámen de Lógica de la programación

let valorProducto = parseInt(prompt("¿cuál es el valor del producto? "))
let cantidad = parseInt(prompt("¿qué cantidad desea llevar?"))
let total = valorProducto * cantidad
let iva = total * 0.19
let descuento
if (valorProducto < 100000) {
    descuento = total * 0.10
} else {
    descuento = total * 0.15
}
let totalBruto = total + iva - descuento 
alert(`Valor producto = $${valorProducto}`)
alert(`$${valorProducto} * ${cantidad} = $${total}`)
alert(`IVA = $${iva}`)
alert(`Descuento = $${descuento}`)
alert(`Total bruto = $${totalBruto}`)