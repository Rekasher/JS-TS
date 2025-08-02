const validatePIN = pin => !!pin.match(/^\d{4}$|^\d{6}$/);

console.log(validatePIN('1234'));
console.log(validatePIN('12345'));
console.log(validatePIN('a234'));
console.log(validatePIN('-1.234'));
console.log(validatePIN('000000'));
console.log(validatePIN('098765'));
