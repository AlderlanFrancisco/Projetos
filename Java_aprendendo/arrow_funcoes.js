function apresentar (nome){
    return `Meu nome é ${nome}`
}

// arrow function

const apresentararrow = nome => `meu nome é ${nome}`;

const soma = (num1, num2) => num1+num2;

// arrow function com mais de uma linha de instrução;

const somanumerospequenos = (num1, num2) =>{
    if (num1 || num2 > 10) {
        return "somente números de 1 a 9"
    } else {
        return num1 + num2;
    }
}

// Hoisting: Arrow function se comporta como a expressão.
// operador maior ou igual que >=; operador menor ou igual que <=