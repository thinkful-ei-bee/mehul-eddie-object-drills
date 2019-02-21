'use strict';

const person1 = {
  name: 'Blob',
  jobTitle: 'Blob',
};

const person2 = {
  name: 'Bob',
  jobTitle: 'Coder',
  boss:'Rick',
};

const person3 = {
  name: 'Bill',
  jobTitle: 'Builder',
  boss:'Ed',
};

const arr =[person1,person2,person3];

for(let i = 0; i < arr.length; i++){
  if(arr[i].boss !== undefined)
  {console.log(`${arr[i].jobTitle} ${arr[i].name} reports to ${arr[i].boss}`);
  }
  else
  {
    console.log(`${arr[i].jobTitle} ${arr[i].name} doesn't report to anybody`);
  }
}