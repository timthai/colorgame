var numOfSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#resetButton');
var mode = document.querySelectorAll('.mode');

init();

function init() {
  
  setupModeButtons();

  setupSquares();

  reset();
}

function setupModeButtons() {
  //Mode button event listeners
  for(var i = 0; i < mode.length; i++) {
   mode[i].addEventListener("click", function() {

     mode[0].classList.remove("selected");
     mode[1].classList.remove("selected");
     this.classList.add("selected");
     this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
     reset();

   });
}

}

function reset() {
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor(); 
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue"
  messageDisplay.textContent = ""
  resetButton.textContent = "New Colors"

  for(var i = 0; i < squares.length; i++) {

    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }

  }

}

function setupSquares() {
  for(var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function () {

      var clickedColor = this.style.backgroundColor;
      //grab color of clicked square
        if(clickedColor === pickedColor){

          resetButton.textContent = "Play again?"
          messageDisplay.textContent = "Correct!";
          changeColors(clickedColor);
          h1.style.backgroundColor = clickedColor;

        } else {

          this.style.backgroundColor = "#232323";
          messageDisplay.textContent = "Try Again";
        }
    });
  }
}

//Reset Button
resetButton.addEventListener('click', function() {

  reset();

});

colorDisplay.textContent = pickedColor;

function changeColors(color) {
  //loop through all squares
  for(var i = 0; i < squares.length; i++) 
  //change each color to match given color
    squares[i].style.backgroundColor = color;
}

function pickColor() {

  var random = Math.floor(Math.random() * colors.length);
  return colors[random];

}

function generateRandomColors(num) {

  var arr = []

  for(var i = 0; i < num; i++) {

    arr.push(randomColor());

  }

  return arr

}

function randomColor() {
//Chooses a red value from 0-255
  var r = Math.floor(Math.random() * 256);
//Chooses a green value from 0-255
  var g = Math.floor(Math.random() * 256);
//Chooses a blue value from 0-255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";

}




