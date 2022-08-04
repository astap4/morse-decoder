const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let word = '';
    let phrase = '';
    let array = [];
    for (let i = 0; i < (expr.length / 10); i++) {
        array[i] = expr.slice(i * 10, ((i + 1) * 10))
        if (array[i] === '**********')
            phrase += ' '
        if (array[i] != '**********') {
            for (let j = 0; j < 10; j = j + 2) {
                if (array[i].slice(j, j + 2) === '10')
                    word += '.'
                else if (array[i].slice(j, j + 2) === '11')
                    word += '-'
            }
            phrase += MORSE_TABLE[word];
            word = '';
        }
    }
    return phrase
}

module.exports = {
    decode
}