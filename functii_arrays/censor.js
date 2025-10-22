let dict = ['este']
let txt = 'JavaScript este minunat'

let censorText = (txt, dict) => {
    return txt.split(' ').map(w => {
        if (dict.includes(w)) {
            if (w.length > 2) {
                let middle = '*'.repeat(w.length - 2);
                return w[0] + middle + w[w.length - 1];
            } else {
                return '*'.repeat(w.length - 2);
            }
        }
        return w;
    })
    .join(' ');
};

console.log(censorText(txt, dict));