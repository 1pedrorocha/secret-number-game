function showText(id, text) {
    let field = document.getElementById(id);
    field.innerHTML = text;
}

function startMessage(){
    showText('titulo', 'Será que você passou?');
    showText('subtitulo', 'Coloque suas notas abaixo e calcule sua média.');
}

startMessage();

function getNote(id)  {
    let nota = document.getElementById(id).value;
    return (parseInt(parseFloat(nota)*100))/100;
}

function calculateMean() {
    let nota1 = getNote('inputNota1');
    let nota2 = getNote('inputNota2');
    let nota3 = getNote('inputNota3');
    let nota4 = getNote('inputNota4');
    
    let mean = (nota1 + nota2 + nota3 + nota4)/4;

    if (mean >= 7) {
        showText('titulo', 'Parabéns! Você passou.');    showText('subtitulo', `Sua média foi ${mean}`);
    } else {
        showText('titulo', 'Que pena! Você não passou.');
        showText('subtitulo', `Sua média foi ${mean}`);
    }

    document.getElementById('reiniciar').removeAttribute('disabled');
}

function cleanField(id) {
    field = document.getElementById(id);
    field.value = ''
}

function restart() {
    cleanField('inputNota1');
    cleanField('inputNota2');
    cleanField('inputNota3');
    cleanField('inputNota4');

    startMessage();
}



