const LINIE = "M1 directia Dristor 2";

function anuntStatie(statie, peron) {
    return `Urmeaza statia ${statie} cu peronul pe partea ${peron}.`;
}

module.exports = { LINIE, anuntStatie };