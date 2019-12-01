function palindrome(str) {
    const filteredStr = str.match(/[^_\W]/g).map(char => char.toLowerCase());
    console.log(filteredStr.join(''));
    return  filteredStr.join('') === filteredStr.reverse().join('')
}


console.log(palindrome('_eye'))

console.log('asdb ^&*()'.match(/\w/g));