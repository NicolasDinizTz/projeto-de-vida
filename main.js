const botoes = document.querySelectorAll(".botao");
console.log(botoes)

for(let i=0; i <  botoes.length; i++){
      botoes[i].onclick = function(_){

            for(let j=0;j<botoes.length;j++){
                  botoes[j].classList.remove("ativo");
       }
      
       botoes[i].classList.remove("ativo")
      }

console.log(i)
}