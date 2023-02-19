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
    // write your solution here
    let str=[];
    let str1=[];
    let str2=[];
    for (let i = 0; i < expr.length/10; i++){
      str1.push(expr.slice(i*10,i*10+10));
      str.push(str1[i].replace(/11/g,'-').replace(/10/g,'.').replace(/00/g,''));
    }
    for (let i = 0; i < str.length; i++){
      if(str[i]==="**********"){str2=`${str2} `;
    }else{
      str2=`${str2}${MORSE_TABLE[str[i]]}`;
    }
    }
    return str2;
}

module.exports = {
    decode
}