const botoes = document.querySelectorAll('.botao');

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function() {
    for(let k=0; k < botoes. legth; k++ )i {
      botoes[k].classList.romove('ativo');
    }
    botoes[i].classList.add('ativo');
  }
}