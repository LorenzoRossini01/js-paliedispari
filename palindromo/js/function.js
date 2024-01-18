// FUNCTIONS
/**
 *
 * @param {*} word input word
 * @returns If word is palindrome:true, else false
 */
function isPalindrom(word) {
  let wordReverse = "";
  let resultPalindrom = "";

  for (let i = word.length - 1; i >= 0; i--) {
    console.log(word[i]);
    wordReverse += word[i];
  }
  userWordEl.innerText = word.split(" ").join("");
  userWordReverseEl.innerText = wordReverse.split(" ").join("");

  if (userWord.split(" ").join("") === wordReverse.split(" ").join("")) {
    resultPalindrom = true;
  } else {
    resultPalindrom = false;
  }

  return resultPalindrom;
}

/* 
 @param {number} min il valore minimo da usare per la generazione
 @param {number} max il valore massimo da usare per la generazione

 @return Numero randomico generato tra minimo e massimo forniti
 
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
