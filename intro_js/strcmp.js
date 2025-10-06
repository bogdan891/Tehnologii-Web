function countDiffChar(str1, str2) {
    if(str1.length !== str2.length) return -1;
    
    let count = 0;

    for(let i = 0; i < str1.length; i++) 
            if(!str2.includes(str1[i])) count++;

    for(let i = 0; i < str1.length; i++) 
            if(!str1.includes(str2[i])) count++;

    return count;
}

console.log(countDiffChar(process.argv[2], process.argv[3]));