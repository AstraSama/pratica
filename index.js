let palavra = "";
let aux_letras = []
let aux = "";
let contador_aux = 0;
let aux_ordem = "";

const ANAGRAMA = (data) => {
    palavra.split("");
    for(let i = 0; i < palavra.length; i++) {
        aux_letras.push(palavra[i]);

    }

    aux = palavra.length;

    for(let i = 1; i < palavra.length; i++) {
        aux = aux * (aux - i);

    }


    for(let i = 0; i < palavra.length; i++) {
        for(let j = 0; j < palavra.length; j++) {
            if(i != j) {
                aux_ordem = aux_letras[i]; 
                aux_letras[i] = aux_letras[j];
                aux_letras[j] = aux_ordem;

                console.log(aux_letras.join(""));

            }
        }
    }
    
    return aux_letras;
}

process.stdout.write("\nEscreva uma palavra: ");

process.stdin.on('data', function(data) {
    palavra = data.toString().trim();

    ANAGRAMA(palavra);

    process.exit();
})