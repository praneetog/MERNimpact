//3 ways to declare a variable
// var, let, const

// var - Re-declare and update is possible
var name = "John";

name = "Doe";
var name = "Smith";
//both are possible 
//value will change in both cases

console.log(name);

// let - Re-declare is not possible but update is possible
let name1 = "John";
name1 = "Doe"; //value will change
//let name1 = "Smith"; - this gives error

console.log(name1);

// const - Re-declare and update is not possible
const name2 = "John";
//name2 = "Doe"; - this gives error
//const name2 = "Smith"; - this also gives error

console.log(name2);