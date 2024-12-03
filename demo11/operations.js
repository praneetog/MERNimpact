let name = String("praneet kashyap")
// let revName = ""
// let n = name.length
// for(let i=0 ; i<name.length; i++, n--){
//     revName.charAt(i) = name.charAt(n)
// }
// console.log(name.split("").reverse().join(""))
// console.log(name.split(name[0]).join(""));
console.log(name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "))