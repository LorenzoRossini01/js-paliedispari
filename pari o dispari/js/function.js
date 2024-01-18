// FUNCTIONS
/**
 *
 * GENERA OPZIONI SELEZIONABILI IN UN ELEMENTO HTML
 * @param {*} array array di opzioni selezionabili
 * @param {*} input elemento html su cui applicarli
 */
function addOptionToSelectInput(array, input) {
  for (let i = 0; i < array.length; i++) {
    input.innerHTML += `<option value="${array[i]}">${array[i]}</option>`;
  }
}
/**
 * SOMMA 2 NUMERI
 * @param {*} num1 primo numero da sommare
 * @param {*} num2 secondo numero da sommare
 * @returns risultato della somma
 */
function sumNumbers(num1, num2) {
  sum = num1 + num2;
  return sum;
}

/**
 *  VERIFICA SE UN NUMERO è PARI O DISPARI
 * @param {*} sum numero di partenza
 * @returns se il numero è pari o dispari
 */
function isEven(sum) {
  oddEven = sum % 2 == 0 ? "pari" : "dispari";
  return oddEven;
}

/**
 * GENERA UN NUMERO CASUALE TRA UN VALORE MINIMO E UNO MASSIMO
 * @param {*} min il valore minimo da usare per la generazione
 * @param {*} max il valore massimo da usare per la generazione
 * @returns Numero randomico generato tra minimo e massimo forniti
 */
function getRandomNumber(min, max) {
  min = parseInt(min);
  max = parseInt(max);
  if (isNaN(min) || isNaN(max)) {
    console.error("i valori inseriti devono essere numerici");
    return false;
  }

  if (min >= max) {
    console.error("il valore minimo deve essere minore del valore massimo");
  }
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}
