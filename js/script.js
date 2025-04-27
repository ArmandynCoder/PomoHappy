let loop;
let tempoRestante = 5;
let comecou = false;
let tipo = 2;
let timeoutId;
const alarme = new Audio("assets/audio/alarm.mp3");
document.getElementById('timer').innerHTML = formataTempo(tempoRestante);
const buttonComecar = document.getElementById('bnt-cmc');
const buttonParar = document.getElementById('bnt-pr');



Buttons()

window.onload = function(){
    setTimeout(function(){
        document.getElementById('load').style.display = "none";
        document.getElementById('content').style.display = "block";
    }, 2000)
}

function Play(){
    alarme.play();
}
function Pause(){
    alarme.pause();
}

function Start() {
    comecou = true;
    buttonComecar.disabled = true;
    buttonParar.disabled = false;
    Buttons();
    let expectedTime = Date.now() + 1000;

    function timerLoop() {
        if(!comecou) return;
        const now = Date.now();
        const drift = now - expectedTime;

        document.getElementById('timer').innerHTML = formataTempo(tempoRestante);
        document.getElementById('tmp-title').innerHTML = formataTempo(tempoRestante) + " - PomoHappy";

        if (tempoRestante <= 0) {
            Play();
            comecou = false;
            if (tipo === 1) {
                Pomodoro();
                Start();
            } else {
                Descanso();
                Start();
            }
            document.getElementById('tmp-title').innerHTML = "Acabou o tempo! - PomoHappy";
            return;
        }

        tempoRestante--;
        expectedTime += 1000;
        setTimeout(timerLoop, Math.max(0, 1000 - drift));
    }

    timeoutId = setTimeout(timerLoop, 1000);
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


function Stop(){
    buttonComecar.disabled = false
    buttonParar.disabled = true
    document.getElementById('tmp-title').innerHTML = "PomoHappy"
    comecou = false;
    Buttons();
    if(tipo === 1){
        Descanso();
        clearTimeout(timeoutId);
    }else if(tipo === 2){
        Pomodoro()
        clearTimeout(timeoutId);
        console.log('Timeout Parado');
    }
}

function Buttons(){
    if(comecou === true){
        buttonParar.style.cursor = 'pointer'
        buttonComecar.style.cursor = 'no-drop'
    }
    else if(comecou === false){
        buttonParar.style.cursor = 'no-drop'
        buttonComecar.style.cursor = 'pointer'
    }
}