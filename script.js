
const texts = ["Technical Symposium", "Non Technical Symposium"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
const typingElement = document.querySelector(".typing-text");

function type() {
  if (count === texts.length) {
    count = 0; // restart loop
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  typingElement.textContent = letter;

  if (letter.length === currentText.length) {
    // pause before deleting
    setTimeout(() => {
      deleteText();
    }, 1500);
  } else {
    setTimeout(type, 100);
  }
}

function deleteText() {
  letter = currentText.slice(0, --index);
  typingElement.textContent = letter;

  if (letter.length === 0) {
    count++;
    setTimeout(type, 500);
  } else {
    setTimeout(deleteText, 50);
  }
}

document.addEventListener("DOMContentLoaded", type);

