import {Adedonha} from "./Adedonha.js";
import Questoes from "./json/questoes.json" with { type:"json"}

let campo_pergunta=document.getElementById("pergunta");
let campo_resposta=document.getElementById("resposta");

const btn_virtual = document.querySelector(".btn_virtual");
const btn_num = document.querySelector(".btn_num");
const aviso = document.querySelector("#aviso");

const forca= new Adedonha();
const questoes= Questoes["perguntas"]; 

btn_num.addEventListener("click", function(){
  let numb = parseInt(btn_num.textContent);
  forca.starGame(numb,questoes);
  atualizarTela();
});

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
      mensagem_titulo.textContent = `Voce chego ate a ${forca.play_quest+1} rodada`;
      mensagem_pont.textContent = forca.ponto;
      aviso.showModal();
  }
}

campo_resposta.addEventListener("keyup",(event)=>{verificacao(event.key)});

btn_virtual.addEventListener("click",()=>{verificacao(btn_virtual.textContent.trim())});




function verificacao(letra){
  if(/^[a-z]$/i.test(letra)){ 
    if(!forca.erro.includes(letra.toLowerCase())){
          forca.verificandoResposta(letra);
      
      }
  }  
  atualizarTela();
}
