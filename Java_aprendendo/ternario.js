const idademinima = 18;
let idadecliente = 16;

if (idadecliente >= idademinima) {
    console.log ("cerveja");
} else {
    console.log ("suco");
}

console.log (idadecliente >= idademinima ? "cerveja" : "suco"); // pode ser usado para reduzir o tamanho do if

idadecliente = 19;

console.log (idadecliente >= idademinima ? "cerveja" : "suco"); 
// como ler o ternário: condição ? true : false. Como usado no exemplo acima.

// boa prática é recomendado usar o if quando for usar várias condições pq é mais fácil de ler e de dar manutenção;
// comparações mais curtas pode usar ternario, caso haja várias grandes é melhor usar o if. é uma boa prática.

