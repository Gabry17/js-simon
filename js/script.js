//generare 5 numeri random e inserirli in un array
const div = document.getElementById('number');
let numRnd = 0;
let arrayRnd = [];

for(let i = 0; i < 5; i++){
    numRnd = getRndInteger(1,100);
    arrayRnd.push(numRnd);
    //visualizzare numeri random nel browser
    div.innerHTML = `Memorizzare i seguenti numeri: ${arrayRnd} `;
}





//FUNCTION
//funzione che crea numero casuale 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//test
