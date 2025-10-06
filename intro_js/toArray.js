function toArray(arg) {
    const array = []
    for (let i = 0; i < arg.length; i++) 
        array.push(Number(arg[i]));
    return array;
}

console.log('Array: ', toArray(process.argv.slice(2)));