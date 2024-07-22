// variabili
let numbers = shuffle([1,1,2,2,3,3,4,4,5,5,6,6]);

let firstChoose;
let secondChoose;

let wrongAnswer = false;

// funzioni

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) { 
   
        // Generate random number 
        var j = Math.floor(Math.random() * (i + 1));
                   
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
       
    return array;
 }

function addTestClass() {
    if (wrongAnswer) {
        var theChosen = document.querySelectorAll(".test");

        theChosen.forEach(message => {
        message.className = "card active";
        });

        wrongAnswer = false;
    }
    this.className = "card test";

    if (!firstChoose) {
        firstChoose = parseInt(this.value);        
    } else {
        secondChoose = parseInt(this.value);
    }
    console.log(firstChoose, secondChoose);
    
    if (firstChoose && secondChoose) {
        if (firstChoose === secondChoose) {
            var theChosen = document.querySelectorAll(".test");

            theChosen.forEach(message => {
            message.className = "card";
            });
        } else {
            wrongAnswer = true;
        }

        firstChoose = undefined;
        secondChoose = undefined;
    }

}



// costante del container
const container = document.getElementById ("game-wraper");

// ciclo per creare numeri e elementi html in cui inserirli
for (let i = 0; i < 12; i++) {


    // creazione nuovo elemento
    const quadrato = document.createElement ('div')


    // aggiunta valore ad elemento html
    const span = quadrato.appendChild(document.createElement("span"));
    span.textContent = numbers[i];

    quadrato.value = numbers[i];


    // aggiunta classe per controllo css
    quadrato.className = "card active";

    // aggiunta evento
    quadrato.onclick = addTestClass;


    //aggiunta nuovo elemento al contenitore
    container.append(quadrato);


}