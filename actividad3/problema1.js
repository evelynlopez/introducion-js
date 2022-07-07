let nombre=prompt("ingresa tu nombre")
let edad=prompt("ingresa tu edad")

if ((nombre == "Mario" || nombre == "Carlos") && edad >= 18){
    console.log("Bienvenido a la zona VIP")
}else if(edad >=18){
    console.log("Bienvenido a la discoteca")
}else{
    console.log("Lo siento no tienes la edad requerida para entrar:(") 
}