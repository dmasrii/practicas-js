let mensaje = 'Ingrese un numero:'
let numero1 = prompt(mensaje)

let mensaje2 = 'Ingrese un numero:'
let numero2 = prompt(mensaje2)

function multiplicar (num1, num2) {
    resultado = numero1 * numero2
    console.log(`El resultado de multiplicar ${num1} y ${num2} es: ${this.resultado}`)
}

let multi = multiplicar (numero1, numero2)
console.log(multi)