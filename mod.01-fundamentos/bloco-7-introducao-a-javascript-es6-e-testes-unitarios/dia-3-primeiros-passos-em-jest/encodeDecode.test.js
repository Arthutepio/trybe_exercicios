//🚀 4 - Para as funções encode e decode crie os seguintes testes em Jest:
//1.Teste se encode e decode são funções;
//2.Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;
//3.Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;
//4.Teste se as demais letras/números não são convertidos para cada caso;
//5.Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.

const {encode, decode} = require('./encodeDecode');

describe('Testa as funções encode e decode', () => {
    test('Testa se encode e decode são funções', () => {
        expect(typeof encode).toEqual('function');
        expect(typeof decode).toEqual('function');
    });
    test('converte apenas a vogal "a" no número 1 e vice versa', () => {
        expect(encode('ana')).toEqual('1n1');
        expect(decode('1n1')).toEqual('ana');
    });
    test('converte a vogal "e" no número 2 e vice versa', () => {
        expect(encode('ele')).toEqual('2l2');
        expect(decode('2l2')).toEqual('ele');
    });
    test('converte a vogal "i" no número 3 e vice versa', () => {
        expect(encode('xixi')).toEqual('x3x3');
        expect(decode('x3x3')).toEqual('xixi');
    });
    test('converte a vogal "o" no número 4 e vice versa', () => {
        expect(encode('ovo')).toEqual('4v4');
        expect(decode('4v4')).toEqual('ovo');
    });
    test('converte a vogal "u" no número 5 e vice versa', () => {
        expect(encode('nu')).toEqual('n5');
        expect(decode('n5')).toEqual('nu');
    });
    test('checa se o retorno da função tem o mesmo número de caracteres', () => {
        expect(encode('trybe').length).toEqual(5);
        expect(decode('trybe').length).toEqual(5);
    });
    
});