// 1.Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

const a = 20;
const b = 10;
// Adição (a + b)
console.log('Adição = ' + (a + b));
// Subtração (a - b)
console.log('Subtração = ' + (a - b));
// Multiplicação (a * b)
console.log('Multiplicação = ' + (a * b));
// Divisão (a / b)
console.log('Divisão = ' + (a / b));
// Módulo (a % b)
console.log('Módulo = ' + (a % b));

//2.Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const x = 20;
const y = 20;

if (x > y){
    console.log('O número ' + x + ' é maior.');
} else if (y > x){
    console.log('O número ' + y + ' é maior.');
} else {
    console.log("Os números são iguais.");
}


//3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const l = 5;
const m = 10;
const n = 20;

if(l > m && l > n){
    console.log('O número maior é ' + l);
} else if(m > l && m > n){
    console.log('O número maior é ' + m);
} else {
    console.log('O número maior é ' + n);
}


//4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const f = 0;

if(f > 0){
    console.log('positive');
} else if(f < 0){
    console.log('negative');
} else{
    console.log('zero');
}


//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const ang1 = 1;
const ang2 = 79;
const ang3 = 100;

if(ang1 <= 0 || ang2 <= 0 || ang3 <= 0){
    console.log('Erro, digíte um ângulo válido');
} else if((ang1 + ang2 + ang3) === 180){
    console.log(true);
} else {
    console.log(false);
}


//6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let digitaPeca = "Rei"
let peca = digitaPeca.toLowerCase();

if(peca === 'rei'){
    console.log('Movimento do rei...');
} else if(peca === 'dama'){
    console.log('Movimento da dama...');
} else if(peca === 'bispo'){
    console.log('Movimento do bisbo...');
} else if(peca === 'torre'){
    console.log('Movimento da torre...');
} else if(peca === 'cavalo'){
    console.log('Movimento do cavalo');
} else if(peca === 'peão'){
    console.log('Movimento do peão');
} else{
    console.log('Erro, peça inválida.');
}
///COM SWIT/CASE

const peca2 = 'Cavalo';

switch (peca2.toLocaleLowerCase()) {
    case 'rei':
        console.log('Movimento do rei...');
        break;
    case 'dama':
        console.log('Movimento do dama...');
        break;
    case 'bispo':
        console.log('Movimento do bispo...');
        break;
    case 'torre':
        console.log('Movimento do torre...');
        break;
    case 'cavalo':
        console.log('Movimento do cavalo...');
        break;
    case 'peão':
        console.log('Movimento do peão...');
        break;

    default: console.log('Erro, peça inválida.');
        break;
}


//7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
const nota = 45;

if(nota > 100 || nota < 0){
    console.log('Erro, nota inválida.');
} else if(nota >= 90){
    console.log('nota A');
} else if(nota >= 80){
    console.log('nota B');
} else if(nota >= 70){
    console.log('nota C');
} else if(nota >= 60){
    console.log('nota D');
} else if(nota >= 50){
    console.log('nota E');
} else {
    console.log('nota F');
}

//8.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.
const num1 = 11;
const num2 = 5;
const num3 = 16;

if(num1 % 2 === 0 || num2 % 2 ===0 || num3 % 2 === 0){
    console.log(true);
} else{
    console.log(false);
}

//9.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
// Bonus: use somente um if.
const number1 = 2;
const number2 = 1;
const number3 = 2;

if(number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0){
    console.log(true);
} else{
    console.log(false);
}


//10.Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)
const custoDoProduto = 10;
const valorDeVenda = 20;
const custoTotal = custoDoProduto * 1.2;//1.2 refere-se aos 20% do imposto
const lucro = valorDeVenda - custoTotal;

if(custoDoProduto < 0 || valorDeVenda < 0){
    console.log('Erro, digíte um valor válido');
} else {
    console.log('O lucro da empresa para venda de 1000 produtos é de: R$ ' + lucro * 1000);
}

//11.Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
const salarioBruto = 5000;
console.log('Salário Bruto: ' + salarioBruto);
let aliquotaInss = 0;
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
if(salarioBruto <= 1556.94){
    aliquotaInss = salarioBruto * 0.08;
} else if(salarioBruto <= 2594.92){
    aliquotaInss = salarioBruto * 0.09;
} else if(salarioBruto < 5189.82){
    aliquotaInss = salarioBruto * 0.11;
} else{
    aliquotaInss = 570.88
} 
console.log('INSS: ' + aliquotaInss);
let salarioBase = salarioBruto - aliquotaInss;
console.log('Salário Base: ' + salarioBase);
//R (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
let ir = 0;
if(salarioBruto <= 1903.98){
    console.log('Isento de imposto de renda');
} else if(salarioBruto <= 2826.65){
    ir = (salarioBase * 0.075) - 142.8;
} else if(salarioBruto <= 3751.05){
    ir = (salarioBase * 0.15) - 354.8;
} else if(salarioBruto <= 4664.68){
    ir = (salarioBase * 0.225) - 636.13;
} else{
    ir = (salarioBase * 0.275) - 869.36;
}
console.log('Imposto de Renda: ' + ir);
let salarioLiquido = salarioBase - ir;
console.log('Salário Líquido: ' + salarioLiquido);