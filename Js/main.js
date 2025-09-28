import {Adedonha} from "./Adedonha.js";
import Questoes from "./json/questoes.json" with { type:"json"}

let campo_pergunta=document.getElementById("pergunta");
let campo_resposta=document.getElementById("resposta");

const btn_virtual = document.querySelector(".btn_virtual");

const forca= new Adedonha();
const questoes= Questoes["perguntas"]; 

forca.starGame(4,questoes);

do{
campo_pergunta.textContent =forca.perguntas[forca.play_quest].pergunta;

campo_resposta.textContent = forca.check_resposta;

campo_resposta.addEventListener("keyup");

btn_virtual.addEventListener("click");


}while(forca.isPlay)