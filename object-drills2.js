'use strict'

const something = {
    foo:1,
    bar:2,
    fum:3,
    quux:4,
    spam:5,
};

for (const key in something){
    console.log(`${key}: ${something[key]}`);
}