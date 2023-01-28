const pergunta = document.querySelector('[data-pergunta]');
const button = document.querySelector('[data-button]');
const resposta = document.getElementById("text");
const input = document.querySelector(".input");

const pergunta2 =  resposta.value + "Quantos anos você tem?"
const pergunta3 = "Qual linguagem de programação você está estudando?"

const listaPerguntas = [pergunta2, pergunta3]

input.focus();

let contador = 0;

function mudaPerguntas() {
    
    if(contador < listaPerguntas.length) {
        pergunta.textContent = `${listaPerguntas[contador]}`
    }

    contador++;

}

button.addEventListener('click', () => {
    
    mudaPerguntas();

    input.focus();
    input.value = "";

})















        
    

