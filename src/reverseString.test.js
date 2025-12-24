const reverseString = require('./reverseString')

test('niW to Win', () => {

    expect(reverseString('niW')).toBe('Win');

});

test('420rAwRxD to DxRwAr024', () => {

    expect(reverseString('420rAwRxD')).toBe('DxRwAr024');

});

test('saippuakivikauppias to saippuakivikauppias', () => {

    expect(reverseString('saippuakivikauppias')).toBe('saippuakivikauppias');

});