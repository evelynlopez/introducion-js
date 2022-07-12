const palabra1='madam'
validarPalindromo(palabra1)

function validarPalindromo(palabra1) {
    const nueva= palabra1.split("")
    const arr = nueva.reverse()
    const palabraReverse = arr.join("")
    if( palabra1 == palabraReverse){
        console.log(palabra1.concat(": es un palindromo"))
    }else{
        console.log(palabra1.concat(": no es un palindromo"))
    }
}

