// //This is the constructor function
// const Car = function (carName, speed) {
//   this.carName = carName;
//   this.speed = speed;

//     // this.accelerate = function () {
//     //   return this.speed + 10;
//     // };

//     // this.break = function () {
//     //   return this.speed - 5;
//     // };
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   return console.log(`${this.carName} is going at ${this.speed} km/h`);
// };

// Car.prototype.break = function () {
//   this.speed -= 5;
//   return console.log(`${this.carName} is going at ${this.speed} km/h`);
// };

// const bmw = new Car("Bmw", 110);
// const mercedes = new Car("Mercedes", 90);

// bmw.accelerate();
// bmw.accelerate();
// bmw.break();
// bmw.accelerate();
// bmw.accelerate();

/////////////////Game Logic ///////////////////////

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

//Declarations

let displayedGuessNumber = document.querySelector(".displayNumber");
let highScoreSelector = document.querySelector(".highScore");
let liveScore = document.querySelector(".liveScore");

const displayMessage = function (message) {
  document.querySelector(".describe").textContent = message;
};

document.querySelector(".check-btn").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guessInput").value);

  if (!guess) {
    displayMessage("😑 No valid Number..!");
  } else if (guess === number) {
    displayMessage("😍 You won the Game..!");
    document.querySelector("body").style.backgroundColor = "#0BDA51";
    displayedGuessNumber.textContent = number;
    displayedGuessNumber.style.width = "100px";

    if (score > highScore) {
      highScore = score;
      highScoreSelector.textContent = score;
    }
  } else if (guess !== number) {
    if (score > 0) {
      //   description.textContent = guess > number ? "📈 Too high" : "📉 Too Low";
      displayMessage(guess > number ? "📈 Too high" : "📉 Too Low");
      score--;
      liveScore.textContent = score;
    } else {
      displayMessage("😪 You Lost the Game");
    }
  }
});

document.querySelector(".againBtn").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start Guessing......!");
  liveScore.textContent = score;
  displayedGuessNumber.style.width = "80px";
  document.querySelector("body").style.backgroundColor = "#FFFFF0";
  displayedGuessNumber.textContent = "😉";
  document.querySelector(".guessInput").value = "";
});
