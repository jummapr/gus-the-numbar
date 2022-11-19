console.log("Hello World!");

let computerguess;
let userguess = [];
let btn_1 = document.getElementById("btn-1");
let btn_2 = document.getElementById("btn-2");
let para = document.getElementById("para");
let inputbox = document.getElementById("input-box");
let new_game = document.getElementById("new_game");

const init = () => {
  computerguess = Math.floor(Math.random() * 100);

  document.getElementById("game-button").style.display = "none";
  document.getElementById("gameare").style.display = "none";
};

const startgame = () => {
  document.getElementById("welcomescreen").style.display = "none";
  document.getElementById("gameare").style.display = "block";
};

const stratnewgame = () => {
  document.getElementById("game-button").style.display = "inline";
  (document.getElementById("input-box").setAttribute = "disebal"), "true";
};
const newgame = () => {
  window.location.reload();
};

// main logic strat
const cum = () => {
  const usernumbar = Number(document.getElementById("input-box").value);
  userguess = [...userguess, usernumbar];
  document.getElementById("info-gues").innerHTML = userguess;

  // value chek

  if (userguess.length < maxguess) {
    if (usernumbar > computerguess) {
      para.innerHTML = "Your High Guess 😲";
      inputbox.value = "";
    } else if (usernumbar < computerguess) {
      para.innerHTML = "Your Low Guess 😥";
      inputbox.value = "";
    } else {
      para.innerHTML = "Ha.. Ha.. Ha.. Your Winer 😁";
      inputbox.value = "";
      stratnewgame();
    }
  } else {
    if (usernumbar > computerguess) {
      para.innerHTML = `your loose  it's curect numbar was ${computerguess}`;
      inputbox.value = "";
      stratnewgame();
    } else if (usernumbar < computerguess) {
      para.innerHTML = `your loose || it's curect numbar was ${computerguess}`;
      inputbox.value = "";
      stratnewgame();
    } else {
      para.innerHTML = "Ha.. Ha.. Ha.. Your Winer 😁";
      inputbox.value = "";
      stratnewgame();
    }
  }

  document.getElementById("info-num").innerHTML = userguess.length;
};

btn_1.addEventListener("click", () => {
  maxguess = 10;
  startgame();
});
btn_2.addEventListener("click", () => {
  maxguess = 5;
  startgame();
});
