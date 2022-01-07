// tipo Number

const meunumero = 3;

const primeironumero = 1;
const segundonumero = 2;

const operaçãomatematica = primeironumero * segundonumero;

console.log(operaçãomatematica)

const numeropontoflutuane = 3.3;
const pontoflutuane = .5;
const operaçao2= numeropontoflutuane*pontoflutuane;
console.log(operaçao2)

// NaN => Not a number (não é um número)

const alura = 'Alura';
const erro = primeironumero*alura;
console.log (erro)

// strings

const texto1 = 'Olá, mundo!';
const texto2 = "Olá, mundo!";
const senha = "senhaSuperSegura456!";
const stringdenumero = "452";

const citacao = 'Meu nome é ';
const nome = "chico"
console.log (texto1)

// concatenação (+)

console.log(citacao+nome);

// template string ou template literal; Terceira forma de escrever em java script.

// teste de conversão do código unicode (usado como padrão  desde 2007) serve para adicionar caracters especiais

const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

// Para comparação é feito:

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

// podemos padronizar transformando tudo em minusculo ou maísculo

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

// podemos utilizar a propriedade length para sabermos quantos caracteres uma string contém:

const senha2 = "minhaSenha123"
console.log(senha2.length) // 13 caracteres