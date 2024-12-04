let arr = [55, 14, 22, 13, 4, 35, 56, 17, 8, 99]

//Sorting in ascending order
for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}
console.log(arr)

//Sorting in descending order
for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
        if(arr[i] < arr[j]){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}
console.log(arr)


//Same can be written as

arr.sort((a, b) => a - b) //Sorting in ascending order
console.log(arr)
arr.sort((a, b) => b - a) //Sorting in descending order
console.log(arr)