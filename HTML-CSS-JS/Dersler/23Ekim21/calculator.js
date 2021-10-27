// program for a simple calculator

// take the operator input
// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// // take the operand input
// const number1 = parseFloat(prompt('Enter first number: '));

// const number2 = parseFloat(prompt('Enter second number: '));



function check() {
    let number1 = document.querySelector("#first-number").value;
    let operator = document.querySelector("#operator").value;
    let number2 = document.querySelector("#second-number").value;

    let result;
    // using if...else if... else
    if (operator == '+') {
        result = number1 + number2;
        document.querySelector("#validation").innerHTML = `${number1} + ${number2} = ${result}`;
    } else if (operator == '-') {
        result = number1 - number2;
        document.querySelector("#validation").innerHTML = `${number1} - ${number2} = ${result}`;
    } else if (operator == '*') {
        result = number1 * number2;
        document.querySelector("#validation").innerHTML = `${number1} * ${number2} = ${result}`;
    } else {
        result = number1 / number2;
        document.querySelector("#validation").innerHTML = `${number1} / ${number2} = ${result}`;
    }

    // display the result
    console.log(`${number1} ${operator} ${number2} = ${result}`);
}
// const pattern = /^[^@\s]+@[^@\s]+\.[^@\.\s]+$/i;

// function check() {
//     let email = document.querySelector("#mail").value;
//     console.log(email);
//     if (pattern.test(email)) {
//         console.log("hello");
//         document.querySelector("#validation").innerHTML = `${email} is valid`;
//     } else {
//         document.querySelector("#validation").innerHTML = `${email} not valid`;
//     }
// }