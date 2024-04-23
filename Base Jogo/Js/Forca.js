let vida = 6;
let ponto;
let resposta;
let palavraS = "";
let segredo, dica, palavra, _res = [];
let timer;
let gameOver = false;

/*
function Start(){
    vida = 6;
    ponto = 0;
    
	
}
*/
function Game(letra){
    if(!gameOver){
        if(!segredo.includes(letra)){
            segredo.push(letra);
            if(resposta.include(letra)){
                for(let i = 0;i<resposta.length;i++){
                   if(resposta[i] === letra){
                    //Funcao que desenha 
                    addResposta(i);
                    ponto += 5;   
                   }
                }
                GameOver();
                disableKey(letra,"Correto");
            }
            else {
                vida--;
                GameOver();
                disableKey(letra,"Errado");
            }
        }
    }
        
}

function addResposta(i){
    palavraS += resposta[i].toUpperCase();
}
function GameOver(){
    if(vida == 0 ){
        //isRunnig = false;
        gameOver = true;
    }
    if(resposta.length === palavraS.length){
       ponto += 10;
        _res.push(palavraS);         
       gameOver = true; 
    }
}

function CodSegredo(){
    //if(!_res.includes(resposta)){
    resposta = palavra[Math.floor(Math.random() * palavra.length)].toUpperCase();
    
    return Resposta;
}


function disableKey(key, status) {
    //Add respective class to visually disable key
    const keysButtons = document.querySelectorAll('.letter');
    for (let i = 0; i < keysButtons.length; i++) {
        if (keysButtons[i].textContent === key) {
            keysButtons[i].classList.add(status);
            break;
        }
    }
}

function addListeners() {
    //Adds event listeners to keyboard
    window.addEventListener('keydown', (e) => {
        let letter = e.key.toUpperCase();
        // validation if it's a letter
        if (keys.toString().includes(letter)) {
            checkLetter(letter);
        }
    });

    //Adds events listeners to virtual keyboard
    const keysButtons = document.querySelectorAll('.letter');
    keysButtons.forEach(key => key.addEventListener('click', () => {
        let letter = key.textContent;
        checkLetter(letter);
    }));
}