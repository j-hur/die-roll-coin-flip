// // COIN FLIP SIMULATOR

// HTML Variables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");

// // Count variables
let numHeads = 0;
let numTails = 0;

// // Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a random number
  let randNum = Math.random();
  console.log(randNum);

  // simulate the coin flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png'>";
    numHeads = numHeads + 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png'>";
    numTails = numTails + 1;
    tailsEl.innerHTML = numTails;
  }
}

// Die flip simulator

// HTML variables
let dieOutputEl = document.getElementById("die-output");
let oneEl = document.getElementById("one-out");
let twoEl = document.getElementById("two-out");
let threeEl = document.getElementById("three-out");
let fourEl = document.getElementById("four-out");
let fiveEl = document.getElementById("five-out");
let sixEl = document.getElementById("six-out");

// Count variables
numOnes = 0;
numTwos = 0;
numThrees = 0;
numFours = 0;
numFives = 0;
numSixes = 0;

// Button event listener (die)
document.getElementById("die-btn").addEventListener("click", rollDie);

function rollDie() {
  let randNum = Math.random();
  console.log(randNum);

  // simulate the die roll
  if (randNum < 0.167) {
    dieOutputEl.innerHTML = "<img src='img/1.png'>";
    numOnes++;
    oneEl.innerHTML = numOnes;
  } else if (randNum < 0.334) {
    dieOutputEl.innerHTML = "<img src='img/2.png'>";
    numTwos++;
    twoEl.innerHTML = numTwos;
  } else if (randNum < 0.501) {
    dieOutputEl.innerHTML = "<img src='img/3.png'>";
    numThrees++;
    threeEl.innerHTML = numThrees;
  } else if (randNum < 0.668) {
    dieOutputEl.innerHTML = "<img src='img/4.png'>";
    numFours++;
    fourEl.innerHTML = numFours;
  } else if (randNum < 0.835) {
    dieOutputEl.innerHTML = "<img src='img/5.png'>";
    numFives++;
    fiveEl.innerHTML = numFives;
  } else {
    dieOutputEl.innerHTML = "<img src='img/6.png'>";
    numSixes++;
    sixEl.innerHTML = numSixes;
  }
}
