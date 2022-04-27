//generare 5 numeri random e inserirli in un array
let numRnd = 0;
let arrayRnd = [];

for(let i = 0; i < 5; i++){
    numRnd = getRndInteger(1,100);
    arrayRnd.push(numRnd);
}

//visualizzare numeri random nel browser
const div = document.getElementById('number');
div.innerHTML = `Memorizzare i seguenti numeri: ${arrayRnd} `;

//aggiungere classe d-block per 30s
setTimeout(function(){
    div.classList.add('d-none');
},30 * 1000);

//dopo 30s visualizzare 5 prompt
const userResult = document.getElementById('result');
let userList = [];
let userN;
setTimeout(function(){
    for(let i = 0; i < 5; i++){
        let userN = parseInt(prompt('inserire numeri'));
        
        if(arrayRnd.includes(userN)){
            userList.push(userN);
        }
        
    }

    //Output del risultato con quanti numeri indovinati e quali

    if(userList.length > 0){
        userResult.innerHTML = `indovinati ${userList.length} numeri, questi numeri sono: ${userList}`;
    } else {
        userResult.innerHTML = 'indovinati 0 numeri';
    }

},32 * 1000);












//FUNCTION
//funzione che crea numero casuale 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//test
