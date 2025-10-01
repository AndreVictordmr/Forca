const btn_num = document.querySelectorAll('.btn_num');
//Pegando o numeros de rodas do jogo 
btn_num.forEach(btn=>{
  btn.addEventListener("click", function(){
    const numb = btn.dataset.quantidade;
    localStorage.setItem('rodadas', numb);
    window.location.href = 'jogo_da_forca.html';
  });
});
