let num1=prompt("ingresa primer numero")
let num2=prompt("ingresa segundo numero")
let num3=prompt("ingresa tercer numero")
if (num1 == num2 && num2 == num3){
    console.log("los numeros son iguales")
}else if(num1> num2 && num1 > num3){
    console.log("el numero "+ num1 +" es el numero ingresado mayor") 
}else if(num2> num1 && num2 > num3){
    console.log("el numero "+ num2 +" es el numero ingresado mayor") 
}else if(num1 == num2 && num1> num3){
    console.log("el numero "+ num1 +" y el num "+num2+" son los numeros mayores") 
}else if(num1 == num3 && num1> num2){
    console.log("el numero "+ num1 +" y el num "+num3+" son los numeros mayores") 
}else if(num2 == num3 && num2> num1){
    console.log("el numero "+ num2 +" y el num "+num3+" son los numeros mayores") 
}else if(num1 == num3 && num1> num2){
    console.log("el numero "+ num2 +" es el numero ingresado mayor") 
}else{
    console.log("el numero "+ num3 +" es el numero ingresado mayor")  
}