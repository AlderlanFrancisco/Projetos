// medias 10, 6.5, 8, 7.5

// let nota1 = 10;
// let nota2 = 6.5;
// let nota3 = 8;
// let nota4 = 7.5;

// let media = (nota1+nota2+nota3+nota4)/4;

// console.log(media);
//índice       0    1   2   3
const notas = [10, 6.5, 8, 7.5];

let media = (notas [0] + notas [1] + notas [2] + notas [3])/notas.length // sempre começa o elemento 0;
//.length é o comprimento da array.
console.log (media)

// fazendo isso com o reduce:

function calculandomedia (notasdasala) {
    const medias = notasdasala.reduce ((acum, atual) => acum + atual, 0 );
    return medias/notasdasala.length;
}
console.log (`A média da sala é ${calculandomedia(notas)}`);

// ou
// o acum sempre tem que ser o primeiro parametro e o atual o segundo. na hora da soma não importa.
const med = notas.reduce ((acum,atual) => acum+atual, 0)/notas.length;
console.log (`A média da nota é ${med}`);