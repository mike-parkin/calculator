// create vairable to store current entry in
// create an array to push the save the entries in
// create a varible for the total
// create click events for buttons adding the button text into another variable


// if button entry is a number or decimal point it is stored as a string in the entry variable
// if the button 'AC' button is clicked then all varibles are emptied
// if the button 'CE' is clicked then the varible for the current entry becomes ''
// if a mathmatical operator is clicked (x,+,/,-) then the current string is pushed into the array, then the operator is added after
// when the equals is clicked, loop through the array parsing the first element and every second element from there on in to a number varaible
// the loop also checks the operators and perfoms the relative operation for the two numbers on either side of it on the array.
// the answer is then displaed on the screen

console.log("Hello, this is my calculator.js file");

var temp = '';
var equationArr = [];
var total = 0;


document.getElementById('AC').addEventListener('click', function() {clearEntries('AC')});
document.getElementById('CE').addEventListener('click', function() {clearEntries('CE')});
document.getElementById('0').addEventListener('click', function() {addEntry('0')});
document.getElementById('1').addEventListener('click', function() {addEntry('1')});
document.getElementById('2').addEventListener('click', function() {addEntry('2')});
document.getElementById('3').addEventListener('click', function() {addEntry('3')});
document.getElementById('4').addEventListener('click', function() {addEntry('4')});
document.getElementById('5').addEventListener('click', function() {addEntry('5')});
document.getElementById('6').addEventListener('click', function() {addEntry('6')});
document.getElementById('7').addEventListener('click', function() {addEntry('7')});
document.getElementById('8').addEventListener('click', function() {addEntry('8')});
document.getElementById('9').addEventListener('click', function() {addEntry('9')});
document.getElementById('decimal').addEventListener('click', function() {addEntry('.')});
document.getElementById('plus').addEventListener('click', function() {addEntry('+')});
document.getElementById('divide').addEventListener('click', function() {addEntry('/')});
document.getElementById('subtract').addEventListener('click', function() {addEntry('-')});
document.getElementById('x').addEventListener('click', function() {addEntry('*')});
document.getElementById('equals').addEventListener('click', function() {displayAnswer()})


function addEntry(str) {
    if (str === '+' || str === '-' || str === '/' || str === '*') {
        if (document.getElementById('calc-display').value === '') {
            return;
        } else {
            equationArr.push(temp)
            temp = str
            equationArr.push(temp)
            temp= ''
            console.log(equationArr)
        }
    } else {
        temp += str;
        document.getElementById('calc-display').value = temp;
        // console.log(temp);
    }    
}

function clearEntries(str) {
    if (str === 'AC') {
        temp = ''
        equationArr = []
        document.getElementById('calc-display').value = ''
    } else if (str === 'CE') {
        temp = ''
        document.getElementById('calc-display').value = ''
    }
}

function displayAnswer () {
    equationArr.push(temp)
    let answer = Number(equationArr[0]);
    for (let i = 1; i < equationArr.length; i++) {
        nextNum = Number(equationArr[i+1])
        let operator = equationArr[i];

        if (operator === '+') {answer += nextNum}
        else if (operator === '-') {answer -= nextNum}
        else if (operator === '/') {answer /= nextNum}
        else if (operator === '*') {answer *= nextNum}
    }
    temp = ''
    equationArr = []
    document.getElementById('calc-display').value = answer
}