var screen = document.getElementById("calc-screen");
var numBtns = document.getElementsByClassName("number-button");  //returns HTML Collec, use Array.from() to convert to array
var plusBtn = document.getElementById("addition-button");
var minusBtn = document.getElementById("subtraction-button");
var multBtn = document.getElementById("multiplication-button");
var dvsBtn = document.getElementById("division-button");
var clearBtn = document.getElementById("clear-button");
var equalsBtn = document.getElementById("equals-button");
// var two = document.querySelector('#two'); // returns the first one it finds, .querySelectorAll() for NodeList
const screenLog = [];
var currentCalculation = 0;
var buttonLog = [];

window.onload = function () {
	Array.from(numBtns).forEach(function(btn) { // iterate number buttons to add an input value from its text content when clicked
		btn.onclick = function() {
			inputNumber(btn.textContent); //textContent for all text & Node objects, innerText for HTML Collection
		};
	});
	plusBtn.onclick = function() {
		add(screen.textContent);
	};
	minusBtn.onclick = function() {
		subtract(screen.textContent);
	};
	multBtn.onclick = function() {
		multiply(screen.textContent);
	};
	dvsBtn.onclick = function() {
		divide(screen.textContent);
	};
	clearBtn.onclick = clearScreen;
	equalsBtn.onclick = solveCalculation;
}

function inputNumber (num) {
	if (screen.textContent === "0") {
		screen.textContent = num;
	} else {
		screen.textContent += num; 
	}
}

function clearScreen () {
	screenLog.unshift(screen.textContent);
	screen.innerText = "0";
	currentCalculation = 0;
}

function add (num) {
	clearScreen(); // this resets currCalc to 0; but since curr value is stored in num, we don't lose it
	currentCalculation += parseFloat(num, 10);
	buttonLog.push("+");
}

function subtract (num) {
	clearScreen();
	currentCalculation += parseFloat(num, 10);
	buttonLog.push("-");
}

function multiply (num) {
	clearScreen();
	currentCalculation += parseFloat(num, 10);
	buttonLog.push("x");
}

function divide (num) {
	clearScreen();
	currentCalculation += parseFloat(num, 10);
	buttonLog.push("/");
}

function solveCalculation () {
	switch (buttonLog[buttonLog.length-1]) {
		case "+":
			currentCalculation += parseFloat(screen.textContent, 10);
			break;
		case "-":
			currentCalculation -= parseFloat(screen.textContent, 10);
			break;
		case "x":
			currentCalculation *= parseFloat(screen.textContent, 10);
			break;
		case "/":
			currentCalculation /= parseFloat(screen.textContent, 10);
			break;
		default:
			screen.textContent = currentCalculation;
	}
	screen.textContent = currentCalculation;
}