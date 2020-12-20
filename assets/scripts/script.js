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

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        newResult: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

//Calculator Buttons
function addTwoNumbers(num1, num2) {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+',initialResult,currentResult);
    writeToLog('ADD', initialResult, enteredNumber,currentResult);
}

function subtractTwoNumbers(num1, num2){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-',initialResult,currentResult);
    writeToLog('SUBTRACT', initialResult, enteredNumber,currentResult);
}

function multiplyTwoNumbers(num1, num2){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*',initialResult,currentResult);
    writeToLog('MULTIPLY', initialResult, enteredNumber,currentResult);
}

function divideTwoNumbers(num1, num2){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/',initialResult,currentResult);
    writeToLog('DIVIDE', initialResult, enteredNumber,currentResult);
}

/*
        CODE EXECUTION
*/

addBtn.addEventListener('click', addTwoNumbers); 
subtractBtn.addEventListener('click', subtractTwoNumbers);
multiplyBtn.addEventListener('click', multiplyTwoNumbers);
divideBtn.addEventListener('click', divideTwoNumbers);

