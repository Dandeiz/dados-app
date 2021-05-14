const umDado = [
    '<img class="normal__umDado" src="assets/images/dice1.png" alt="dado número 1"></img>',

    '<img class="normal__umDado" src="assets/images/dice2.png" alt="dado número 2"></img>',

    '<img class="normal__umDado" src="assets/images/dice3.png" alt="dado número 3"></img>',

    '<img class="normal__umDado" src="assets/images/dice4.png" alt="dado número 4"></img>',

    '<img class="normal__umDado" src="assets/images/dice5.png" alt="dado número 5"></img>',

    '<img class="normal__umDado" src="assets/images/dice6.png" alt="dado número 6"></img>',
]

const doisDados = [
    '<img class="normal__doisDados" src="assets/images/dice1.png" alt="dado número 1"></img>',

    '<img class="normal__doisDados" src="assets/images/dice2.png" alt="dado número 2"></img>',

    '<img class="normal__doisDados" src="assets/images/dice3.png" alt="dado número 3"></img>',

    '<img class="normal__doisDados" src="assets/images/dice4.png" alt="dado número 4"></img>',

    '<img class="normal__doisDados" src="assets/images/dice5.png" alt="dado número 5"></img>',

    '<img class="normal__doisDados" src="assets/images/dice6.png" alt="dado número 6"></img>',
]

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

const radio = document.getElementsByName('numeroDados');

const botao = document.querySelector('[data-botao]');

const alternarNumeroDeDados = () => {
    for(let i = 0; i < radio.length; i++){
        if(radio[0].checked) {
            
            const esconder2Dados = document.querySelector('[data-doisDados]');
            const adicionarDado = document.querySelector('[data-umDado]');
            const conteudo = `${umDado[random(0, umDado.length)]}`;

            adicionarDado.classList.remove('escondido');
            esconder2Dados.classList.add('escondido')
            adicionarDado.innerHTML = conteudo;

        }else if (radio[1].checked) {
            
            const esconder1Dado = document.querySelector('[data-umDado]');
            const adicionar2Dados = document.querySelector('[data-doisDados]');
            const conteudoDoisDados = `${doisDados[random(0, doisDados.length)]} ${doisDados[random(0, doisDados.length)]}`;
            
            adicionar2Dados.classList.remove('escondido');
            esconder1Dado.classList.add('escondido');
            adicionar2Dados.innerHTML = conteudoDoisDados;
        }
     }
}

botao.addEventListener('click', alternarNumeroDeDados);