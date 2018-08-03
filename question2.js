/*
*** Desafio Soft360 ***
Nome: Philippe Miranda
Data: 03/08/2018
*/

const mapaRomanos = {
    // Mapeia os algarismos romanos por ordem de unidade
    0: ['','I','II','III','IV','V','VI','VII','VIII','IX'],
    1 : ['','X','XX' ,'XXX','XL' ,'L'  ,'LX' ,'LXX','LXXX','XC'],
    2 : ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
    3 : ['','M']
};
function converterRomanos(input){
    input = input.toString().replace(/[^0-9]/, "");
    if(input == '') return'';
    let num = parseInt(input); 

    num > 1999 ? alert('Cálculo feito com numeros abaixo de 1999'): false;    

    let orderNumber = Number(input).toString();
    let orderLength = orderNumber.length;
    let udc = orderLength - 1;
    
    let romString = '';
    for(let i = udc; i >= 0; i--){
        romString = romString + orderNumber.charAt(i);
    }
    
    let result = '';
    for(let i = udc; i >= 0 ;i--){
        let auxVar = parseInt(romString.charAt(i));
        result = result + mapaRomanos[i][auxVar];
    }
    return result;
}
function converteArr(arr) {
    let inputArr = arr.split(',');
    let resultArr = [];

    inputArr.forEach(
        elm => resultArr.push(converterRomanos(elm))
    );
    console.log(resultArr)
    return resultArr;
}

function question2Result () {
    let elm = document.getElementById('romanResult');
    let input = document.getElementById('romanInput').value;

    elm.innerHTML = converteArr(input);
}