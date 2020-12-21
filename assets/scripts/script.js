/*
        VARIABLES
*/

const defaultResult = 0;
let currentResult = defaultResult;
let errorMessage = `An error occured the default value is: ${defaultResult}`;
let logEntries = [];

/*
        FUNCTIONS
*/

// Gets input from input field
function getUserInput() {
  return parseInt(userInput.value);
}

//generates and writes calculation log (allows for refactoring repetitive calc code)
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    newResult: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

//Calculator Buttons
function calculateResult(calculationType) {
    if ( //error handling conditional statement
        calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE' ||
        enteredNumber === 0 //you can also do !enteredNumber (fasly/truthy value)
    ){
        return;
    }
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    let mathOperator;
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if (calculationType === 'DIVIDE') {
    currentResult /= enteredNumber;
    mathOperator = '/';
  }

  createAndWriteOutput(mathOperator, initialResult, currentResult);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function addTwoNumbers(num1, num2) {
  calculateResult('ADD');
}

function subtractTwoNumbers(num1, num2) {
  calculateResult('SUBTRACT');
}

function multiplyTwoNumbers(num1, num2) {
  calculateResult('MULTIPLY');
}

function divideTwoNumbers(num1, num2) {
  calculateResult('DIVIDE');
}

/*
        CODE EXECUTION
*/

addBtn.addEventListener('click', addTwoNumbers);
subtractBtn.addEventListener('click', subtractTwoNumbers);
multiplyBtn.addEventListener('click', multiplyTwoNumbers);
divideBtn.addEventListener('click', divideTwoNumbers);
