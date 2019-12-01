let VALUES = {
    'ONE HUNDRED': 10000,
    'TWENTY': 2000,
    'TEN': 1000,
    'FIVE': 500,
    'ONE': 100,
    'QUARTER': 25,
    'DIME': 10,
    'NICKEL': 5,
    'PENNY': 1,
};

function checkCashRegister(price, cash, cid) {
    let answer = {
        status: 'OPEN',
        change: []
    };
    let changeList = [];

    let changeValue = (cash - price) * 100;
    let cidSum = cid
        .map(([, amount]) => amount)
        .reduce((accum, amount) => (accum + amount * 100), 0);

    cid
        .map(([unit, val]) => [unit, val * 100])
        .reverse()
        .forEach(([unit, amount]) => {
            let count = 0;
            let unitValue = VALUES[unit];
            while (changeValue >= VALUES[unit] && amount > 0) {
                changeValue -= unitValue;
                cidSum -= unitValue;
                amount -= unitValue;
                count++
            }
            if (count > 0) {
                changeList.push([unit, VALUES[unit] * count / 100])
            }
        });


    if (cidSum < changeValue || changeValue !== 0) {
        answer.status = 'INSUFFICIENT_FUNDS'
    } else if (cidSum === 0) {
        answer.status = 'CLOSED';
        answer.change = changeList
    } else answer.change = changeList;

    return answer;
}

console.log(checkCashRegister(19.5, 20, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.1], ['QUARTER', 4.25], ['ONE', 90], ['FIVE', 55], ['TEN', 20], ['TWENTY', 60], ['ONE HUNDRED', 100]]));
console.log(checkCashRegister(3.26, 100, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.1], ['QUARTER', 4.25], ['ONE', 90], ['FIVE', 55], ['TEN', 20], ['TWENTY', 60], ['ONE HUNDRED', 100]]));
console.log(checkCashRegister(19.5, 20, [['PENNY', 0.5], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]]));