function enviar(event){
    event.preventDefault();
}

window.onload = function() {

const button = document.getElementsByClassName('btn')[0];
button.addEventListener('click', enviar);
const clearButton = document.querySelector('clear-btn');
clearButton.addEventListener('click', clear)
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
