const nomes = [
    'João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'
];
// Índice                 0    até o  10
const sala = nomes.slice (0, nomes.length/2);// onde ele termina é exclusivo, ou seja ele não vai pegar o nome do length/2
// Índice          apartir 10 até o final
const sala2= nomes.slice (nomes.length/2); //se não colocar nada ele vai até o final da array;

console.log (`alunos da sala 1 ${sala}`);
console.log (`alunos da sala 2 ${sala2}`);