export class Adedonha {
  constructor() {
    this.quest = 0;
    this.play_quest = 0; // número de perguntas usadas
    this.perguntas = [];
    this.mensagem = "";
    this.resposta = "";
    this.erro = [];
    this.check_resposta = [];
    this.timer = null;
    this.ponto = 0;
    this.vida = 6;
  }

  pegandoPergunta(numb, questoes) {
    this.quest = numb;
    this.play_quest = numb;
    this.perguntas = [];
	let ja_foi = new Set();
    if (questoes.length >= numb) {
      while(this.perguntas.length < numb){
        let sorteio = Math.floor(Math.random() * questoes.length);
		if(!ja_foi.has(sorteio){
      	  	this.perguntas.push(questoes[sorteio]);
			ja_foi.push(sorteio);		
		}
	  }
    } else throw new Error("Erro no jogo")
  }

  pegandoResposta(index) {
    this.resposta = this.perguntas[index].resposta;
    this.check_resposta = Array(this.resposta.length).fill(" ");
    this.erro = [];
  }
			 
  checaResposta(letra) {
    const checando = this.resposta.split("");

    if (this.resposta.includes(letra)) {
      for (let i = 0; i < checando.length; i++) {
        if (checando[i] === letra) {
          this.check_resposta[i] = letra;
        }
      }
      this.ponto += 10;
    } else {
      this.erro.push(letra);
      this.vida--;
    }
    return this.check_resposta;
  }

  gameOver() {
    if (this.vida <= 0) {
      this.mensagem = "Fim de jogo";
		return this.mensagem;
    } else if (this.play_quest <= 0) {
      this.mensagem = "Parabéns, você ganhou!";
		return this.mensagem;
    }
    return null;
  }

  checkResposta() {
    if (this.resposta === this.check_resposta.join("")) {
      this.play_quest--;
      if (this.play_quest > 0) {
        this.pegandoResposta(this.play_quest - 1);
      }
    }
    return this.gameOver();
  }
}
