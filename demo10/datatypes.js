//Primitive Datatypes
//Int, Long Int, String, boolean, Null, Undefined

//Non-Primitive Datatypes
//Array, Object, Function, Date, RegExp, Set, Map, WeakSet, WeakMap

let obj1 = {
    name: "John",
    age: 30
}

let obj2 = obj1
obj2.name = "Jane" //obj2 me change kiya lekin obj1 me bhi change hoga

obj2 = {
    name: "Jane",
    age: 35
} // Agar pura naya object banayenge to obj1 jo tha wahi rahega

console.log(obj1)
console.log(obj2)