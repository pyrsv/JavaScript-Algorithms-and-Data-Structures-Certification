let VALUES = {
    'ONE HUNDRED': 100,
    'TWENTY': 20,
    'TEN': 10,
    'FIVE': 5,
    'ONE': 1,
    'QUARTER': 0.25,
    'DIME': 0.1,
    'NICKEL': 0.05,
    'PENNY': 0.01,
};

function checkCashRegister(price, cash, cid) {
    let answer = {
        status: 'OPEN',
        change: []
    };
    let changeList = [];

    let changeValue = cash - price;
    let cidSum = cid
        .map(([, amount]) => amount)
        .reduce((accum, amount) => (accum * 100 + amount * 100) / 100, 0);
    // console.log('change val', changeValue);

    cid.reverse().forEach(([unit, amount]) => {
        // console.log(unit);
        let count = 0;
        let unitValue = VALUES[unit];

        // console.log(VALUES[unit]);
        // if (changeValue >= VALUES[unit]) {
        //     console.log(changeValue , unit, amount);
        // }

        while (changeValue >= VALUES[unit] && amount > 0) {
            // console.log('a');
            console.log('unitValue', unitValue);
            changeValue -= unitValue;
            cidSum -= unitValue;
            amount -= unitValue;
            console.log(amount);

            count++
        }
        if (count > 0) {
            changeList.push([unit, VALUES[unit] * count])
        }
    });

    // console.log('change list:', changeList);

    if (cidSum < changeValue || changeValue !== 0) {
        answer.status = 'INSUFFICIENT_FUNDS'
    } else if (cidSum === 0) {
        answer.status = 'CLOSED';
        answer.change = changeList
    } else answer.change = changeList;
    // if (changeValue < 0)


    // console.log(changeValue);
    // console.log(cidSum);

    return answer;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
