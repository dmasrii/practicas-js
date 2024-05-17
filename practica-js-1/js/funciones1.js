/* Funciones 1 */
/*Ejericio 1*/ 
function areaRectangulo (altura,ancho){
    return altura * ancho
}

const area2 = areaRectangulo(15,4)
console.log(area2)

/*Ejericio 2*/ 
function areaTriangulo (base,altura){
    return (base * altura) /2
}
const areaT = areaTriangulo (20,40)
console.log(areaT)

/*Ejericio 3*/ 
function largoDelArray (array){
    return array.length
}

const comida = ['hamburguesa', 'pastas', 'pizza']
const largoComida = largoDelArray(comida)
console.log (largoComida)

/*Ejericio 4*/ 
function cantidadDeLetras (palabra){
    return palabra.length
}
const palabras = 'Delfina'
const lagroPalabra = cantidadDeLetras(palabras)
console.log(lagroPalabra)

/*Ejericio 5*/ 
function dolarHoy (precioPesosArgentinos){
    return precioPesosArgentinos * 1000
}
 const dolarHoy2 = dolarHoy (150)
 console.log(dolarHoy2)

 /*Ejericio 6*/ 
 function precioFinal (precioParametro){
    iva = 0.21;
    precioConIva = precioParametro * iva
    return precioConIva
 }
const precioFinal2 = precioFinal (1000)
console.log(precioFinal2)

/*Ejericio 7*/ 
function mitad (parametro){
    return parametro / 2
}
const mitad2 = mitad(4)
console.log (mitad2)

function diaSegunNumero (array2,numero){

}