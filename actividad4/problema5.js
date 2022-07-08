let inicio=prompt("declara el inicio del rango de 10 numeros")
let final=prompt("declara el fin del rango de 10 numeros")
let rango=final-inicio

if(rango == 10){
    for (var i = 1; i <= 100; i++) {
        if(i >= inicio && i <= final){
            continue
        }else{
            console.log("numero: "+i)
        }
    }
}else if(rango>10){
    console.log("lo sentimos el rango de numeros es mayor a 10")
}else{
    console.log("lo sentimos el rango de numeros es menor a 10")   
}
