function yehh(fatherAge, sonAge) {
    let yearsAgo = 0;

    while (fatherAge !== 2 * sonAge) {
        fatherAge++;
        sonAge++;
        yearsAgo++;
}
    
    return yearsAgo;
}

const currentFatherAge = 107;
const currentSonAge = 11;

const result = yehh(currentFatherAge, currentSonAge);

console.log( `${result}`);

