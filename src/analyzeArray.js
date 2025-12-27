function analyzeArray(arr) {

    const length = arr.length;

    let min = arr[0]
    let max = arr[0];
    let sum = 0;

    arr.forEach(ele => {
        
        if (ele < min) min = ele;
        if (ele > max) max = ele;
        sum += ele;

    });

    return {average: sum / length, min: min, max: max, length: length};

};

module.exports = analyzeArray;