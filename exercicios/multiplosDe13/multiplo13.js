function imprimirNumeros(X, Y) {
    let inicio = Math.min(X, Y);
    let fim = Math.max(X, Y);
    let soma = 0;

    for (let i = inicio; i <= fim; i++) {
        if (i % 13 !== 0) {
            soma += i;

            
        }
    }
    
    console.log(soma)

}

imprimirNumeros(100, 200);