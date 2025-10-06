function interclasare(){
    let arr1 = arguments[0];
    let arr2 = arguments[1];

    arr2.forEach(x => arr1.push(x));

    arr1.sort();

    return arr1;
}

let arr1 = ['a', 'b', 0];
let arr2 = [1, 2, 'd'];

console.log(interclasare(arr1, arr2));