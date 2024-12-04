// Rest Operator
// Rest operator is used to merge a variable number of arguments into an array.

function randomFunc(a, b, ...c) {
    console.log(a, b, ...c);
}

randomFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);