# Esercizio - Palidroma

Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

### Svolgimento

- creo un prompt in cui chiedo all'utente una parola **_userWord_** `string`
- creo un ciclo FOR in cui scorro le lettere della parola al contrario
  - ogni lettera viene aggiunta alla parola **_wordReverse_**
- SE userWord è uguale a **_wordReverse_**
  - la parola è palindroma
- ALTRIMENTI
  - la parola non è palindroma
