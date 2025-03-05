let loop;
let tempoRestante = 1500;
let comecou = false;
let tipo = 2;
document.getElementById('timer').innerHTML = formataTempo(tempoRestante);


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
    if(comecou === false){
        comecou = true;
        loop = setInterval(function(){
            document.getElementById('timer').innerHTML = formataTempo(tempoRestante);
            document.getElementById('tmp-title').innerHTML = formataTempo(tempoRestante) + " - PomoHappy";
            if (tempoRestante===0){
                clearInterval(loop);
                document.getElementById('tmp-title').innerHTML = "Acabou o tempo! - PomoHappy";   
            }else{
                tempoRestante--;
            }
        }, 1000);
    }else{
        return;
    }
}


function Stop(){
    document.getElementById('tmp-title').innerHTML = "PomoHappy"
    comecou = false;
    if(tipo === 1){
        clearInterval(loop);
        Descanso();
    }else if(tipo === 2){
        clearInterval(loop);
        Pomodoro()
    }
}
