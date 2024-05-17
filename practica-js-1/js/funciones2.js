/* Funciones 2 */
/*Funciones de ejemplo para ejecutar */
function siguiente(numero) {
    return numero + 1;
  }
  
  const siguiente1 = siguiente (4)
  console.log (siguiente1)

  function doble(numero) {
    return 2 * numero;
  }
  const doble2 = doble (4)
  console.log (doble2)
  
  function siguienteDelDoble(numero) {
     return siguiente(doble(numero));
  }
  const siguienteDelDoble1 = siguienteDelDoble (4)
  console.log(siguienteDelDoble1)


/*Escribiendo las funciones */
function anterior (numeroParametro){
    return numeroParametro - 1
}
const anterior1 = anterior (4)
console.log(anterior1)


function triple (numerop1){
    return numerop1 * 3
}
const triple1 = triple (4)
console.log(triple1)

function anteriorDelTriple (numerop2){
    triple2 = numerop2 * 3
    return triple2 - 1
}
const anteriorDelTriple1 = anteriorDelTriple (4)
console.log(anteriorDelTriple1)