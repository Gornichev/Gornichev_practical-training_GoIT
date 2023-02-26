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
// const students = [
//     { name: "Манго", score: 10, online : true, id: "34"},
//     { name: "Полі", score: 10, online : false, id: "22"},
//     { name: "Аякс", score: 5, online : true, id: "9"},
//     { name: "Ківі", score: 2, online : true, id: "5"},
//     { name: "Х'юстон", score: 50, online : false, id: "67"}
// ];

// const totalScore = students.reduce(
//     (total,student) => student.score + total
//     ,0)
//
// console.log(totalScore)

 // ====reduce пошук унікальник тегів ========

const carts = [
    {label: 'mango', price : 25, quantity :2, tags: ["js", "de"]},
    {label: 'apple', price : 50, quantity :3, tags: ["gt", "de"]},
    {label: 'lemon', price : 5, quantity :5, tags: ["js", "gt"]},
    {label: 'orange', price : 10, quantity :4, tags: ["js", "gt"]},
]

// const copyCarts = [...carts].sort((a,b) => a.quantity - b.quantity)
// console.log(copyCarts)

const arrTags = carts.reduce((acc,cart) => [...acc,...cart.tags],[])
const allTags = carts.flatMap(cart => cart.tags)

console.log(arrTags)
console.log(allTags)

// const tagsCheck = arrTags.reduce((acc,tag) => {
//
//     return {
//         ...acc,
//         [tag] : acc[tag] ? acc[tag] +1 : 1
//     }
//
// }, {})
// console.log(tagsCheck)


// const sumOfTag = arrTags.reduce((acc,tag) => {
//         acc[tag] ?
//             acc[tag] += 1
//             : acc[tag] = 1
//         return acc
//     }
//     ,{})
// console.log(sumOfTag)

// const allTags = carts.reduce((acc,cart) => [...acc,...cart.tags],[])
// console.log(allTags)
// const sumOfTag = allTags.reduce((acc,tag) => {
//         acc[tag] ?
//             acc[tag] += 1
//             : acc[tag] = 1
//         return acc
//     }
//     ,{})
//
// console.log(sumOfTag)

// const sumOfTag = allTags.reduce(
//     (acc,tag) => ({
//     ...acc,
//     [tag]: acc[tag]
// }), {})
// console.log(sumOfTag)


// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];
//
// function unique(arr) {
//
//     return arr.filter((item,index,arr) => {
//         return arr.indexOf(item) === index
//     })
// }
// console.log(unique(strings))

// console.log(allCartsTags);

// const total = cart.reduce(
//     (totalPrice,{price,quantity}) => totalPrice + price * quantity
//     ,0)
//
// console.log(total)

// const numbers = [5,6,7,8,8,9,0,4]
// const copyOfNumber = [...numbers].sort((a,b) => a - b)
// console.log(numbers,copyOfNumber)

// numbers.sort((a, b) => a - b);
// const total = numbers.reduce((acc,number) => acc +number,0)
// console.log(total)

// const test = students.every(student => student.online)
// console.log(test)

// const findIdStudent = (allStudents,idStud) => allStudents.find(({name}) => name=== idStud);
// console.log(findIdStudent(students,"Манго"));

// const onlineStudent = students.filter(student => student.name !== "Манго")
// console.log(onlineStudent)

// const findIdStudent = "9"
// const newStud = students.find(({id}) => id === findIdStudent)
// console.log(newStud)
//
// const studentsName = students.map(student => student.name)
// console.log(studentsName)

// const totalScore = students.map(({name,score}) => ({ name,score}))
// const changeScore = students.map(student => ({...student,score :student.score *2}))
// console.log(changeScore)

// const studentToFind = "Манго"
// const studentToFind2 = "Ківі"
//
// const updateNameStudent = students.map(student => {
//
//     return studentToFind === student.name || studentToFind2 === student.name
//         ? {...student, name : "Oliver koletsky"}
//         :  student;
// })
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


//
// // numbers.forEach(function (number){
// //     console.log(this)
// // },{a:5, b:10})
//
// const changeNum = numbers.map(number => {
//     return number *2
// })
// console.log(changeNum)

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         const {name} = newPotion;
//         const potionIndex = this.potions.findIndex(potion => potion.name === name);
//
//         if (potionIndex !== -1) {
//             return `Error! Potion ${name} is already in your inventory!`;
//         }
//         this.potions.push(newPotion);
//     },
//
//     removePotion(potionName) {
//         const potionIndex = this.potions.findIndex(potion => potion.name === potionName);
//
//         if (potionIndex === -1) {
//             return `Potion ${potionName} is not in inventory!`;
//         }
//
//         this.potions.splice(potionIndex, 1);
//     },
//
//     updatePotionName(oldName, newName) {
//         const potionIndex = this.potions.findIndex(potion => potion.name === oldName);
//
//         if (potionIndex === -1) {
//             return `Potion ${oldName} is not in inventory!`;
//         }
//
//         this.potions[potionIndex].name = newName;
//     },
//     // Change code above this line
// };

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         if (this.potions.includes(newPotion)) {
//             return `Error! Potion ${newPotion} is already in your inventory!`;
//         }
//
//         this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//         const potionIndex = this.potions.indexOf(potionName);
//
//         if (potionIndex === -1) {
//             return `Potion ${potionName} is not in inventory!`;
//         }
//
//         this.potions.splice(potionIndex, 1);
//     },
//     updatePotionName(oldName, newName) {
//         const potionIndex = this.potions.indexOf(oldName);
//
//         if (potionIndex === -1) {
//             return `Potion ${oldName} is not in inventory!`;
//         }
//
//         this.potions.splice(potionIndex, 1, newName);
//     },
//     // Change code above this line
// };