function enviar(event){
    event.preventDefault();
    const validation = validationText();
    if (validation === false){
        alert('Dados Inválidos');
    } else {
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    }
}

window.onload = function() {

const button = document.querySelector('#submit-btn');
button.addEventListener('click', enviar);
const clearButton = document.querySelector('#clear-btn');
clearButton.addEventListener('click', clear)
const checkbox2 = document.querySelector('#checkbox2');
checkbox2.addEventListener('change', habilitaButton);
}

const input = document.querySelectorAll('input');
function clear(){
    for(let i = 0; i < input.length; i += 1){
        const limp = input[i];
        limp.value = "";
        limp.checked = false;
    }
const textArea = document.querySelector('textarea');
textArea.value = "";

}

function habilitaButton(){
    const submitBtn = document.getElementById('submit-btn');
    const checkbox2 = document.getElementById('checkbox2');
    submitBtn.disabled = !checkbox2.checked;//Esse operador é chamado de "bang", e ele representa uma negação, ou seja, o contrário do retorno de alguma coisa. Se algo for verdadeiro ele retornará falso e vice-versa
}

function validationText (){
    const getName = document.querySelector('#nome').value.length;
    const checkName = getName < 10 || getName > 40;
    
    const getEmail = document.querySelector('#email').value.length;
    const checkEmail = getEmail < 10 || getEmail > 50;

    const getTextArea = document.querySelector('#resposta').value.length;
    const checkTextArea = getTextArea > 500;

    if(checkName || checkEmail || checkTextArea) {
        return false;
    } else {
        return true;
    }
}