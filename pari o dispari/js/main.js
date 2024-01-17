const oddEvenSelectInput = document.getElementById("odd-even-select-input");
const userNumberInput = document.getElementById("user-number-input");

const oddEvenArray = ["pari", "dispari"];
const numberArray = [1, 2, 3, 4, 5];

function addOptionToSelectInput(array, input) {
  for (let i = 0; i < array.length; i++) {
    input.innerHTML += `<option value="${array[i]}">${array[i]}</option>`;
  }
}

addOptionToSelectInput(oddEvenArray, oddEvenSelectInput);
addOptionToSelectInput(numberArray, userNumberInput);
