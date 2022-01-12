// let x = "";
// console.log (x);
// x = "oi";

// apenas da forma que está acima vai executar um espaço vazio pois o oi foi declarado dps.

// DECLARAÇÃO DE FUNÇÃO

// 1) declarar a função e dizer o que ela faz
                                            // string
function imprimirtexto(texto) {
    console.log (texto);
}

// 2)executa a função (1 ou + vezes)

imprimirtexto ("outro texto");
imprimirtexto (soma()); // agora vai mudar de string e pegar o resultado da soma, dando 4

// três formas de escrever funções (a primeira é a de cima);

// function soma(){
//     const resultado = 2 + 2;
// }

// console.log(soma()) (vai dar erro pois a função não retorna nada. pois apenas com a const ela só faz a soma)

function soma(){
    // outros códigos.
    return resultado = 2 + 2; // o return ele tem que ser a última linha da função. antes ela pode ter outros códigos.
}

// console.log (soma()); agora vai dar certo.

