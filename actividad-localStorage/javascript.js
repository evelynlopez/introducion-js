let inicioSesion = document.getElementById("inicioSesion");
let user=[
    {
        username:"eve98",
        password:"coppel123"
    },
    {
        username:"pinedo12",
        password:"coppel123"
    }
];
inicioSesion.addEventListener('click',function(){
    let username =document.getElementById("user").value;
    let password = document.getElementById("password").value;
    for(var i = 0; i < user.length; i++){
        if(user[i].username == username && user[i].password == password){
            localStorage.setItem("sesionIniciada","si")
            localStorage.setItem('username',username);
            localStorage.setItem('pass',password);
            window.location.assign("sesioniniciada.html")            
        }else{
            localStorage.setItem("sesionIniciada","no")  
        }
    }
})

