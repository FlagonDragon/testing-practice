const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function makeShift(shift) {

    let abcShift = [];

    let reset = false;

    for (i = 0; i < abc.length; i++) {
        

        if (i + shift == 26 && reset == false) {
            i = 0;
            reset = true;
        }                

        if (reset == false) {
            abcShift.push(abc[i + shift]);
        } else if (reset == true) {    
            abcShift.push(abc[i]);
        }

        if (abcShift.length == 26) {
            break;
        }

    }

    return abcShift;

}

function caesarCipher(str, shift) {


    let abcShift = makeShift(shift);

    let arr = [];
    let upperCases = []

    for (i = 0; i < str.length; i++) {

        if (str.at(i) == str.at(i).toUpperCase()) {
            upperCases.push(i);
        }

        arr.push(str.at(i).toLowerCase());

    }

    let newArr = [];

    for (i = 0; i < arr.length; i++) {

        if (!abc.includes(arr[i])) {

            // console.log(arr[i].toLowerCase());
            
            newArr.push(arr[i]);

        } else {

            // console.log(arr[i]);
            
            newArr.push(abcShift[abc.indexOf(arr[i])]);        

        }

    }

    for (i = 0; i < upperCases.length; i++) {
        newArr[upperCases[i]] = newArr[upperCases[i]].toUpperCase();
    }

    console.log(upperCases);
    

    return newArr.join('');

};

module.exports = caesarCipher;