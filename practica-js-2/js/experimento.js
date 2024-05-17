//Ejercicio 1 */
let mensaje1 = 'Cual es tu nombre?'
let nombre = prompt(mensaje1)
console.log(nombre)

let mensaje2 = 'Cual es tu edad?'
let edad = prompt(mensaje2)
console.log(edad)

let mensaje3 = 'Te gustan los deportes?'
let fanDeportes = confirm(mensaje3)
console.log(fanDeportes)

let mensaje4 = `Muchas Gracias ${nombre} por responder nuestras preguntas`
let gracias = alert(mensaje4)
console.log(gracias)

let usuario ={
    nombre: nombre,
    edad: edad,
    deportistaProfesional: function(){
        if (fanDeportes == true) {
            console.log('Si, soy fan de los deportes')
        } else{
            console.log ('No soy tan fan aún de los deportes')
        }
    }
}

let deportistaProfesional2 = usuario.deportistaProfesional
console.log(deportistaProfesional2 ())



