// == (comparação implicita)

const numero = 245;
const texto = "245";

console.log (numero == texto); // converteu, vai dar verdadeiro;
console.log (numero === texto); // não converteu, vai dar false;

// typeof

console.log (typeof numero); // vai dar que é um number
console.log (typeof texto); // vai dar que é uma string

// == só compara o valor;
// === compara o valor e o tipo de dado;
// Boas práticas pedem que se use o === e utilize os métodos de conversão explícitos; o number () e o string ()