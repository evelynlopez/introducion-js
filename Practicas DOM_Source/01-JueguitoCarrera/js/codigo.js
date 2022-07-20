let btnInicio= document.querySelector("#inicio");
let btnReiniciar= document.querySelector("#Reiniciar");
let ganador= document.querySelector("#ganador");
let player1= document.querySelector("#jugador1");
let player2= document.querySelector("#jugador2");
let player3= document.querySelector("#jugador3");

let pos1=0;
let pos2=0;
let pos3=0;

btnInicio.addEventListener('click',() =>{
    btnInicio.style.display ='none';
    iniciarCarrera();
})
btnReiniciar.addEventListener('click',() =>{
    btnReiniciar.style.display ='none';
    ganador.style.display="none"
    pos1=0
    player1.style.left =`${pos1}px`;
    pos2=0
    player2.style.left =`${pos2}px`;
    pos3=0
    player3.style.left =`${pos3}px`; 
    iniciarCarrera()
})

function iniciarCarrera(){
    let intervalo=setInterval(carrera,300);
    function carrera(){
        pos1+=Math.round(Math.random()*20);
        player1.style.left =`${pos1}px`;
        pos2+=Math.round(Math.random()*20);
        player2.style.left =`${pos2}px`;
        pos3+=Math.round(Math.random()*20);
        player3.style.left =`${pos3}px`;

        if(pos1>= 646){
            clearInterval(intervalo)
            ganador.style.display="block"
            ganador.innerText="gana rojo"
            btnReiniciar.style.display= "block"
        }else if(pos2>= 646){
            clearInterval(intervalo)
            ganador.style.display="block"
            ganador.innerText="gana azul"
            btnReiniciar.style.display= "block"
        }else if(pos3>= 646){
            clearInterval(intervalo)
            ganador.style.display="block"
            ganador.innerText="gana amarillo"
            btnReiniciar.style.display= "block"
        }
    }
}
