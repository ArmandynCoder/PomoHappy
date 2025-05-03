function Navbar() {
    const button = document.querySelector('.navbar');

    if(button.classList.contains('navbar-open')){
        button.classList.remove('navbar-open');
        button.classList.add('navbar-close');
    }else {
        button.classList.remove('navbar-close');
        button.classList.add('navbar-open');

    }
}

const title = document.getElementById('title-pomo');
const navbar = document.getElementById('navbar');
const main = document.getElementById('main-pomo');
const timer = document.getElementById('timer');
const titleNavbar = document.getElementById('title-navbar');
const buttonNavbar = document.getElementById('button-navbar');
const bntPomodoro = document.getElementById('bnt-1');
const bntDescanso = document.getElementById('bnt-2');
const bntComecar = document.getElementById('bnt-cmc');
const bntParar = document.getElementById('bnt-pr');

const social1 = document.getElementById('img-1');


document.addEventListener('DOMContentLoaded', function() {
    // Mapeamento de classes para paletas
    const mapeamento = {
        'azul': 'paleta-padrao',
        'laranja': 'paleta-1',
        'amarelo': 'paleta-2',
        'verde': 'paleta-3',
    };

    // Adiciona eventos a todos os itens
    document.querySelectorAll('.itens-navbar li').forEach(li => {
        li.addEventListener('click', function() {
            // Esconde todas as paletas
            document.querySelectorAll('.paleta').forEach(paleta => {
                paleta.style.display = 'none';
            });
            
            // Mostra a paleta correspondente
            const classe = Array.from(li.classList).find(c => c in mapeamento);
            if (classe) {
                const paletaId = mapeamento[classe];
                document.getElementById(paletaId).style.display = 'block';
                if(paletaId  == 'paleta-1') {
                    document.body.style.backgroundColor = '#f1ede0';
                    title.style.color = '#bf2a52';
                    navbar.style.backgroundColor = "#f1ede0";
                    main.style.borderColor = "#f3af30";
                    timer.style.color = "#f3af30";

                    titleNavbar.style.color = "#bf2a52";
                    buttonNavbar.src = "./assets/img/Menu/theme-1.svg";
                    bntPomodoro.style.color = "#bf2a52";
                    bntPomodoro.style.borderColor = "#bf2a52";

                    bntDescanso.style.color = "#697452";
                    bntDescanso.style.borderColor = "#697452";

                    
                    bntComecar.style.color = "#bf2a52";
                    bntComecar.style.borderColor = "#bf2a52";

                    bntParar.style.color = "#697452";
                    bntParar.style.borderColor = "#697452"

                    // social1.style.fill = "#697452";
                    
                }
                if(paletaId == 'paleta-2'){
                    document.body.style.backgroundColor = '#f0e6c3';
                    title.style.color = '#944131';
                    navbar.style.backgroundColor = "#f0e6c3";
                    main.style.borderColor = "#00291b";
                    timer.style.color = "#00291b";

                    titleNavbar.style.color = "#944131";
                    buttonNavbar.src = "./assets/img/Menu/theme-2.svg";
                    bntPomodoro.style.color = "#944131";
                    bntPomodoro.style.borderColor = "#944131";

                    bntDescanso.style.color = "#697452";
                    bntDescanso.style.borderColor = "#697452";

                    
                    bntComecar.style.color = "#944131";
                    bntComecar.style.borderColor = "#944131";

                    bntParar.style.color = "#697452";
                    bntParar.style.borderColor = "#697452"

                }
                if(paletaId == 'paleta-3'){
                    document.body.style.backgroundColor = '#fdf2de';
                    title.style.color = '#a693c0';
                    navbar.style.backgroundColor = "#fdf2de";
                    main.style.borderColor = "#a693c0";
                    timer.style.color = "#a693c0";

                    titleNavbar.style.color = "#a693c0";
                    buttonNavbar.src = "./assets/img/Menu/theme-3.svg";
                    bntPomodoro.style.color = "#f2a03d";
                    bntPomodoro.style.borderColor = "#f2a03d";

                    bntDescanso.style.color = "#a6a056";
                    bntDescanso.style.borderColor = "#a6a056";

                    
                    bntComecar.style.color = "#f2a03d";
                    bntComecar.style.borderColor = "#f2a03d";

                    bntParar.style.color = "#a6a056";
                    bntParar.style.borderColor = "#a6a056"
                }
                else if (paletaId == 'paleta-padrao') {
                    document.body.style.backgroundColor = '#fff';
                    title.style.color = '#0c0c37';
                    navbar.style.backgroundColor = "#fff";
                    main.style.borderColor = "#0c0c37";
                    timer.style.color = "#0c0c37";

                    titleNavbar.style.color = "#0c0c37";
                    buttonNavbar.src = "./assets/img/Menu/theme-blue.svg";
                    bntPomodoro.style.color = "#fc4040";
                    bntPomodoro.style.borderColor = "#fc4040";

                    bntDescanso.style.color = "#25a13a";
                    bntDescanso.style.borderColor = "#25a13a";

                    bntComecar.style.color = "#0c0c37";
                    bntComecar.style.borderColor = "#0c0c37";

                    bntParar.style.color = "#0c0c37";
                    bntParar.style.borderColor = "#0c0c37"
                } 
            }
        });
    });
});