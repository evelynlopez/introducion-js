let oracion="hola buen dia a todos"
let buscarPalabra="a"
console.log("se repite : "+buscandoPalabras(oracion,buscarPalabra));

function buscandoPalabras(oracion,buscarPalabra){
    var array= oracion.split("") 
    let contador = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] == buscarPalabra){
            contador= Number(contador)+1
        }
    }
    return contador      
}