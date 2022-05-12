// // 1. Creare 5 numeri random e inserirli nell'html

const randomNumbers = []
    
while (randomNumbers.length < 5) {
    let number
    number = Math.floor(Math.random() * 10) + 1
    if (!randomNumbers.includes(number)) {
        randomNumbers.push(number)
    }
}

for (let i = 0; i < randomNumbers.length; i++) {
    document.getElementById("title").innerHTML += randomNumbers[i] + " - "
}

setTimeout(function(){
    document.getElementById("box").classList.add("display-none")
}, 30000)

console.log(randomNumbers)
// 2. Creare timer di 30 secondi e mostrarlo all'utente
let timer = 30

const countdown = setInterval(function(){
    if (timer === 0) {
        challenge()
        clearInterval(countdown)
    } else {
        timer -= 1
        document.getElementById("timer").innerHTML = timer
    }
},1000)

const attempts = []
const guessed = []

function challenge() {
    let attempt
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
