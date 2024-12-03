let arr = [1,2,3,4,5]

//Operations :
// 1. Push
arr.push(6)
console.log(arr)

// 2. Pop
// Removes the last element from an array and returns it
arr.pop()
console.log(arr)

// 3. Shift
// Removes the first element from an array and returns it
arr.shift()
console.log(arr)

// 4. Unshift
// Adds one or more elements to the beginning of an array and returns the new length of the array
arr.unshift(0)
console.log(arr)

// 5. Splice
// Adds and/or removes elements from an array
arr.splice(2, 0, 2.5)
console.log(arr)

// 6. Slice
// Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)
let newArr = arr.slice(1, 3)
console.log(newArr)