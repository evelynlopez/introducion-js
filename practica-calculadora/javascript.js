const pantalla=document.getElementById("pantalla")
const borraroperacion = document.getElementById("borraroperacion")
const coma = document.getElementById("coma")
const buttonsumar = document.getElementById("sumar")
const buttonrestar = document.getElementById("restar")
const buttondividir = document.getElementById("dividir")
const buttonmultiplicar = document.getElementById("multiplicar")
const btnRespuesta= document.getElementById("respuesta")
const inputRespuesta= document.getElementById("valor2")
const inputValorUno = document.getElementById("valor1")
var lastOperation=document.getElementById("operacion-final")

function numero(number){
    pantalla.textContent = pantalla.textContent.concat(number);
}
borraroperacion.addEventListener("click", function(){
    pantalla.textContent = pantalla.textContent="";
    inputValorUno.value=""
    inputRespuesta.value=""
});

buttonsumar.addEventListener("click", function(){
    if(inputValorUno.value == ''){
        inputValorUno.value= pantalla.textContent
        inputRespuesta.value= pantalla.textContent
    }else{
        inputValorUno.value= pantalla.textContent
        inputRespuesta.value = Number(inputRespuesta.value) + Number(inputValorUno.value)
    }
    lastOperation.value ="+"
    pantalla.textContent = ""
});
buttonrestar.addEventListener("click", function(){
    if(inputValorUno.value == ''){
        inputValorUno.value= pantalla.textContent
        inputRespuesta.value= pantalla.textContent
    }else{
        inputValorUno.value= pantalla.textContent
        inputRespuesta.value = Number(inputRespuesta.value) - Number(inputValorUno.value)        
    }
    lastOperation.value ="-"
    pantalla.textContent = ""
});
buttonmultiplicar.addEventListener("click", function(){
    if(inputValorUno.value == ''){
        inputValorUno.value= pantalla.textContent
        inputRespuesta.value= pantalla.textContent
    }else{
        inputValorUno.value= pantalla.textContent
        inputRespuesta.value = Number(inputRespuesta.value) * Number(inputValorUno.value)        
    }
    lastOperation.value ="x"
    pantalla.textContent = ""
});
buttondividir.addEventListener("click", function(){
    if(inputValorUno.value == ''){
        inputValorUno.value= pantalla.textContent
        inputRespuesta.value= pantalla.textContent
    }else{
        console.log("entrodividir")
        inputValorUno.value= pantalla.textContent
        inputRespuesta.value = Number(inputRespuesta.value) / Number(inputValorUno.value)
    }
    lastOperation.value ="/"
    pantalla.textContent = ""
});

btnRespuesta.addEventListener("click", function(){
    const operacionfinal=lastOperation.value
    console.log(operacionfinal)
    switch(operacionfinal){
        case  "+":
            pantalla.textContent= Number(inputRespuesta.value) + Number(pantalla.textContent)  
        break;
        case  "-":
            pantalla.textContent= Number(inputRespuesta.value) - Number(pantalla.textContent)  
        break;
        case  "x":
            pantalla.textContent= Number(inputRespuesta.value) * Number(pantalla.textContent)  
        break;
        case  "/":
            pantalla.textContent= Number(inputRespuesta.value) / Number(pantalla.textContent)  
        break;
        default:
            console.log("no hay una expresion final");
    }
    inputValorUno.value=""
    inputRespuesta.value=""
});