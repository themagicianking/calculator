let total;

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

let firstNumber;

const display = document.querySelector("#display");

const content = document.querySelector("#content");

let storeNumberZero = function () {
    let previous = content.textContent;
    content.textContent = previous + "0";
}

document.getElementById("zero").addEventListener("click", storeNumberZero);


let storeNumberOne = function () {
    let previous = content.textContent;
    content.textContent = previous + "1";
}

document.getElementById("one").addEventListener("click", storeNumberOne);

let storeNumberTwo = function () {
    let previous = content.textContent;
    content.textContent = previous + "2";
}

document.getElementById("two").addEventListener("click", storeNumberTwo);

let storeNumberThree = function () {
    let previous = content.textContent;
    content.textContent = previous + "3";
}

document.getElementById("three").addEventListener("click", storeNumberThree);

let storeNumberFour = function () {
    let previous = content.textContent;
    content.textContent = previous + "4";
}

document.getElementById("four").addEventListener("click", storeNumberFour);

let storeNumberFive = function () {
    let previous = content.textContent;
    content.textContent = previous + "5";
}

document.getElementById("five").addEventListener("click", storeNumberFive);

let storeNumberSix = function () {
    let previous = content.textContent;
    content.textContent = previous + "6";
}

document.getElementById("six").addEventListener("click", storeNumberSix);

let storeNumberSeven = function () {
    let previous = content.textContent;
    content.textContent = previous + "7";
}

document.getElementById("seven").addEventListener("click", storeNumberSeven);

let storeNumberEight = function () {
    let previous = content.textContent;
    content.textContent = previous + "8";
}

document.getElementById("eight").addEventListener("click", storeNumberEight);

let storeNumberNine = function () {
    let previous = content.textContent;
    content.textContent = previous + "9";
}

document.getElementById("nine").addEventListener("click", storeNumberNine);

let operator;

let storeOperatorPlus = function () {
    operator = "add";
    n1 = parseInt(content.textContent);
    content.textContent = "";
}

document.getElementById("plus").addEventListener("click", storeOperatorPlus);

let storeOperatorMinus = function () {
    operator = "subtract";
    n1 = parseInt(content.textContent);
    content.textContent = "";
}

document.getElementById("minus").addEventListener("click", storeOperatorMinus);

let storeOperatorTimes = function () {
    operator = "multiply";
    n1 = parseInt(content.textContent);
    content.textContent = "";
}

document.getElementById("times").addEventListener("click", storeOperatorTimes);

let storeOperatorDivided = function () {
    operator = "divide";
    n1 = parseInt(content.textContent);
    content.textContent = "";
}

document.getElementById("divided").addEventListener("click", storeOperatorDivided);

let calculate = function () {
    n2 = parseInt(content.textContent);
    operate(operator, n1, n2);
    content.textContent = total;
}

document.getElementById("equals").addEventListener("click", calculate);