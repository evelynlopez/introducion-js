let region = ''
let sexo=''
let embarazada=''
let gestacion =''
let añoNacimiento=''
let edad=prompt("edad")
if(edad >= 29){
    if(edad == 29){
        añoNacimiento=prompt("año de nacimiento")
        if(añoNacimiento== "1992"){
            continuarValidacion()
        }else{
            alert("lo sentimos no cumple con los requisitos solicitados")
        } 
    }else{
        continuarValidacion()
    }
}else if(edad >=18){
    region=prompt('eres region norte?')
    if(region == 'si' || region == 'SI'){
        continuarValidacion();
    }else{
        alert("lo sentimos no cumple con los requisitos solicitados")
    }
}else{
    alert("lo sentimos no cumple con los requisitos solicitados")
}

function continuarValidacion(){
    sexo=prompt('sexo: f(femenino), m(masculino)')
    if(sexo=='f' || sexo=='F'){
        embarazada=prompt("esta embarazada?")
        if(embarazada == 'si' || embarazada == 'SI'){
            gestacion=prompt("cuantas semanas de gestiacion tiene?")
            if(gestacion >9){
                alert("puede continuar con el registro")   
            }else{
                alert("lo sentimos no cumple con los requisitos solicitados")
            }
        }else{
            alert("puede continuar con el registro")  
        }
    }else{
        alert("puede continuar con el registro")
    } 
}
