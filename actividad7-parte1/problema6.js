let temperatura = "10"
let tipo = "f"  // f o c
console.log(convetidorTemperatura(temperatura,tipo))
function convetidorTemperatura(temperatura,tipo) {
    if(tipo == "c"){
        return (temperatura * 1.8) + 32;
    }else if (tipo == "f"){
        return (temperatura - 32) * 0.555555;
    }else{
        return "tipo no identificado"
    }
}