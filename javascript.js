let add = function (n1, n2) {
    let total = n1 += n2;
    return total;
} 

let subtract = function (n1, n2) {
    let total = n1 -= n2;
    return total;
}

let multiply = function (n1, n2) {
    let total = n1 *= n2;
    return total;
}

let divide = function (n1, n2) {
    let total = n1 /= n2;
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