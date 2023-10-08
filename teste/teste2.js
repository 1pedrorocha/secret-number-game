let height;
let peso;

function showText(id, text) {
    let field = document.getElementById(id);
    field.innerHTML = text;
}

function startMessage(){
    showText('titulo', 'Calcula IMC');
    showText('subtitulo', 'Coloque suas informações para medir seu IMC.');
}

startMessage();

function cleanField(id){
    let field = document.getElementById(id);
    field.value = '';
}


function getIMC()  {
    height = document.getElementById('inputAltura').value;
    height = (parseInt(parseFloat(height)*100))/100;
    console.log(height);

    weight = document.getElementById('inputPeso').value;
    weight = (parseInt(parseFloat(weight)*100))/100;
    console.log(weight);

    imc = weight / (height * height);
    imc = (parseInt(parseFloat(imc)*100))/100;
    console.log(imc);

    showText('subtitulo', `Seu IMC é ${imc}`);

    cleanField('inputAltura');
    cleanField('inputPeso');
}






