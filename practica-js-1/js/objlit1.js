/*Objetos Iterables 1 */
/*Ejercicio 1 */

let misDatos = {
    nombre: 'Delfina',
    apellido: 'Masri',
    edad: 19,
    dni: 46214085,
    comidasFavoritas: ['Sushi', 'Milanesas', 'Fideos'],
    saludar: function(){
        return (`Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Mi primer comida favorita es ${this.comidasFavoritas [0]}`)
        }
    }

console.log (misDatos.saludar())

