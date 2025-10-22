let aniNatere = [2005, 1999, 1985, 2022, 2011, 2000]
let anulCurent = new Date().getFullYear();
let varste = aniNatere.map(an => anulCurent - an);
let varsteMajori = varste.filter(x => x >= 18);

console.log("Anii de nastere: ", aniNatere);
console.log("Varste Majori: ", varsteMajori);