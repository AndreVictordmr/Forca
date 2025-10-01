export class Adedonha {
	  constructor() {
	    this.quest = 0;
	    this.play_quest = 0; // número de rodadas 
	    this.perguntas = [];
	    this.isPlay = true;
		this.isWin = false;
	    this.resposta = "";
	    this.erro = [];
	    this.check_resposta = [];
	    this.ponto = 0;
	    this.vida = 6;
	  }
	
	  pegandoPergunta(numb, questoes) {
	    this.quest = numb;
	    this.perguntas = [];
		let ja_foi = new Set();
	    if (questoes.length >= numb) {
	      while(this.perguntas.length < numb){
	        let sorteio = Math.floor(Math.random() * questoes.length);
			if(!ja_foi.has(sorteio)){
	      	  	this.perguntas.push(questoes[sorteio]);
				ja_foi.add(sorteio);		
			}
		  }
	    } else throw new Error("Erro no jogo");
	  }
	
	  pegandoResposta(index) {
	    this.resposta = this.perguntas[index].resposta;
	    this.check_resposta = Array(this.resposta.length).fill(" ");
	    this.erro = [];
	  }
				 
	  verificandoResposta(letra) {
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
		  this.ponto -= 5;
			if(this.ponto <= 0){
				this.ponto = 0;
			}
	    this.vida--;
	    }
		this.checkResposta();
	    return this.check_resposta;
	  }
	
	 gameOver() {
		 
	    if (this.vida <= 0) {
	      	this.isPlay = false;
			this.isWin = false;
			
	    } else if (this.play_quest >= this.quest) {
	      	this.isPlay = false;
			this.isWin = true;
			
	    }
	    return {fim:this.isPlay, vitoria:this.isWin};
	}
	starGame(num,questoes){
		this.pegandoPergunta(num,questoes);
		console.log(num);
		this.pegandoResposta(0);
	}
	
	 checkResposta() {
	    if (this.resposta.toLowerCase() === this.check_resposta.join("").toLowerCase()) {
			this.play_quest++;
	      if (this.isPlay && this.play_quest < this.quest) {
	        this.pegandoResposta(this.play_quest);
	      }
	    }
	    this.gameOver();
	  }
	}
