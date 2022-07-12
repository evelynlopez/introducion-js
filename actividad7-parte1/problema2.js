const arraySuma = ['1','2','3','4','10','11'];
let suma= 0;
console.log(suma(arraySuma))

function suma(arraySuma){
    for(var i=0; i<arraySuma.length; i++){
        suma = Number(suma) + Number(arraySuma[i]);
    }
    return suma;
}
