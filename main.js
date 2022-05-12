// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 1. Creare 5 numeri random
const randomNumbers = []

for (let i = 0; i < 5; i++) {
    number = Math.floor(Math.random() * 10) + 1;
    while (!randomNumbers.includes(number)) {
        randomNumbers.push(number)
    }
}

console.log(randomNumbers)
// 2. Far partire un countdown da 30 a 0

// 3. Allo scadere del tempo, creare 5 prompt in cui l'utente deve inserire i 5 numeri, uno per volta
// 4. Creare alert con numero di numeri indovinati e quali