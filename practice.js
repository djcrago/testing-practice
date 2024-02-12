function capitalize(lowerCaseString) {
  const letters = lowerCaseString.split('');

  const firstLetter = letters.shift();
  letters.unshift(firstLetter.toUpperCase());

  return letters.join('');
}

function reverseString(string) {
  const letters = string.split('');

  const lettersReverse = [];

  while (letters.length) {
    lettersReverse.push(letters.pop());
  }

  return lettersReverse.join('');
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

function caesarCipher(string, shiftFactor) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const cipherAlphabet = [];
  for (let i = shiftFactor; i <= 25; i += 1) {
    cipherAlphabet.push(alphabet[i]);
  }
  for (let j = 0; j <= shiftFactor; j += 1) {
    cipherAlphabet.push(alphabet[j]);
  }

  const letters = string.toLowerCase().split('');

  const cipherLetters = [];

  letters.forEach((letter) => {
    const index = alphabet.indexOf(letter);
    if (index) cipherLetters.push(cipherAlphabet[index]);
    if (index === -1) cipherLetters.push(letter);
  });

  return cipherLetters.join('');
}

function analyzeArray(array) {
  let length = array.length;
  let total = array.reduce((prev, cur) => cur + prev, 0);
  let average = total / length;

  let min = array[0];
  array.forEach((number) => {
    if (number < min) min = number;
  });

  let max = 0;
  array.forEach((number) => {
    if (number > max) max = number;
  });

  return {
    average,
    min,
    max,
    length,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
