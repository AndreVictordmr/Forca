import {Adedonha} from "./Adedonha.js";
import Questoes from "./json/questoes.json" with { type:"json"}

let campo_pergunta=document.getElementById("pergunta");
let campo_resposta=document.getElementById("resposta");

const teclado = document.querySelector("#teclado");

console.log(btn_num.textContent);
const btn_num = document.querySelectorAll(".btn_num");
const aviso = document.querySelector("#aviso");

const forca= new Adedonha();
const questoes= Questoes["perguntas"]; 

//Criando os botoes
for(let i =65; i <=90;i++){
  const letras = String.fromCharCode(i);
  const btn = document.createElement("button");
  btn.textContent = letras;
  console.log(letras);
  btn.classList.add("btn_virtual");
  
  btn.addEventListener("click",()=>{
      const letra = btn.textContent.trim().toLowerCase();
    verificacao(btn.textContent.trim())
    if(forca.erro.includes(letra)||forca.check_resposta.includes(letra)){
      btn.classList.add("btn_usado");
      btn.disabled = true;
    }
  })

 
  
  teclado.appendChild(btn);
}


//Pegando o numeros de rodas do jogo 
btn_num.forEach(btn=>{
    btn.addEventListener("click", function(){
    let numb = parseInt(btn.textContent.trim());
    forca.starGame(numb,questoes);
    atualizarTela();
  })
});

//atulizando a tela
function atualizarTela(){
  const mensagem_titulo = aviso.querySelector("h2");
  const mensagem_pont   = aviso.querySelector("p");
  if(forca.isPlay){
    campo_pergunta.textContent =forca.perguntas[forca.play_quest].pergunta.toUpperCase();
  
  campo_resposta.textContent = forca.check_resposta.toUpperCase();
  }else if(forca.isWin){
      mensagem_titulo.textContent = "Parabem você ganhou";
      mensagem_pont.textContent = forca.ponto;
      aviso.showModal();
  }else{
      mensagem_titulo.textContent = `Voce chego ate a ${forca.play_quest+1}ª rodada`;
      mensagem_pont.textContent = forca.ponto;
      aviso.showModal();
  }
}

//Adicionado eventos tando de teclado quando de um teclado virtual
campo_resposta.addEventListener("keyup",(event)=>{verificacao(event.key)});

//Verificando se tem a entrada de um letra valida
function verificacao(letra){
  if(/^[a-z]$/i.test(letra)){ 
    if(!forca.erro.includes(letra.toLowerCase())&&!forca.check_resposta.includes(letra.toLowerCase())){
          forca.verificandoResposta(letra);
      }
  }  
  atualizarTela();
}
