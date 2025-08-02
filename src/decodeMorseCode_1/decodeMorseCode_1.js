const decodeMorse = morseCode =>
  morseCode.trim()
    .split('   ')
    .map(word => word
      .split(' ')
      .map(symbol => MORSE_CODE[symbol] || '')
      .join('')
    )
    .join(' ');

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));