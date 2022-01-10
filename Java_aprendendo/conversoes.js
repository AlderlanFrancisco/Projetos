//  tipo de dado;
//  booleanos;

//  conversão implícita

const numero = 456;
const numerostring = '456';

console.log (numero === numerostring);

// ao usar dois iguais, ele faz uma conversão para comparar;

console.log (numero == numerostring);

console.log (numerostring + numero); // vai transformar tudo em string e mandar o texto

// conversão explícita

//Number () - quando quer tranformar uma string em number. Não pode ter letras se não da NaN
// string () - quando quer transformar um número em string.

console.log (Number(numerostring)+numero);

let telefone = 12341234;
console.log("O telefone é " + String(telefone));

let telefone = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.