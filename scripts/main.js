// variabili

let firstChoose;
let secondChoose;


// funzioni

function addTestClass() {
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
            var theChosen = document.querySelectorAll(".test");

            theChosen.forEach(message => {
            message.className = "card active";
            });
        }

        firstChoose = undefined;
        secondChoose = undefined;
    }

}



// costante del container
const container = document.getElementById ("game-wraper");


// ciclo per creare numeri e elementi html in cui inserirli
for (let i = 1; i <= 12; i++) {


    // creazione nuovo elemento
    const quadrato = document.createElement ('div')
    

    // ciclo sequenza numerica
    let number = i;


    // aggiunta valore ad elemento html
    quadrato.append(number);
    quadrato.value = number;


    // aggiunta classe per controllo css
    quadrato.className = "card active";

    // aggiunta evento
    quadrato.onclick = addTestClass;


    //aggiunta nuovo elemento al contenitore
    container.append(quadrato);


}