const analyzeArray = require('./analyzeArray')

test('[1, 8, 3, 4, 2, 6] average', () => {

    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);

});

test('[1, 8, 3, 4, 2, 6] min', () => {

    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);

});

test('[1, 8, 3, 4, 2, 6] max', () => {

    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);

});

test('[1, 8, 3, 4, 2, 6] length', () => {

    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);

});

test('[1, 8, 3, 4, 2, 6] obj', () => {

    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    "average": 4,
    "min": 1,
    "max": 8,
    "length": 6
    });

});