var numero = prompt("ingresa un numero");
var n = 1;
while (n <= numero) 
	{ 
        if(n % 5 == 0){
            console.log("el numero "+ n + " es un multiplo de 5" )
        }
        n++;
	}