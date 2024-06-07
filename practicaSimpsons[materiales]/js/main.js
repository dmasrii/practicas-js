// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector('#titulo');
    titulo.addEventListener ('mouseover',function(){
        let nombre = prompt ('¿CÓMO TE LLAMÁS?')
        if (nombre == false) {
            let saludo = document.querySelector ('#saludo')
            saludo.innerHTML = 'Bienvenid@ usuario'
            titulo.style.display = 'none'
        }else{
            let saludo = document.querySelector('#saludo');
            saludo.innerHTML = `Bienvenid@ ${nombre}`
            titulo.style.display = 'none'
            saludo.style.textTransform = 'upperCase'
            }
        
        

    let span1 = document.querySelector ('span')
    span1.style.display = 'block' 
    span1.addEventListener('click', function(){
        if (span1) {
            let bienvenida = document.querySelector ('.bienvenida');
             bienvenida.style.display = 'none';

             let personajes = document.querySelector ('.personajes');
             personajes.style.display = 'flex';
        }
        
    
    let bart = document.querySelector('#bart')
    bart.addEventListener ('click', function() {
        bart.style.display = ('personajeSeleccionado') })
        

        let lisa = document.querySelector('#lisa')
        lisa.addEventListener ('dblclick', function() {})
    
        let homero = document.querySelector('#homero')
        homero.addEventListener ('click', function() {})
    
        let marge = document.querySelector('#amarge')
        marge.addEventListener ('mouseover', function() {})
    
        let maggie = document.querySelector('#maggie')
        maggie.addEventListener ('mouseover', function() {})
    
        let milhouse = document.querySelector('#milhouse')
        milhouse.addEventListener ('click', function() {})
    
        let burns = document.querySelector('#burns')
        burns.addEventListener ('mouseover', function() {})
    
        let bobPatinio = document.querySelector('#bobPatinio')
        bobPatinio.addEventListener ('dblclick', function() {})
    
        let flanders = document.querySelector('#bflanders')
        flanders.addEventListener ('mouseover', function() {})
    
        let duffman = document.querySelector('#duffman')
        duffman.addEventListener ('dblclick', function() {})
    
    })
    

    
    

    })
})
 

   
    
    
      
        
        
 
    
 
 
