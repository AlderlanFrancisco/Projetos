    const notas = [10, 9, 8, 7, 6];
// o map ele retorna algo, ao contrário do foreach. Tudo que ele faz é retornada como uma nova array;
//                                      array   condição    verd    falso (o ++ na frente é pq soma a nota, caso fosse colocado depois ele não somaria)
    const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota);
    // nota++ primeiro ele passaria a nota para a array e depois tentaria incrementar, o que não daria certo;

    console.log (notasAtualizadas);