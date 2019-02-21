'use strict';

const person1 = {
    name: 'Blob',
    jobTitle: 'Blob',
};

const person2 = {
    name: 'Bob',
    jobTitle: 'Coder',
};

const person3 = {
    name: 'Bill',
    jobTitle: 'Builder',
};

const arr =[person1,person2,person3];

for(let i = 0; i < arr.length; i++){
    console.log(`${arr[i].name}: ${arr[i].jobTitle}`);
}