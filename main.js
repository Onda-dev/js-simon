// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 1. Creare 5 numeri random
const randomNumbers = []
let number
    
while (randomNumbers.length < 5) {
    number = Math.floor(Math.random() * 10) + 1
    if (!randomNumbers.includes(number)) {
        randomNumbers.push(number)
    }
}
alert(randomNumbers)
console.log(randomNumbers)
// 2. Far partire un countdown di 30 secondi
setTimeout(function(){
    challenge()
}, 3000)
// 3. Allo scadere del tempo, creare 5 prompt in cui l'utente deve inserire i 5 numeri, uno per volta
const attempts = []
let attempt
const guessed = []

function challenge() {

    while (isNaN(attempt) || attempts.length < 5) {
        attempt = Number(prompt("Inserisci, uno per volta, i numeri mostrati in precedenza"))
        attempts.push(attempt)
        if (randomNumbers.includes(attempt)){
            guessed.push(attempt)
        }
    }
// 4. Creare alert con numero di numeri indovinati e quali
console.log(attempts)
console.log(guessed)
    if (attempts.length === 5) {
        alert(`Hai indovinato ${guessed.length} numeri: ${guessed}`)
    }
}
