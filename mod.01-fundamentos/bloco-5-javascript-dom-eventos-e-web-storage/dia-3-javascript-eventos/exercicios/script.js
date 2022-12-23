function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
    //   🚀 Exercício 1:
    //   Crie um calendário dinamicamente.
    // O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro.
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    // Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
    // Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
    // A tag <ul> deve conter o id 'days';
    // Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>
    function decemberDays() {
       let listDays = document.querySelector('#days'); 
       for (let index in decemberDaysList){
        let day1 = decemberDaysList[index];   
        let criateDay = document.createElement('li');
        criateDay.innerHTML = day1;
        listDays.appendChild(criateDay);   
        // Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>
        // Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conte
         if (day1 === 24 || day1 === 31) {
            criateDay.className = "holiday day";
         } else if (day1 === 4 || day1 === 11 || day1 === 18) {
            criateDay.className = "day friday";
         } else if (day1 === 25){
            criateDay.className = "holiday day friday";
         } else {
            criateDay.className = "day";
         }
        }
    }
    decemberDays();

//     🚀 Exercício 2:
// Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
// Sua função deve receber um parâmetro com a string 'Feriados'
// Adicione a este botão a ID "btn-holiday"
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container"
function criateButton(string){
    let newButton= document.createElement('button');
    let getDivButton = document.querySelector(".buttons-container");
    newButton.innerHTML = string;
    newButton.id = "btn-holiday";
    getDivButton.appendChild(newButton);
}
criateButton('Feriados');

// 🚀 Exercício 3:
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".
// function changeColorDays(){
//     let buttonHoliday = document.getElementsByClassName("btn-holiday");
//     let colorDays = document.querySelector(".holiday");
//     let backgroundColor = 'rgb(238,238,238)';
//     let newColor = 'red';

//     buttonHoliday.addEventListener('click', function(){
//         for (let index = 0; index < colorDays.length; index +=1){
//             if (colorDays[index].style.backgroundColor === newColor){
//                 colorDays[index].style.backgroundColor = backgroundColor;
//             }else {
//                 colorDays[index].style.backgroundColor = newColor;
//             }
//         }
//     });
    
    
// }
let clickButton = document.getElementById('btn-holiday');
clickButton.addEventListener('click', function(){
    let holiday = document.querySelectorAll('.holiday');
    let greyColor = 'rgb(238,238,238)';
    let newColor = 'red';

    for(let i = 0; i < holiday.length; i += 1){
        if (holiday[i].style.backgroundColor === newColor){
            holiday[i].style.backgroundColor = greyColor;
        } else {
            holiday[i].style.backgroundColor = newColor;
        }
    }
    

})
 
// 🚀 Exercício 4:
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira". Sua função deve receber como parâmetro a string "Sexta-feira".
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".
function buttonFriday(string){
    let newButton = document.getElementsByClassName("buttons-container")[0];
    let criateButton = document.createElement('button');
    criateButton.id = "btn-friday";
    criateButton.innerHTML = string;
    newButton.appendChild(criateButton);

} buttonFriday("Sexta-feira")

// 🚀 Exercício 5:
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.
// 👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.
let buttonSextou = document.getElementById('btn-friday')
buttonSextou.addEventListener('click', changeTextFriday)
function changeTextFriday(){
   let friday = document.querySelectorAll(".friday");
   let sextou = 'Sextou!'
   for(let i in friday){ 
    if (friday[i].innerHTML !== sextou){
           friday[i].innerHTML = sextou;
        } 
    }
} 

 
// 🚀 Exercício 6:
// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
function mouseOver(){
    let daysDec = document.querySelector('#days');
    daysDec.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px';
    event.target.style.fontWeigth = '600';

    })
    
}

function mouseOut(){
    let daysDec = document.querySelector('#days');
    daysDec.addEventListener('mouseout', function(event){
        event.target.style.fontSize = '20px';
        event.target.style.fontWeigth = '200';

    });
}
mouseOver()
mouseOut();

// 🚀 Exercício 7:
// Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

let input = document.getElementById('task-input');
let btnAdd = document.getElementById("btn-add");


btnAdd.addEventListener('click', addTarefas);

function addTarefas(){
    
    let myTasks = document.querySelector('.my-tasks');
    let newSpan = document.createElement('span');
    newSpan.innerHTML = input.value;
    myTasks.appendChild(newSpan);  // Anexando a task como filha de taskContainer

}