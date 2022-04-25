// Intialize operations object with operations add, subtract, multiply, divide 

const operations = {
	add: (num1, num2) => num1 + num2,
	subtract: (num1, num2) => num1 - num2,
	multiply: (num1, num2) => num1 * num2,
	divide: (num1, num2) => num1 / num2
};

// Operate function calls operations	

function operate(num1, num2, operator) {
	operations.operate(num1, num2);
}

// Initialize display value

const displayValue = document.querySelector("#display");

// Clear button for display

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click",() => {
	displayValue.textContent = 0;
});
