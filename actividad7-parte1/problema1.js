let oracion="hola buen dia a todos"
let buscarPalabra='maria'
buscandoPalabras(oracion,buscarPalabra);


function buscandoPalabras(oracion,buscarPalabra){
    var array= oracion.split(' ');
    console.log(array)
    if(array.indexOf(buscarPalabra) != -1){
        return true
    }else{
        return false
    }
}