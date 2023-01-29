const pergunta1 = document.querySelector('[data-pergunta1]');
const pergunta2 = document.querySelector('[data-pergunta2]');
const pergunta3 = document.querySelector('[data-pergunta3]');
const button1 = document.querySelector('[data-button1]');
const button2 = document.querySelector('[data-button2]');
const button3 = document.querySelector('[data-button3]')
const input1 = document.querySelector('[data-input1]');
const input2 = document.querySelector('[data-input2]');
const input3 = document.querySelector('[data-input3]');
const resultado = document.querySelector('[data-resultado]');





input1.focus();


function mostraPergunta2() {

    const alterarPergunta2 = document.getElementById("pergunta2");

    alterarPergunta2.textContent = input1.value + ", quantos anos você tem?"

    pergunta2.style.display = "flex"
}

button1.addEventListener("click", () => {
    
    mostraPergunta2();
    
    input2.focus();

})

function mostraPergunta3() {

    const alterarPergunta3 = document.getElementById("pergunta3");

    alterarPergunta3.textContent = "Qual linguagem de programação você está estudando?"

    pergunta3.style.display = "flex"

}



button2.addEventListener("click", () => {
    
    mostraPergunta3();
    input3.focus();

});

button3.addEventListener("click", () => {
  
    
    pergunta1.style.display="none";
    pergunta2.style.display="none";
    pergunta3.style.display="none";
    mostraResultado();

   
});




function escondePerguntas() {


}

function mostraResultado() {
    
    const nome = input1.value;
    const idade = input2.value;
    const linguagem = input3.value;

    
    resultado.textContent = "Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!"

    resultado.style.display = "flex";
    
}






