// ### Problema 2
// Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos.
const numbers = [ 1, -4, 12, 0, -3, 29, -150];
var suma=0;
function positivos(numbers) {
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] >= 0){
            suma=suma+ numbers[i]
        }
    }
    return suma 
}
console.log("la suma de los números positivos es: "+positivos(numbers));

