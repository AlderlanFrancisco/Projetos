    const notas = [10, 6.5, 8, 7.5];

    let SomaDasNotas = 0;
// // foreach vai executar para cada elemento. Ele é um callback, ela chama de volta uma outra função.
//     notas.forEach( nota => {
//         SomaDasNotas += nota;
//     });

    notas.forEach(function(nota){
        SomaDasNotas += nota;
    })

    let media = SomaDasNotas/notas.length

    console.log (media);
