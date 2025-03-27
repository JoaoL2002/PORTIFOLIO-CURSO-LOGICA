    let jogosAlugados = 0;
function contarJogosAlugados(){
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
    }
function alterarStatus(id){
    let gameClick = document.getElementById(`game-${id}`);
    let imagem = gameClick.querySelector('.dashboard__item__img');
    let botao = gameClick.querySelector('.dashboard__item__button');
    let nomeDoJogo = gameClick.querySelector('.dashboard__item__name');
    
        if(imagem.classList.contains('dashboard__item__img--rented')){
         if(confirm(`Você tem certeza que deseja devover o jogo ${nomeDoJogo.textContent}?`)){
         imagem.classList.remove('dashboard__item__img--rented');
         botao.classList.contains('dashboard__item__button--return');
         botao.classList.remove('dashboard__item__button--return');
         botao.textContent = 'Alugar';
         jogosAlugados--;
         }
        }else {
         imagem.classList.add('dashboard__item__img--rented');
         botao.classList.add('dashboard__item__button--return');
         botao.textContent = 'Devolver';
         jogosAlugados++;
        } 
           contarJogosAlugados();
    }
         document.addEventListener('DOMContentLoaded', function(){
         jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
           contarJogosAlugados();
        });
        function ordenarNumeros(a, b, c){
         const ordenarNumeros = [a, b, c].sort((x, y)=> x - y);
            
        }
            ordenarNumeros(3, 1, 5);