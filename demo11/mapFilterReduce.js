//Map
let arr1 = [1,2,3,4,5,6,7,8,9,10]
let newArr = arr1.map((i) => {
    console.log(i)
})

//Filter
let arr2 = [1,2,3,4,5,6,7,8,9,10]
let newArr2 = arr2.filter((i) => {
    return i <= 5
})
console.log(newArr2)

//Reduce
let arr3 = [1,2,3,4,5,6,7,8,9,10]
let sum = arr3.reduce((acc, curr) => {
    return acc + curr
}, 0)
console.log(sum)