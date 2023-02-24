// const mainFilter = (array,callback) => {
//     const totalArr = [];
//     for (const el of array){
//         const passed = callback(el);
//         if (passed){
//             totalArr.push(el)
//         }
//     }
//     console.log(totalArr)
// }
// mainFilter([1,4,6,7,8,4,66],value => value > 6)
//
const students = [
    { name: "Манго", score: 83, online : true },
    { name: "Полі", score: 59, online : false },
    { name: "Аякс", score: 37, online : true  },
    { name: "Ківі", score: 94, online : true  },
    { name: "Х'юстон", score: 64, online : false },
];

const onlineStudent = students.filter(student => student.name !== "Манго")
console.log(onlineStudent)

// const studentsName = students.map(student => student.name)
// console.log(studentsName)

// const totalScore = students.map(({name,score}) => ({ name,score}))
// const changeScore = students.map(student => ({...student,score :student.score *2}))
// console.log(changeScore)

const studentToFind = "Манго"
const studentToFind2 = "Ківі"

const updateNameStudent = students.map(student => {

    return studentToFind === student.name || studentToFind2 === student.name
        ? {...student, name : "Oliver koletsky"}
        :  student;
})
// console.log(updateNameStudent)


// const updateStudent = students.map(student => {
//
//     if(studentToFind === student.name){
//         return {
//             ...student,
//             name : "Oliver"
//         }
//     }
//     return  student
// })


//
//
// mainFilter(students,student => student.score === 37)
// //
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#175888", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#a49b23", rgb: "255,235,59" },
// ];
//
// mainFilter(colors,color => color.rgb === "244,67,54")

// const makeSheff = (name) => {
//
//     const makeDish = (dish) => {
//         console.log(`${name} готує ${dish}`)
//     }
//     return makeDish()
// }

// const makeSheff = function (name){
//     const makeDish = function (dish) {
//         return `${name} готує ${dish}`
//     }
//     return makeDish()
// }
//
// const poly = makeSheff("Oliver")
//
// poly()

// const makeSheff = (name) => {
//     return (dish) => {
//         console.log(`${name} make ${dish}`)
//     }
// }
//
// const sheffDen = makeSheff("den4ik")
// const sheffOliver = makeSheff("oliver")
//
// sheffDen("pasta")
// sheffOliver("rise")

// const add = function (a,b,c) {
//     return a + b + c;
// }

// const add = (a,b,c) => a + b + c ;
// console.log(add(5,5,10))

// const numbers = [5,6,7,8,8,9,0,4]
//
// // numbers.forEach(function (number){
// //     console.log(this)
// // },{a:5, b:10})
//
// const changeNum = numbers.map(number => {
//     return number *2
// })
// console.log(changeNum)

const array = [1, 2, 3]

const newArr = []