//For loop
for(let i=0; i<10; i++) {
    console.log(i);
}

//While loop
let j = 0;
while(j<10) {
    console.log(j);
    j++;
}

//Do while loop
let k = 0;
do {
    console.log(k);
    k++;
} while(k<10);

//For in loop
let obj = {a: 1, b: 2, c: 3};
for(let key in obj) {
    console.log(key, obj[key]);
}

//For of loop
let arr = [1, 2, 3];
for(let val of arr) {
    console.log(val);
}

//For each loop
arr.forEach((val) => {
    console.log(val);
});