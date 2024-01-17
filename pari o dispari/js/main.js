const oddEvenSelectInput = document.getElementById("odd-even-select-input");
const userNumberInput = document.getElementById("user-number-input");
const playBtn = document.getElementById("play-btn");
const resultEl = document.getElementById("result");

const oddEvenArray = ["pari", "dispari"];
const numberArray = [1, 2, 3, 4, 5];

let sum = "";
let oddEven = "";

// FUNCTIONS
function addOptionToSelectInput(array, input) {
  for (let i = 0; i < array.length; i++) {
    input.innerHTML += `<option value="${array[i]}">${array[i]}</option>`;
  }
}

function sumNumbers(num1, num2) {
  sum = num1 + num2;
  return sum;
}

addOptionToSelectInput(oddEvenArray, oddEvenSelectInput);
addOptionToSelectInput(numberArray, userNumberInput);

playBtn.addEventListener("click", function () {
  const oddEvenValue = oddEvenSelectInput.value;
  const userNumberValue = userNumberInput.value;

  resultEl.innerHTML = `
  <h2>Le tue scelte</h2>
  <div>${oddEvenValue}</div>
  <div>${userNumberValue}</div>`;

  const cpuNumber = getRandomNumber(1, 5);
  console.log(`il numero del computer è ${cpuNumber}`);

  resultEl.innerHTML += `  
  <h2>Il numero scelto dal computer</h2>
  <div>${cpuNumber}</div>`;

  sumNumbers(parseInt(userNumberValue), parseInt(cpuNumber));

  if (sum % 2 == 0) {
    oddEven = "pari";
  } else {
    oddEven = "dispari";
  }

  if (oddEven == oddEvenValue) {
    resultEl.innerHTML += `
  <h2>Il risultato</h2>
  <div>${sum} è un numero ${oddEven}. <span class="text-success">Hai vinto!</span></div>`;

    console.log("hai vinto");
  } else {
    resultEl.innerHTML += `
    <h2>Il risultato</h2>
    <div>${sum} è un numero ${oddEven}. <span class="text-danger">Hai perso!</span></div>`;
    console.log("hai perso");
  }
  console.log(oddEven);
});
