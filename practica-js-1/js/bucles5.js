/*Ejercicio 5 Bucles - Recorriendo arrays de objetos literales */
let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

for (let i=0;i<got.length;i++){
    let personas = got [i]
    console.log(`hola ${personas.nombre} ${personas.apellido} criatura viajera!`)
}

for (let i = 0; i<got.length;i++){
    let ciudades = got [i]
    let personas = got [i]
    console.log(`soy ${personas.nombre} ${personas.apellido} de la ciudad ${ciudades.ciudad}`)
}

