const fs = require("fs");

fs.mkdirSync("testDir");
console.log("Director creat cu succes!");

fs.writeFileSync("testDir/fisier.txt", "Academia de Studii Economice din Bucuresti");

fs.unlinkSync("testDir/fisier.txt");
fs.rmdirSync("testDir");

console.log("Director sters cu succes!");