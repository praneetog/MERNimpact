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