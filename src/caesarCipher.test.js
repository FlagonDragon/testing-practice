const caesarCipher = require('./caesarCipher');

test('xyz with shift 3', () => {

    expect(caesarCipher('xyz', 3)).toBe('abc');

});

test('HeLLo with shift 3', () => {

    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');

});

test('Hello, World! with shift 3', () => {

    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');

});

test('Beware the Ides of March. with shift 7', () => {

    expect(caesarCipher('Beware the Ides of March.', 7)).toBe('Ildhyl aol Pklz vm Thyjo.');

});