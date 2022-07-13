var valor1 = 2;
var valor2 = 4;
var respuesta
function multiply(valor1, valor2){
    if (valor1 && valor2){
        respuesta =Number(valor1) * Number(valor2);
    }else if(valor1){
        valorFaltante()
    }else if(valor2){
        valorFaltante2()
    }
    function valorFaltante(){
        let valor = prompt("ingrese un valor")
        respuesta =Number(valor1) * Number(valor);
        return respuesta
    }
    function valorFaltante2(){
        let valor = prompt("ingrese un valor")
        respuesta =Number(valor2) * Number(valor);
        return respuesta
    }
    return respuesta
}

console.log(multiply(valor1, valor2))