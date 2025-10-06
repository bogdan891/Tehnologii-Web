const concatStrings = (array) => {
    return array.join(' ');
}

console.log(concatStrings(process.argv.slice(2)));