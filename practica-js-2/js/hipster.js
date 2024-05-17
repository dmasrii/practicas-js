let mensaje = 'Ingrese su nacionalidad'
let nacionalidad = prompt(mensaje).toLowerCase()

let mensaje1 = 'Ingrese su profesion'
let profesion = prompt(mensaje1).toLowerCase()


let mensaje2 = 'Ingrese los kilometros caminados por dia'
let kilometros = prompt(mensaje2)

function filosofoHipster (nacionalidad1,profesion1,kmsRecorridos){
    if (nacionalidad == 'argentina' && profesion == 'musico' && kilometros == 2){
        console.log ('Soy un filósofo hipster')
    } else {
        console.log ('Aún no soy filósofo hipster')
    }
     
}

let filosofoHipster1 = filosofoHipster (nacionalidad,profesion,kilometros)
console.log (filosofoHipster1)
