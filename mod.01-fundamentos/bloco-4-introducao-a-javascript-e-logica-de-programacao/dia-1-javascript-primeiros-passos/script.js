//1.Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
const a = 3;
const b = 10;

//Adição
let adicao = a + b;
    console.log(adicao);
//Subritação
let subtracao = a-b;
    console.log(subtracao);
//Multiplicação
let multiplicacao = a * b;
    console.log(multiplicacao);
//Divisão
let divisao = a / b;
    console.log(divisao);
//Módulo
let modulo = a % b;
    console.log(modulo);

//2.Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const num1 = 15;
const num2 = 10;

if (num1 > num2){
    console.log(num1 + " é maior que " + num2);
} else {
    console.log(num2 + " é maior que " + num1);
}// posso acrescentar caso os números sejam iguais

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const n1 = 10;
const n2 = 20;
const n3 = 30;
let maior;
if (n1 > n2 && n1 > n3){
    maior = n1;
} else if (n2 > n1 && n2 > n3){
    maior = n2;
} else {
    maior = n3;
}
return console.log("O maior número é " + maior);




//4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const numero = 0;
let resultado;
if (numero > 0){
    resultado = "positive";
} else if (numero < 0){
    resultado = "negative";
} else {
    resultado = "zero"
}
return console.log(resultado);




//5.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 61;
let somaDosAngulos;
if (angulo1 + angulo2 + angulo3 === 180) {
    somaDosAngulos = true;
} else  {
    somaDosAngulos = false;
    somaDosAngulos = "Erro";
}
return console.log(somaDosAngulos);




//6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
const peca = "Bispo";

switch (peca.toLowerCase()) {
    case "rei":
        console.log("move uma casa em qualquer direção.");
        break;
    case "peão":
        console.log("só anda para frente, pode andar 2 casa de uma vez na primeira jogada nas outras somente 1 casa, o peão come na diagonal e nao pode andar para trás.");
        break;
    case "cachesvalo":
        console.log("anda em L, pode passar por cima de outras peças mas aonde ele ira parar tem que estar vazio ou com uma peça do adversário.");
        break;
    case "torre":
        console.log("anda para frente ou para o lado quantas casas quiser por jogada... não pode passar por cima de nenhuma peça.");
        break;
    case "bispo":
        console.log("anda na diagonal e somente na diagonal ele come na diagonal e nao pode passar por cima de nenhuma peça.");
        break;
    case "dama":
        console.log("pode fazer qualquer jogada de qualquer peça por isso a rainha é a 2 peça mais importante a primeira é claro é o rei que se for morto o jogo acaba.");
        break;
    default:
        console.log("Erro. Digite a peça correta.");
        break;
}



//7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
let nota = 40;
if ( nota < 0 || nota > 100){
     console.log("Erro")
} else if (nota >= 90){
   console.log("A");
} else if (nota >= 80){
     console.log("B");
} else if (nota >= 70){
     console.log("C");
} else if (nota >= 60){
     console.log("D");
} else if (nota >= 50){
     console.log("E");
} else {
     console.log("F");
}

//8.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
const number1 = 1;
const number2 = 2;
const number3 = 5;
let resultado = false
if (number1 % 2 === 0 || number2 % 2 === 0 || number3 % 2 ===0){
    resultado = true;
}
console.log(resultado);


//9.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
const number1 = 1;
const number2 = 3;
const number3 = 5;

if ((number1 + number2 + number3) % 2 === 0){
    
    console.log(false);
} else {
    
    console.log(true);
}


//10.Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
const custo = 1;
const venda = 2;
let custoTotal = custo * 1.2;

if( custo >= 0 && venda >= 0){
    
    let lucro = (venda - custoTotal) * 1000;
    console.log("Total do lucro: " + lucro)  
} else {
    console.log("Erro, digite um valor válido.")
}


//10.Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
const salario = 10000;
let aliquota;
let ir;
if (salario <= 1556.94){
    aliquota = salario * 0.08;
} else if (salario <= 2594.92){
    aliquota = salario * 0.09;
} else if (salario <= 5189.82){
    aliquota = salario * 0.11;
} else {
    aliquota = 570.88
}
console.log("Valor do INSS: " + aliquota);

if (salario < 1903.98){
    ir = (salario - aliquota) *0.75;
} else if (salario <= 2594.92){
    aliquota = salario * 0.09;
} else if (salario <= 5189.82){
    aliquota = salario * 0.11;
} else {
    aliquota = 570.88
}
console.log("Valor do INSS: " + aliquota);
