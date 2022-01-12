// desafio: Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala;

    const SalaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
    const SalaJava = [6, 5, 8, 9, 5, 6];
    const SalaPython = [7, 3.5, 8, 9.5];

    function mediasala (NotasDaSala) {
        // reduce reduz todos os elemenos do array para um elemento só. precisa de duas coisas, uma função e o inicial;
        //                     2 parametros (aumulador e o atual) e o valor inicial da função
        // o acum sempre tem que ser o primeiro parametro e o atual o segundo. na hora da soma não importa.
        const SomaDasNotas = NotasDaSala.reduce((acum, atual) => atual + acum, 0)
        return SomaDasNotas/NotasDaSala.length;
    }

    console.log (`A média da sala de JavaScript é ${mediasala(SalaJS)} 
A média da sala de Java é ${mediasala(SalaJava)} 
A média da sala de python é ${mediasala(SalaPython)}`);
