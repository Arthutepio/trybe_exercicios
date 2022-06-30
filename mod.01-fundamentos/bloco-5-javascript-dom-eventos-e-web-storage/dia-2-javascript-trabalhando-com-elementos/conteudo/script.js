// 1. Acesse o elemento elementoOndeVoceEsta.
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
let pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'green'
// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = " Esse é o filho do filho";
// 4. Acesse o primeiroFilho a partir de pai.
let primeiroFilho = pai.firstElementChild
// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
let primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling
// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
let textAtencao = elementoOndeVoceEsta.nextSibling
// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
let terceiroFilho = elementoOndeVoceEsta.nextElementSibling
// 8. Agora acesse o terceiroFilho a partir de pai.
let terceiroFilho2 =pai.lastElementChild.previousElementSibling
