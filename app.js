//somar listas
let list1 = [10, 20, 30];
let list2 = [5, 10, 15];
let list3 = [];
let list4 = []
let sum = 0;

for (let i = 0; i < list1.length; i++) {
    list3.push(list1[i] + list2[i]);
    list4.push(list1[i]*list1[i]);
    sum += list1[i];
}

console.log(`lista 1: ` + list1);
console.log(`lista 2: ` + list2);
console.log(`soma listas 1 e 2: ` + list3);
console.log(`quadrado lista 1: ` + list4);
console.log(`soma lista 1: ` + sum);

//////////

//let nome = prompt('Qual o seu nome?');
let numerosSorteados = [];
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();

// let titulo = document.querySelector('h1');
// titulo.innerHTML = `Olá, ${nome}`;

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

//exibirTextoNaTela('h1', `Olá, ${nome}!`);
function mensagemInicial() {
    exibirTextoNaTela('h1', `Olá!`);
    exibirTextoNaTela('p', `Escolha um número entre 1 e 10`);
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`);

        document.getElementById('reiniciar').removeAttribute('disabled');
        console.log(numerosSorteados);
    } else {
        exibirTextoNaTela('h1', 'Errou!');
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo();
    }
}



function gerarNumeroAleatorio() {
    let qtNumerosSorteados = numerosSorteados.length;
    if (qtNumerosSorteados == 4){
        numerosSorteados.shift();
    }
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    while(numerosSorteados.includes(numeroEscolhido)){
        numeroEscolhido = parseInt(Math.random() * 10 + 1);
    }
    numerosSorteados.push(numeroEscolhido);
    console.log(numerosSorteados);
    let maiorNumero = Math.max.apply(null, numerosSorteados);
    let menorNumero = Math.min.apply(null, numerosSorteados);
    console.log(maiorNumero-menorNumero);
    return numeroEscolhido;
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


