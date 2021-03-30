function mult(a, b) {
    return a * b;
}

const multByTwo = mult.bind(this, 2);

console.log(multByTwo(2));