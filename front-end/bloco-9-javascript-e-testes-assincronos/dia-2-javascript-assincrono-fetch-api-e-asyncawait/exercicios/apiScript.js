// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  // const myObject = {
  //   method: 'GET',
  //   headers: { 'Accept': 'application/json'}
  // };
  // console.log(myObject);
  fetch(API_URL, { headers: { 'Accept': 'application/json'} }) //fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => 
    document.getElementById('jokeContainer').innerText = data.joke);

};

window.onload = () => fetchJoke();