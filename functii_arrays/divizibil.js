let arg = process.argv.slice(2);
let div = Number(arg.pop());
let array = arg.map(Number);

if (array.some(isNaN) || isNaN(div)) {
    console.log("EROARE! Introdu doar NUMERE!");
    process.exit(1);
}

let sum = array.map(x => (x % div === 0 ? x : 0)).reduce((a, b) => a + b, 0);

console.log(`Suma elementelor divizibile cu ${div} din array este ${sum}.`);