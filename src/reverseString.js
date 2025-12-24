function reverseString(str) {

    let arr = [];

    for (i = str.length - 1; i >= 0; i--) {
        
        arr.push(str.slice(i, i+1));

    }

    return arr.join('');

};

module.exports = reverseString;