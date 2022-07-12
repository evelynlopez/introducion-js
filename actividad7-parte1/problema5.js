console.log("el numero mayor es: "+ mayor())
function mayor(){
    const arr = [45,56,32,98,1000,5,23]
    let numMayor = 0
    for (let i = 0; i < arr.length; i++){
        if(numMayor < arr[i]){
            numMayor= arr[i]
        }
    }
    return numMayor
}