var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.querySelector("#reset");
var hardBtn = document.querySelector("#hardBtn");
var easyBtn = document.querySelector("#easyBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init () {
	setupModeButtons ();
	setupSquares ();
	reset ();
}

function setupModeButtons () {
		for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener ("click", function() {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares () {
	for (var i = 0; i < squares.length; i++) {

		squares[i].addEventListener ("click", function() {

			var clickedcolor =  this.style.backgroundColor;

			if (pickedColor === clickedcolor) {
				messageDisplay.textContent = "correct";
				changeColor(clickedcolor);
				h1.style.backgroundColor = clickedcolor;
				resetButton.textContent = "Play Again?"
			} else {
				messageDisplay.textContent = "Try again!";
				this.style.backgroundColor = "#232323";
			}
		});
	}
}

function reset () {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	messageDisplay.textContent = "";
	this.textContent = "New colors";

	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
	reset();
})

function changeColor (color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor () {
	var random = Math.floor(Math.random() * numSquares);
	return colors[random];
}

function generateRandomColors (num) {
	var arr =[];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor () {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb("+r+", "+g+", "+b+")";
}