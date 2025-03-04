let loop
let tempoRestante = 1500;
document.getElementById('timer').innerHTML = formataTempo(tempoRestante);
tipo = 2;


window.onload = function(){
    setTimeout(function(){
        document.getElementById('load').style.display = "none";
        document.getElementById('content').style.display = "block";
    }, 2000)
}


function Descanso(){
    tipo = 1;
    tempoRestante = 300;
    document.getElementById('timer').innerHTML = formataTempo(tempoRestante);
    
}


function Pomodoro(){
    tipo = 2;
    tempoRestante = 1500; 
    document.getElementById('timer').innerHTML = formataTempo(tempoRestante);
}


function formataTempo(segundos){
    let minutos = Math.floor(segundos/60);
    let seg = segundos % 60;
    
    let formatado = `${String(minutos).padStart(2, "0")}:${String(seg).padStart(2, "0")}`; 
    return formatado;
}


function Start(){
    loop = setInterval(function(){
        document.getElementById('timer').innerHTML = formataTempo(tempoRestante);
        if (tempoRestante===0){
            clearInterval(loop);
            alert("O tempo acabou!!!")
        }else{
            tempoRestante--;
        }
    }, 1000);
}


function Stop(){
    if(tipo === 1){
        clearInterval(loop);
        Descanso();
    }else if(tipo === 2){
        clearInterval(loop);
        Pomodoro()
    }
}