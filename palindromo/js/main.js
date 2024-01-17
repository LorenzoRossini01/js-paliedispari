const verifyBtn = document.getElementById("verify-btn");
const userWordInput = document.getElementById("user-word-input");
const userWordEl = document.getElementById("user-word");
const userWordReverseEl = document.getElementById("user-word-reverse");
const resultEl = document.getElementById("result");

verifyBtn.addEventListener("click", function () {
  let wordReverse = "";

  const userWord = userWordInput.value;
  for (let i = userWord.length - 1; i >= 0; i--) {
    console.log(userWord[i]);
    wordReverse += userWord[i];
  }
  userWordEl.innerText = userWord.split(" ").join("");
  userWordReverseEl.innerText = wordReverse.split(" ").join("");

  if (userWord.split(" ").join("") === wordReverse.split(" ").join("")) {
    resultEl.innerText = `${userWord} è palindroma`;
  } else {
    resultEl.innerText = `${userWord} non è palindroma`;
  }
});
