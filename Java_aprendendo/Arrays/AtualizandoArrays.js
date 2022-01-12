const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

    //3 parametros: 1: apartir de qual índice ele vai começar a remover; 2 Quantos elementos ele vai remover; Quem vai adicionar?)
listaDeChamada.splice(1, 2, 'Rodrigo');

// console.log (`Lista de chamada: ${listaDeChamada}`);

// Adicionando mais um elemento, sem remover, em qualquer posição;

listaDeChamada.splice (2,0, 'chico'); // será adicionado na posição 2

console.log (`Lista de chamada: ${listaDeChamada}`);