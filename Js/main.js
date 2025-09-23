import {Adedonha} from "./Adedonha.js";
import Questoes from "./json/questoes.json" with { type:"json"}

let campo_pergunta=document.getElementById("pergunta");
let campo_resposta=document.getElementById("resposta");

const btn_virtual = document.querySelector(".btn_virtual");

const forca= new Adedonha();
const questoes= Questoes; 

forca.pegandoPergunta(4,questoes);





