let array = [1, 2, 3, 4, 5];

let reduce = (arrya, reducer, initValue) => {
    let acc = initValue;
    for (let el of array) {
        acc = reducer(acc, el);
    }
    return acc;
}

console.log(reduce(array, (acc, x) => acc + x ** 2, 0));