const {readFileSync, writeFileSync} = require("fs");

function RLE(input) {
    s = String(input);
        if (s.length === 0) return '';

        let result = '';
        let count = 1;

        for (let i = 1; i <= s.length; i++) {
            if (s[i] === s[i - 1]) count++;
            else {
                if(s[i - 1] !== " ") result += "#" + count + "-" + s[i - 1];
                else result += " ";
                count = 1;
            }
        }

        return result;
}

try {
    const content = readFileSync("input.txt", "utf8");
    const compressed = RLE(content);
    writeFileSync("output.txt", compressed, "utf8")
} catch (e) {
    console.log("(!) ERROR (!) ", e.message);
}