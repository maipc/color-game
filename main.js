var newGame = document.querySelector("#newGame");
var easyMode = document.querySelector("#easy");
var hardMode = document.querySelector("#hard");
var row2 = document.querySelector(".row2");
var goalColor = document.querySelector("#goal");
var options = document.querySelectorAll(".d-flex .card");
var hintString = document.querySelector("#correctString");
var header = document.querySelector(".title");
var mode = 1; // 0: easy, 1: hard
var answer = Math.floor(Math.random() * 6);

easyMode.addEventListener("click", function () {
  mode = 0;
  answer = Math.floor(Math.random() * 3);
  row2.classList.remove("d-flex");
  row2.classList.add("d-none");
});

hardMode.addEventListener("click", function () {
  mode = 1;
  answer = Math.floor(Math.random() * 6);
  row2.classList.remove("d-none");
  row2.classList.add("d-flex");
});

newGame.addEventListener("click", startGame);

function startGame() {
  newGame.textContent = "NEW COLORS";
  goalColor.textContent = generateColor();
  hintString.classList.add("d-none");
  header.style.background = "#3b76a9";
  for (var i = 0; i < options.length; i++) {
    // init color
    if (i === answer) {
      addColor(i, goalColor.textContent);
    } else {
      addColor(i, generateColor());
    }

    // add addEventListener
    options[i].addEventListener("click", function () {
      if (this.style.background === goalColor.textContent.toLowerCase()) {
        hintString.textContent = "Correct!";
        winGame();
      } else {
        this.style.background = "black";
        hintString.textContent = "Try again";
      }
      hintString.classList.remove("d-none");
    });
  }
}

function addColor(idx, color) {
  options[idx].style.background = color;
}

function generateColor() {
  return (
    "RGB(" +
    Math.floor(Math.random() * 255) +
    ", " +
    Math.floor(Math.random() * 255) +
    ", " +
    Math.floor(Math.random() * 255) +
    ")"
  );
}

function winGame() {
  for (var i = 0; i < options.length; i++) {
    addColor(i, goalColor.textContent);
  }
  newGame.textContent = "PLAY AGAIN?";
  header.style.background = goalColor.textContent;
}

startGame();