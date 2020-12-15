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
function getUserInput(){
    return parseInt(userInput.value);
}

//generates and writes calculation log (allows for refactoring repetitive calc code)
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); // from vendor file
}

//Calculator Buttons
function addTwoNumbers(num1, num2) {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+',initialResult,currentResult);
    const logEntry = {
        operation: 'ADD',
        prevResult: initialResult,
        number: enteredNumber,
        newResult: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEntries);
}

function subtractTwoNumbers(num1, num2){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-',initialResult,currentResult);
}

function multiplyTwoNumbers(num1, num2){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*',initialResult,currentResult);
}

function divideTwoNumbers(num1, num2){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/',initialResult,currentResult);
}

/*
        CODE EXECUTION
*/

addBtn.addEventListener('click', addTwoNumbers); 
subtractBtn.addEventListener('click', subtractTwoNumbers);
multiplyBtn.addEventListener('click', multiplyTwoNumbers);
divideBtn.addEventListener('click', divideTwoNumbers);

