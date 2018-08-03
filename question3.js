function calculaViagens (pesos,andares,maxPessoas,maxPeso) {
    pesoArr = pesos.split(',');
    andarArr = andares.split(',');

    let numViagens = 0;
    let numPessoas = 0;
    let pesoTotal = 0;

    console.log(pesoArr);

    pesoArr.length !== andarArr.length ?
        alert('É preciso colocar um andar por pessoa (peso colocado)') : numPessoas = andarArr.length;

    if (numPessoas <= maxPessoas) {
        numViagens ++;
       pesoArr.forEach(
            (peso) => {
                pesoTotal += parseInt(peso)
            }
        );
    }



}