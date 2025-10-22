let formatString = (s, p) => {
    let modified = s;
    for (let key in p) {
        if(modified.includes('{' + key + '}')) {
            modified = modified.replace(new RegExp('\\{' + key + '\\}', 'g'), p[key]);
        }
    }
    return modified;
};

console.log(formatString("Un {substantiv} este {adjectiv}", {substantiv: "calut", adjectiv: "dragut"}));