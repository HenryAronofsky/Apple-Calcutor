

		var inputValue = document.querySelector("input").value;
		var calcArray = inputValue.split("");

	setInterval(function() {
		inputValue = document.querySelector("input").value;
		calcArray = inputValue.split("");
	}, 1)

document.addEventListener('keyup', function() {
	document.querySelector("input").focus();
})

function checkIfInputIsValed(input) {
	var character = String.fromCharCode(input)
		var characterNum = Number(character);
		var inputValue = document.querySelector("input").value;
		var calcArray = inputValue.split("");
			// console.log(calcArray)
		// console.log(characterNum, calcArray[0])
		var operators = ["-", "+", divide, multiply];
		// console.log(calcArray[calcArray.length - 1], calcArray[calcArray.length - 2])
		console.log(calcArray[calcArray.length - 1])
		if (calcArray[calcArray.length - 1] === "0" && operators.includes(calcArray[calcArray.length - 2])) {
			if (calcArray[calcArray.length - 1] === "0" && calcArray[calcArray.length - 2] && operators.includes(calcArray[calcArray.length - 2])) {
				document.querySelector("input").value = document.querySelector("input").value.slice(0, -1);
				document.querySelector("input").value = document.querySelector("input").value += characterNum;
				return false;
			} else {
				return false;	
			}		
		} else if (characterNum === 0 && calcArray[0] === "0") {
			if (calcArray.includes(".")) {
				return true;
			} else {
				return false;
			}
		} else if (calcArray[0] === "0" && characterNum != 0) {
			if (calcArray.includes(".")) {
				return true;
			} else {
				document.querySelector("input").value = character;
				return false;
			}
		}
}

function checkIfPecentIsValed() {
	var inputValue = document.querySelector("input").value;
	var calcArray = inputValue.split("");
	    var divide = String.fromCharCode(247);
	    var multiply = String.fromCharCode(215);
	    var operators = ["-", "+", divide, multiply];
	    if (operators.includes(calcArray[calcArray.length - 1]) || calcArray[0] === undefined) {
			return false;
		} else {
			return true;
		}
}

function checkIfButtonIsValed(number) {
	var inputValue = document.querySelector("input").value;
	var calcArray = inputValue.split("");
	var divide = String.fromCharCode(247);
	    var multiply = String.fromCharCode(215);
		var operators = ["-", "+", divide, multiply];
	if (number === 0 && calcArray[0] === "0" ) {
		return true;
	} else {
		return false;
	}
}

function checkIfOperatorIsValedButton(operator) {
	// console.log(0)
	var inputValue = document.querySelector("input").value;
	var calcArray = inputValue.split("");
	    var divide = String.fromCharCode(247);
	    var multiply = String.fromCharCode(215);
		var operators = ["-", "+", divide, multiply];
		// console.log(calcArray, operator)
			if (operator === "-") { console.log(123456789)
				if (calcArray[0] === undefined) {
					return true;
				} else if ((operators.includes(calcArray[calcArray.length - 1]) || calcArray[0] === undefined)) {
					document.querySelector("input").value = document.querySelector("input").value.slice(0, -1);
					return true;
				} else {
					return true;
				}
			} else if ((operators.includes(calcArray[calcArray.length - 1] && !(operators.includes(calcArray[calcArray.length - 2]))) || operators.includes(calcArray[calcArray.length - 2]))) {console.log(0)
				return false;
			} else if ((operators.includes(calcArray[calcArray.length - 1]) || calcArray[0] === undefined)) {
				if (calcArray[1] === undefined) {
					return false
				} else {
					document.querySelector("input").value = document.querySelector("input").value.slice(0, -1);
					return true;
				}
			} else {
				if (calcArray[0] === "-") {
					return false
				} else {
					return true;
				}
			}
} 

function checkIfOperatorIsValedKeyBoard(inputOperator) {
	var inputValue = document.querySelector("input").value;
	var calcArray = inputValue.split("");
	    var divide = String.fromCharCode(247);
	    var multiply = String.fromCharCode(215);
		var operators = ["-", "+", divide, multiply];
		// console.log(calcArray[0] != undefined)
		// console.log(0)
			if (inputOperator === 45) {
				if (calcArray[0] === undefined) {
					return true;
				} else if (operators.includes(calcArray[calcArray.length - 1])) {
					document.querySelector("input").value = (document.querySelector("input").value).slice(0, -1);
					return true;
				} else {
					return true;
				}
			} else if (operators.includes(calcArray[calcArray.length - 1]) || calcArray[0] === undefined && calcArray[0] !== "-") {
				document.querySelector("input").value = (document.querySelector("input").value).slice(0, -1);
	             	if (inputOperator === 247 && calcArray[0] != undefined) {
	             		var divide = String.fromCharCode(247);
	             		document.querySelector("input").value += divide;
	             	} else if (inputOperator === 215 && calcArray[0] != undefined) {
	             		var multiply = String.fromCharCode(215);
	             		document.querySelector("input").value += multiply;
	             	} else if (inputOperator === 43 && calcArray[0] != undefined) {
	             		var subtract = String.fromCharCode(43);
	             		document.querySelector("input").value += subtract;
	             	} else if (inputOperator === 45 && calcArray[0] != undefined) {
	             		var add = String.fromCharCode(45);
	             		document.querySelector("input").value += add;
	             	}
					return false;
			} else {
				// document.querySelector("input").value = (document.querySelector("input").value).slice(0, -1);
				return true;
			}
} 

function checkIfDecimalIsValed() {
	var inputValue = document.querySelector("input").value;
	var calcArray = inputValue.split("");
	    var divide = String.fromCharCode(247);
	    var multiply = String.fromCharCode(215);
	    var add = String.fromCharCode(43);
	    var subtract = String.fromCharCode(45);
		var operators = [subtract, add, divide, multiply];
			var operatorPlusMinus = inputValue.split(/[-+]/);
			var operatorMultiply = inputValue.split(multiply);
			var operatorDivide = inputValue.split(divide);
			// console.log(operatorCalcArraySplitPlusMinus, operatorCalcArraySplitMultiply, operatorCalcArraySplitDivide)
	if (operators.includes(calcArray[calcArray.length - 1]) || calcArray[calcArray.length - 1] === "." || (calcArray[calcArray.length - 1] === undefined) || (calcArray.includes(".")) && (operatorDivide[operatorDivide.length - 1].includes(".") && operatorMultiply[operatorMultiply.length - 1].includes(".") && operatorPlusMinus[operatorPlusMinus.length - 1].includes("."))) {
			return false;
		} else {
			return true;
		}
}


//input field
function restrictAlphabets(e) {
	  var x = e.which;
	  // console.log(x);
             if (((x >= 48 && x <= 57) || (x >= 45 && x <= 47) || (x >= 42 && x <= 43)) || (x === 37)){
             	if (x === 47 && checkIfOperatorIsValedKeyBoard(247)) {
             		var divide = String.fromCharCode(247);
             		document.querySelector("input").value += divide;
             		return false;
             	} else if (x === 42 && checkIfOperatorIsValedKeyBoard(215)) {
             		var multiply = String.fromCharCode(215);
             		document.querySelector("input").value += multiply;
             		return false;
             	} else if (x === 42 || x === 47){
             		return false;
             	} else if (x === 43 && checkIfOperatorIsValedKeyBoard(43)) {
             		var subtract = String.fromCharCode(43);
             		document.querySelector("input").value += subtract;
             		return false;
             	} else if (x === 45 && checkIfOperatorIsValedKeyBoard(45)) {
             		// document.querySelector("input").value = (document.querySelector("input").value).slice(0, -1);
             		var add = String.fromCharCode(45);
             		document.querySelector("input").value += add;
             		return false;
             	} else if (x === 43 || x === 45) {
             		return false;
             	} else if (x === 46) {
             		return checkIfDecimalIsValed();
             	} else if (x === 37) {
             		return checkIfPecentIsValed();
             	} else {
                	return checkIfInputIsValed(x);
             	}
             } else {
                 return false;
             }
}

//numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];


numbers.forEach(function(number) {
	document.querySelector('#number' + number).addEventListener('click', function() {
			var operators = ["-", "+", divide, multiply];
			// console.log(calcArray[0], inputValue)
			// operators.includes(calcArray[calcArray.length - 1])
		if (calcArray[calcArray.length - 1] === "0" && operators.includes(calcArray[calcArray.length - 2])) {
			if (calcArray[calcArray.length - 1] === "0" && calcArray[calcArray.length - 2] && operators.includes(calcArray[calcArray.length - 2])) {
				document.querySelector("input").value = document.querySelector("input").value.slice(0, -1);
				document.querySelector("input").value = document.querySelector("input").value += number;
				return false;
			} else {
				return false;	
			}		
		} else if (number === 0) {
			if (calcArray[0] !== "0" || inputValue.includes(".")) {
				document.querySelector("input").value += number;
			}
		} else if (calcArray[0] === "0" && inputValue.includes(".")) {console.log(1)
			document.querySelector("input").value += number;
		} else if (inputValue.includes(".") || calcArray[0] != "0") {
			document.querySelector("input").value += number;
		} else {
			document.querySelector("input").value = number;
		}
	})
});

// operators
document.querySelector('#divide').addEventListener('click', function() {
		var operators = ["-", "+", divide, multiply];
        var divide = String.fromCharCode(247);
        var inputValue = document.querySelector("input").value;
		var calcArray = inputValue.split("");
		console.log(checkIfOperatorIsValedButton(divide))
		if (checkIfOperatorIsValedButton(divide)) {
			document.querySelector("input").value += divide;
		} else if (calcArray[0] === undefined) {

		} else if (operators.includes(calcArray[calcArray.length - 1] || operators.includes(calcArray[calcArray.length - 2]))){
			
		} else if (calcArray[1] !== undefined) {
			document.querySelector("input").value = inputValue.slice(0, -1) + divide;
		}
});

document.querySelector('#multiply').addEventListener('click', function() {
		var operators = ["-", "+", divide, multiply];
        var multiply = String.fromCharCode(215);
        var inputValue = document.querySelector("input").value;
		var calcArray = inputValue.split("");
		if (checkIfOperatorIsValedButton(multiply)) {
			document.querySelector("input").value += multiply;
		} else if (calcArray[0] === undefined) {

		} else if (operators.includes(calcArray[calcArray.length - 1] || operators.includes(calcArray[calcArray.length - 2]))){

		} else if (calcArray[1] !== undefined) {
			document.querySelector("input").value += multiply;
		}
});

document.querySelector('#subtract').addEventListener('click', function() {
		var operators = ["-", "+", divide, multiply];
        var inputValue = document.querySelector("input").value;
		var calcArray = inputValue.split("");
		// console.log(90)
		if (checkIfOperatorIsValedButton("-")) {
			document.querySelector("input").value += "-";
		} else if (calcArray[0] === undefined) {

		} else if (operators.includes(calcArray[calcArray.length - 1] || operators.includes(calcArray[calcArray.length - 2]))){

		} else if (calcArray[1] !== undefined) {
			document.querySelector("input").value += "-";
		}
});

document.querySelector('#add').addEventListener('click', function() {
		var operators = ["-", "+", divide, multiply];
        var inputValue = document.querySelector("input").value;
		var calcArray = inputValue.split("");
	// console.log(checkIfOperatorIsValed())
	if (checkIfOperatorIsValedButton("+")) {
		document.querySelector("input").value += "+";
	} else if (calcArray[0] === undefined) {

	} else if (operators.includes(calcArray[calcArray.length - 1] || operators.includes(calcArray[calcArray.length - 2]))){

	} else if (calcArray[1] !== undefined) {
		document.querySelector("input").value += "+";
	}
});

document.querySelector('#decimal').addEventListener('click', function() {
	if (checkIfDecimalIsValed()) {
		document.querySelector("input").value += ".";
	}
});

//clear, percent, and value changer
document.querySelector('#ac').addEventListener('click', function() {
		document.querySelector("input").value = "";
});

document.querySelector('#valueSwitcher').addEventListener('click', function() {
	// debugger;
	var inputValue = document.querySelector("input").value;
	var calcArray = inputValue.split("");
	var calcArrayReverse = inputValue.split("").reverse();
	var divide = String.fromCharCode(247);
	var multiply = String.fromCharCode(215);
	// console.log(calcArrayReverse)
	// calcArrayReverse.forEach(function(char) {
		// if (char === "-") {
			var indexNeg = calcArrayReverse.indexOf("-");
			var indexPos = calcArrayReverse.indexOf("+");

			var negativeIncrament = 0;
			calcArray.forEach(function(character) {
				if (character === "-") {
					negativeIncrament++;
				}
			});

			calcArrayReverse.some(function(i) {
				if (i === "-") {
					// debugger
					var index = calcArrayReverse.indexOf(i);
					if (calcArrayReverse[index + 1] === "-") {
						calcArrayReverse[index] = "";
						var finalString = calcArrayReverse.reverse().join("");
						document.querySelector("input").value = finalString;
					} else if (calcArrayReverse[index - 1] === "+") {
						calcArrayReverse[index - 1] = "";
						var finalString = calcArrayReverse.reverse().join("");
						document.querySelector("input").value = finalString;
					} else if (calcArrayReverse[index + 1] === divide || calcArrayReverse[index + 1] === multiply) {
						calcArrayReverse[index] = "";
						var finalString = calcArrayReverse.reverse().join("");
						document.querySelector("input").value = finalString;
					} else if (calcArrayReverse[index + 1] === undefined) {
						document.querySelector("input").value = document.querySelector("input").value.substr(1);
						return true;
					} else {
						calcArrayReverse[index] = "+";
						var finalString = calcArrayReverse.reverse().join("");
						document.querySelector("input").value = finalString;
					}
					return true;
				} else if (i === "+") {
					// debugger;
					var index = calcArrayReverse.indexOf(i);
					calcArrayReverse[index] = "-";
					var finalString = calcArrayReverse.reverse().join("");
					document.querySelector("input").value = finalString;
 					return true;
				} else if (i === divide) {
					var index = calcArrayReverse.indexOf(i);
					// console.log(calcArrayReverse[index].includes('-'), calcArrayReverse[index])
					if (calcArrayReverse[index].includes('-')) {
					} else {
						calcArrayReverse[index] = divide + "-";
						// console.log('l')
					}
					var finalString = calcArrayReverse.reverse().join("");
					document.querySelector("input").value = finalString;
					return true;
				} else if (i === multiply) {
					var index = calcArrayReverse.indexOf(i);
					// console.log(calcArrayReverse[index].includes('-'), calcArrayReverse[index])
					if (calcArrayReverse[index].includes('-')) {
					} else {
						calcArrayReverse[index] = multiply + "-";
						// console.log('l')
					}
					var finalString = calcArrayReverse.reverse().join("");
					document.querySelector("input").value = finalString;
					return true;
				} else if (negativeIncrament === 0) {
					if (inputValue.charAt(0) === "-"  && negativeIncrament === 0) {
						if (calcArray.includes(multiply) || calcArray.includes(multiply) || calcArray.includes("+") || calcArray.includes("-")) {

						} else {
							document.querySelector("input").value = document.querySelector("input").value.substr(1);
							return true;
						}
					} else if (calcArray[0] != undefined  && negativeIncrament === 0) {
						if (calcArray.includes(multiply) || calcArray.includes(multiply) || calcArray.includes("+") || calcArray.includes("-")) {

						} else {
							document.querySelector("input").value = "-" + document.querySelector("input").value;
							return true;
						}
					}
				}
			})
				// console.log(negativeIncrament)
	})

document.querySelector('#percent').addEventListener('click', function() {
	if (checkIfPecentIsValed()) {
		document.querySelector("input").value = document.querySelector("input").value + "%";
	}
})

//Compute! Final Issue!

function computeAnswer() {
	// debugger;
	// console.log(10000000)
	var inputValue = document.querySelector("input").value;
	var divide = String.fromCharCode(247);
	var multiply = String.fromCharCode(215);
	var replaceString = inputValue.split(multiply).join("*").split(divide).join("/").split("%").join("/100");
	console.log(replaceString)
	var operators = ["-", "+", divide, multiply];
	var replaceStringArray = replaceString.split()
		var evaluation = eval(replaceString);
		if (operators.includes(calcArray[calcArray.length - 1])) {
			alert('Please end input using a number')
		} else if (evaluation === undefined) {
			document.querySelector("input").value = "";
		} else {
			document.querySelector("input").value = evaluation;
		}
}

document.addEventListener('keypress', function(e) {
	if (e.which === 13 || e.keyCode === 61) {
		computeAnswer();
	}
});

document.querySelector('#equals').addEventListener('click', function() {
	computeAnswer();
});










































