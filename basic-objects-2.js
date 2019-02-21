'use strict';

function makeStudentReport(data){
    let arr = [];
    for (let i = 0; i < data.length;i++){
        arr.push(`${data[i].name}:${data[i].grade}`)
    }
    return arr;
}

function enrollSummerSchool(students){
    students.forEach(function(student){
        student.status = 'In Summer School';
    });
}

function findById(items,idNum){
    for(let i= 0; i<items.length;i++){
        if (items[i].id === idNum) return items[i];
    }
}

function validateKeys(object,expectedKeys){
    const keys = Object.keys(object)
    if (keys.length !== expectedKeys.length){
        return false;
    }
    for (let i =0; i < expectedKeys.length; i++){
        if (!object.hasOwnProperty(expectedKeys[i])){
            return false;
        }
    }
    return true;
}