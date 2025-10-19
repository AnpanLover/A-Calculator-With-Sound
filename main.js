var mySound;
let bar = document.getElementById("result")

function ring() {
  mySound = new sound("/ring.mp3");
  mySound.play();
}

function boing() {
  mySound = new sound("/Spring.mp3");
  mySound.play();
}

function newOperator(input) {
  
  bar.innerHTML += input.toString();
  mySound = new sound("/Cursor1.ogg");
  mySound.play();
}

function calculate() {
  try {
    bar.innerHTML = eval(bar.innerHTML);
    mySound = new sound("/Cursor1.ogg");
    mySound.play();
  }
  catch (error) {
    bar.innerHTML = "ERROR"
  }
}

function clearing() {
  bar.innerHTML = "";
  mySound = new sound("/Cursor1.ogg");
  mySound.play();
}

function backspace() {
  let text = bar.innerHTML;
  bar.innerHTML = text.replace(text.slice(-1), "")
  mySound = new sound("/Cursor1.ogg");
  mySound.play();
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function() {
    this.sound.play();
  }
  this.stop = function() {
    this.sound.pause();
  }
}