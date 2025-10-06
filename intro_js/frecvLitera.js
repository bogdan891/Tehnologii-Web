function calcFrecvLitera() {
    let str = arguments[0]
    let litera = arguments[1];
    let count = 0;
    
    for(let i = 0; i < str.length; i++)
        if(str[i] === litera) count++;

    let frecv = (count / str.length).toFixed(3);
    return frecv * 100;
}

console.log(`Frecventa relativa de aparitie a literei ${process.argv[3]} in cuvantul  "${process.argv[2]}" este de ${calcFrecvLitera(process.argv[2], process.argv[3])}%`);