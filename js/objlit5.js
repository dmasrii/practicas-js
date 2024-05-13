let ironMan ={
    nombre:"Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia:  100,
    getPoder: function (num){
        this.energia += num - 10 
        return `poder elegido de ${this.nombre}: ${this.poderes [1]}. Energia restante: ${this.energia}`
    }
}

console.log (ironMan.getPoder (0))



let hulk = {
    nombre2:"Hulk",
    equipo2: "Avengers",
    poderes2: ["Aplastar", "Gritar", "Golpear"],
    energia2:  100,
    getPoder: function (num){
        this.energia2 += num - 10 
        return `poder elegido de ${this.nombre2}: ${this.poderes2 [1]}. Energia restante: ${this.energia2}`
    }
}
console.log (hulk.getPoder (0))