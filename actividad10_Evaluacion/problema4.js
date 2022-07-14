// Problema 4
// Escriba una función de JavaScript que tomará una serie de números almacenados
// y encontrará el segundo número más bajos y segundos más altos, respectivamente
const arr = [3,4,6,1,5,2,9,10,23,12]
function diferencia(arr){
    for( var i= 0 ; i < arr.length ; i++){
        array[i] =arr[i]
        counter=i
    }
    array.sort(function(a, b) {return a - b})
    return "segundo mas bajo:"+array[1] + " segundo mas alto:" + array[counter-1]  
  }
  console.log( diferencia(arr))