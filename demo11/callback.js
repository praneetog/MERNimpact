setTimeout(() => {
    console.log('1');
    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('3');
            setTimeout(() => {
                console.log('4');
            }, 1000)
        }, 2000)
    }, 3000)
}, 4000)