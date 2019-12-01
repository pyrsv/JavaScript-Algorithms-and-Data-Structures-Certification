const LOOKUP = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I'
};


function convertNum(digit) {
    let romanNum = '';

    const dividers = Object.entries(LOOKUP).map(([key]) => Number(key)).reverse();
    dividers.forEach(divider => {
        while (digit >= divider) {
            romanNum += LOOKUP[divider]
            digit -= divider
        }
    });

    return romanNum
}

console.log(convertNum(15354)); // XIII

