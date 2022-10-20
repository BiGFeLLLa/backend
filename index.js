// console.log('Akash');
// const number = 1;
// console.log(number)

// const myFunction = () =>{
//     console.log("frome myFunction")
// }

// myFunction();

// console log.number
// const studentObject ={
//     NAME: "Akash",
//     cgpa: 0,
//     Address: {
//         city: "Jorethang",
//         state: "Sikkim",
//         district: "South"
//     },
//     "Favorite Hobby": "Basketball"
// }
// console.log(studentObject.NAME)
// console.log(studentObject.cgpa)
// console.log(studentObject.Address.city)
// console.log(studentObject.Address.state)
// console.log(studentObject.Address.district)
// console.log(studentObject["Favorite Hobby"])

// const {NAME} = studentObject
// console.log(NAME)


const { toPlainobject } = require('lodash');
const parser = require('simple-excel-to-json')
const doc = parser.parseXls2Json('./Example.xlsx')[0]; 
const json2xls = require("json2xls");
const fs = require("fs");

// console.log(doc)

const totalCgpa = doc.reduce((prevValue, currentValue) =>{
    console.log(prevValue)
    prevValue += currentValue.CGPA;
    return prevValue;
}, 0)

const averageCgpa = totalCgpa / doc.length;
console.log(averageCgpa)

const gradedDocument = doc.map((student) => {
    if (student.CGPA >= 9.5) {
        student.GRADE = "A+"
    } else if (student.CGPA < 9.5 && student.CGPA >= 9){
        student.GRADE = "A"
    }else if (student.CGPA < 9 && student.CGPA >= 8.5){
        student.GRADE = "B"
    }else if (student.CGPA < 8.5 && student.CGPA >= 8){
        student.GRADE = "C"
    }else if (student.CGPA < 8 && student.CGPA >= 7.5){
        student.GRADE = "D"
    }else if (student.CGPA < 7.5 && student.CGPA >= 7){
        student.GRADE = "E"
    }else if (student.CGPA < 7){
        student.GRADE = "F"
    }
    return student;
})

const filteredDocument = gradedDocument.filter(student => student.CGPA > 8);

const excelDocument = json2xls(gradedDocument);

gradedDocument.push({CGPA: averageCgpa, NAME: "Average Grade"})

fs.writeFileSync("Grade.xlsx",excelDocument,"binary");

console.log(gradedDocument);
// const { toPlainobject } = require('lodash');
// const parser = require('simple-excel-to-json')
// const doc = parser.parseXls2Json('./assignment.xlsx')[0]; 
// const json2xls = require("json2xls");
// const fs = require("fs");

// doc.sort((a,b) => {return a.CGPA - b.CGPA});
// doc.reverse()
// console.log(doc)
