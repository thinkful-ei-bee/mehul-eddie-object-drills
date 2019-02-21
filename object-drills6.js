'use strict';

function decode(msg, word){
    const cipher = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
    };
    const firstLetter = word[0];
    if (cipher.hasOwnProperty(firstLetter)){
        msg +=  word[cipher[firstLetter]];
    }
    else{
        msg += ' ';
    }

    return msg;
}

function decodeWords(words){
    const list = words.split(' ');
    return list.reduce(decode,'');
}

const msg = 'craft block argon meter bells brown croon droop';

console.log(decodeWords(msg));