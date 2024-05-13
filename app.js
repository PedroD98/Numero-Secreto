let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = definirNumeroAleatorio();
let tentativas = 1;
console.log(numeroSecreto);

function textoExibido(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate : 1.2});
}
function textoInicial(){
    textoExibido('h1', 'Jogo do número secreto');
    textoExibido('p', 'Escolha um número de 1 a 10');
}

textoInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let pluralTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou com ${tentativas} ${pluralTentativas} 😄`;
        textoExibido('h1', 'Parabéns!');
        textoExibido('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            textoExibido('p', `O número é menor que ${chute}`);
        } else {
            textoExibido('p', `O número é maior que ${chute}`);
        } 
        tentativas++;
        limparCampo()
    }
    }

function definirNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let tamanhoDaLista = listaDeNumerosSorteados.length;
    if (tamanhoDaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return definirNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''
}

function reiniciarJogo(){
    tentativas = 1;
    limparCampo();
    textoInicial();
    numeroSecreto = definirNumeroAleatorio();
    document.getElementById('reiniciar').setAttribute('disabled',true);
    console.log(numeroSecreto);
}