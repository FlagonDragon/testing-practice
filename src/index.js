class Calculator {

    add(a, b) {
        return a + b;
    }

    substract(a, b) {
        return a - b;
    }
    
    divide(a, b) {
        return a / b;
    }

    multiply(a, b) {
        return a * b;
    }

}

const calc = new Calculator;

console.log(calc.add(3,4));
console.log(calc.substract(3,4));
console.log(calc.divide(3,4));
console.log(calc.multiply(3,4));
