let scoreH2 = document.getElementById("score");
let timeLeftH2 = document.getElementById("timeLeft");
let startNewGameButton = document.getElementById("startNewGame");
let pauseGameButton = document.getElementById("pauseGame");
let squares = document.querySelectorAll("square");
let score = 0;
let timeLeft = 0;
let hitPosition = null;

function randomMole() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * squares.length)];

  randomSquare.classList.add("mole");
  hitPosition = randomSquare.id;
}

function countDown() {
  timeLeft--;
  timeLeftH2.innerHTML = `Time Left: ${timeLeft}`;
}
randomMole();

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPosition) {
      score++;
      scoreH2.innerText = `Your score ${score}`;
    }
  });
});
function startGame() {
  score = 0;
  timeLeft = 60;
  //callback function
  setInterval(randomMole, 1000);
}

startNewGameButton.addEventListener("click", startGame);
