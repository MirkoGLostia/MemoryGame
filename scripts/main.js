// variabili
let numbers = shuffle([1,1,2,2,3,3,4,4,5,5,6,6]);

let firstChoose;
let secondChoose;
let errorCount = 0;
let wrongAnswer = false;
let rightAnswer = 0;

// funzioni

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) { 
   
        // generare un numero random 
        var j = Math.floor(Math.random() * (i + 1));
                   
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
       
    return array;
 }

function addTestClass() {

    if (this.className === "card found" || this.className === "card test") {
        return false;
    }

    if (wrongAnswer) {
        var theChosen = document.querySelectorAll(".test");
        
        theChosen.forEach(message => {
        message.className = "card active";
        });

        errorCount++
        wrongAnswer = false;
    }
    
    document.getElementById("errorCount").textContent = errorCount;

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
            message.className = "card found";
            });

            rightAnswer++;

            if (rightAnswer === 6) {
                setTimeout(() => {
                    window.alert("Hai vinto\nhai commesso: " + errorCount + " errori");
                }, 100);
            }
        } else {
            wrongAnswer = true;
        }

        firstChoose = undefined;
        secondChoose = undefined;
    }

}

// inizializza il counter degli errori
document.getElementById("errorCount").textContent = errorCount;

// costante del container
const container = document.getElementById ("game-wraper");

// ciclo per creare la griglia di gioco
for (let i = 0; i < 12; i++) {


    // creazione nuovo elemento
    const quadrato = document.createElement ('div')


    const span = quadrato.appendChild(document.createElement("span"));
    span.textContent = numbers[i];

    quadrato.value = numbers[i];

    quadrato.className = "card active";

    // aggiunta evento
    quadrato.onclick = addTestClass;


    //aggiunta nuovo elemento al contenitore
    container.append(quadrato);


}