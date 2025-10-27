function Power() {
    const cache = {};
    const pow = (a, b) => {
        const key = `${a}^${b}`;

        if(cache.hasOwnProperty(key)) {
            console.log("Found: " + key);
            return cache[key];
        }

        if (b === 0) cache[key] = 1;
        else if (b === 1) cache[key] = a;
        else {
            console.log("Calculating... " + key);
            cache[key] = a * pow(a, b - 1);
        }
        return cache[key];
    }
    return pow;
}

const p = Power();
console.log(p(2, 7));