console.log('V'.charCodeAt(0) + 26 <= 90 ? 'V'.charCodeAt(0) + 13 : String.fromCharCode(64 + (13 - (90 - ('V'.charCodeAt(0))))));


function rot13(str) { // LBH QVQ VG!
    const FIRST_CHAR_CODE = 'A'.charCodeAt(0);
    const LAST_CHAR_CODE = 'Z'.charCodeAt(0);
    return str
        .split('')
        .map(char => {
            if (!/\W/.test(char)) {
                const charCode = char.charCodeAt(0);
                return String.fromCharCode(charCode + 13 <= LAST_CHAR_CODE ? charCode + 13 : FIRST_CHAR_CODE + (13 - (LAST_CHAR_CODE - charCode)) - 1)
            } else return char
        })
        .join('')
}

console.log(rot13('SERR PBQR PNZC'));
