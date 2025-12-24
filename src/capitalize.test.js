const capitalize = require('./capitalize');

console.log(capitalize('moscow'));


test('moscow to Moscow', () => {

    expect(capitalize('moscow')).toBe('Moscow');

});

test('PRAGUE to PRAGUE', () => {

    expect(capitalize('PRAGUE')).toBe('PRAGUE');

});

test('dÜSSELDORF to DÜSSELDORF', () => {

    expect(capitalize('dÜSSELDORF')).toBe('DÜSSELDORF');

});