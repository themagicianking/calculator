let total;
let n1 = "clear";
let n2 = "clear";
let operator = "clear";
let hasNewOperator = "yes";

let add = function (n1, n2) {
    total = n1 += n2;
    return total;
} 

let subtract = function (n1, n2) {
    total = n1 -= n2;
    return total;
}

let multiply = function (n1, n2) {
    total = n1 *= n2;
    return total;
}

let divide = function (n1, n2) {
    total = n1 /= n2;
    if (total === Infinity) {
        total = "Nice try.";
    }
    return total;
}

let operate = function (operator, n1, n2) {
    if (operator === "add") {
        add(n1, n2);
    }
    else if (operator === "subtract") {
        subtract(n1, n2);
    }
    else if (operator === "multiply") {
        multiply(n1, n2);
    }
    else {
        divide(n1, n2);
    }
}

const display = document.querySelector("#display");
const content = document.querySelector("#content");

const digitKeys = document.querySelectorAll(".digit");

function handleDigit(event) {
    if (hasNewOperator === "yes") {
        content.textContent = event.target.value;
        hasNewOperator = "no";
    }
    else {
    let previous = content.textContent;
    content.textContent = previous + event.target.value;
    }
}

digitKeys.forEach(
    function(key) {
        key.addEventListener("click", handleDigit);
    }
);

const operatorKeys = document.querySelectorAll(".operator");

function handleOperator(event) {
    hasNewOperator = "yes";
    if (n1 === "clear") {
        n1 = parseInt(content.textContent);
        operator = event.target.value;
    }
    else {
        n2 = parseInt(content.textContent);
        operate(operator, n1, n2);
        operator = event.target.value;
        content.textContent = total;
        n1 = total;
    }
}

operatorKeys.forEach(
    function(key) {
        key.addEventListener("click", handleOperator);
    }
);