let bienvenido = 'Bienvenidos a mi sitio.'
let mensaje1 = alert (bienvenido)

let confirma = '¿Está seguro de querer avanzar?'
let mensaje2 = confirm (confirma)

if (mensaje2 == true) {
    document.querySelector(".saludo")
} else{
    document.querySelector(".saludo").innerText = "Lamentamos que no quieras continuar tu visita"
}
    
let nombres = 'Ingrese su nombre'
let mensaje3 = prompt (nombres)

document.querySelector (".bienve").innerText = `Bienvenido/a ${mensaje3}`

let edad = '¿Cuántos años tenés?'
let mensaje4 = prompt (edad)

let conteinerGeneral = document.querySelector(".conteiner-general")
if (mensaje4 < 18) {
    document.querySelector('.container-general').style.display = 'none';
    document.getElementById('accesoDenegado').style.display = 'block';
}


let progra = '¿Te gusta la programación?'
let mensaje5 = confirm (progra)

if (mensaje5 == true) {
    backgroundImg.innerHTML = '<img src="img/programmer.jpeg" alt="Programador">';
}else{
    backgroundImg.innerHTML = '<img src="img/gatito.jpeg" alt="Gatito">';
}

    
let avatar1 = "Por favor, ingresa la URL de una imagen para tu avatar:"
let mensaje6 = prompt (avatar1)
   if (mensaje6) {
       let avatar = document.querySelector('.avatar');
       avatar.src = avatar1;


       
       let pelicula = {
           nombre: prompt("Ingresa el nombre de tu película favorita:"),
           director: prompt("Ingresa el nombre del director de la película:"),
           duracion: parseInt(prompt("Ingresa la duración de la película en minutos:")),
           actor: prompt("Ingresa el nombre del actor principal de la película:")
       };


       
       if (pelicula.nombre && pelicula.director && pelicula.duracion && pelicula.actor) {
           document.getElementById("nombre").textContent = `Nombre: ${pelicula.nombre}`;
           document.getElementById("director").textContent = `Director: ${pelicula.director}`;
           document.getElementById("duracion").textContent = `Duración: ${pelicula.duracion} minutos`;
           document.getElementById("actor").textContent = `Actor Principal: ${pelicula.actor}`;
           document.getElementById("pelicula").style.display = "block";
       } else {
           alert("No se ingresaron todos los datos de la película. No se mostrarán los datos.");
       }
   } else {
       alert("No se ingresó ninguna URL. La imagen del avatar no se cambiará.");
   }





