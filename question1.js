/*
*** Desafio Soft360 ***
Nome: Philippe Miranda
Data: 03/08/2018
*/
let res = 0;
// Calcula se o numero é primo
ePrimo = function (num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
      return num !== 1;
}
// Soma todos os numeros primos no intervalo 
function somaPrimos (num) {
    let soma = [];
    for (i=0; i <= num; i++) {
        if(ePrimo(i)) soma.push(i);        
    }
    soma.forEach(
        (a) => {res += parseFloat(a)}
    )
    return res
}

// Exibe o resultado na tela

function question1Result () {
    let elm = document.getElementById('numberResult');
    let input = document.getElementById('inputNumber').value;

    elm.innerHTML = somaPrimos(input);
}
