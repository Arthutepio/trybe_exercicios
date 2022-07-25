//🚀 3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número
//1.Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
//2.Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
//3.Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
//4.Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
//5.Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

const myFizzBuzz = require('./myFizzBuzz.js');

describe('Testa a função fizzBuzz', () => {
    test('Verifica se uma chamada com um número divisível por 3 e 5', () => {
        expect(myFizzBuzz(15)).toEqual('fizzBuzz');
    });
    test('Verifica se uma chamada com um número divisível por 3', () => {
        expect(myFizzBuzz(3)).toEqual('fizz');
    });
    test('Verifica se uma chamada com um número divisível por 5', () => {
        expect(myFizzBuzz(5)).toEqual('buzz');
    });
    test('Verifica se uma chamada com um número que não é divisível por 3 e 5', () => {
        expect(myFizzBuzz(1)).toEqual(1);
    });
    test('Verifica se uma chamada com um parâmetro que não é um número', () => {
        expect(myFizzBuzz('1')).toEqual(false);
    });
})