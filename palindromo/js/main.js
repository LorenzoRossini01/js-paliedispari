const verifyBtn = document.getElementById("verify-btn");
const userWordInput = document.getElementById("user-word-input");
const userWordEl = document.getElementById("user-word");
const userWordReverseEl = document.getElementById("user-word-reverse");
const resultEl = document.getElementById("result");

let userWord = "";

verifyBtn.addEventListener("click", function () {
  userWord = userWordInput.value;

  resultEl.innerText = isPalindrom(userWord)
    ? `${userWord} è palindroma`
    : (resultEl.innerText = `${userWord} non è palindroma`);
});
