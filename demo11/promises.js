let promiseOne = new Promise((res, rej) => {
    res('Promise One resolved');
})

let prmoiseTwo = promiseOne.then((data) => {
    console.log(data);
    return new Promise((res, rej) => {
        res('Promise Two resolved');
    })
})

prmoiseTwo.then((data) => {
    console.log(data);
})
