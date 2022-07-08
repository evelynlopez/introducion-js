let jugador1 = prompt("jugador 1 elige:(piedra, papel o tijera)")
let jugador2 = prompt("jugador 2 elige:(piedra, papel o tijera)")

if(jugador1 == jugador2){
    console.log("ganador: Empate");
}else if(jugador1 == "piedra" && jugador2 != "papel"){
    console.log("ganador: Jugador1")
}else if(jugador1 == "papel" && jugador2 != "tijera"){
    console.log("ganador: Jugador1")
}else if(jugador1 == "tijera" && jugador2 != "piedra"){
    console.log("ganador: Jugador1")
}else if(jugador2 == "piedra" && jugador1 =="papel"){
    console.log("ganador: Jugador1")
}else if(jugador1 == "papel" && jugador2 == "tijera"){
    console.log("ganador: Jugador2")
}else{
    console.log("ganador: Jugador2")
}