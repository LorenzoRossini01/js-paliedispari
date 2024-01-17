# Esercizio Pari e Dispari

1. L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.

2. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

3. Sommiamo i due numeri

4. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

5. Dichiariamo chi ha vinto.

### Svolgimento

- creo un input (form-selector) per chiedere all'utente se sceglie pari o dispari

  - immagazzino il valore (true/false) della sua risposta in una costante **_userChoice_**

- creo un input per chiedere all'utente un numero da 1 a 5

  - immagazzino il valore della sua risposta in una costante

- genero un numero casuale da 1 a 5 per la CPU con la funzione **getRandomNumber**

- SE la somma dei 2 numeri risulta pari
  - variabile **_oddEven_** = pari
- ALTRIMENTI

  - variabile **_oddEven_** = dispari

- SE **_userChoice_** = **_even_**

  - l'utente ha vinto

- ALTRIMENTI
  - l'utente ha parso
