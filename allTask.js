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

const carts = [
    {label: 'mango', price : 25, quantity :2, tags: ["js", "de"], isOnline : true},
    {label: 'apple', price : 50, quantity :3, tags: ["gt", "de"],isOnline : false},
    {label: 'peach', price : 15, quantity :8, tags: ["pt", "de"],isOnline : true},
    {label: 'lemon', price : 5, quantity :5, tags: ["js", "gt"], isOnline : true},
    {label: 'orange', price : 10, quantity :4, tags: ["js", "gt"], isOnline : true},
]

// 1: відсортувати прайс увсіх хто онлайн
// const sorted = carts
//     .filter(cart => cart.isOnline)
//     .sort((cartA,cartB) => cartA.price - cartB.price)
//
// console.log(sorted)

// const copyCarts = [...carts].sort((a,b) => a.quantity - b.quantity)
// console.log(copyCarts)

// ====reduce пошук унікальник тегів ========
// // const arrTags = carts.reduce((acc,cart) => [...acc,...cart.tags],[])
// // const allTags = carts.flatMap(cart => cart.tags)
//
// console.log(arrTags)
// console.log(allTags)

// const tagsCheck = arrTags.reduce((acc,tag) => {
//
//     return {
//         ...acc,
//         [tag] : acc[tag] ? acc[tag] +1 : 1
//     }
//
// }, {})
// console.log(tagsCheck)
// ====reduce пошук унікальник тегів ========

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

//======= chaining
// const numbers = [5,6,7,8,8,9,0,4]
//
// // подвоїти значення всіх елементів
// //записати більші за 5
// //відсортувати
//
// const sorted = numbers
//     .map(num => num *2)
//     .filter(num => num >5)
//     .sort((a,b) => a -b)
// console.log(sorted)

//======= chaining


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

// Closures======
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
// Closures======

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


//======= chaining
// const numbers = [5,6,7,8,8,9,0,4]
//
// // подвоїти значення всіх елементів
// //записати більші за 5
// //відсортувати
//
// const sorted = numbers
//     .map(num => num *2)
//     .filter(num => num >5)
//     .sort((a,b) => a -b)
// console.log(sorted)

//======= chaining


// Task1
// const charCounts = string.split("").reduce((acc, el) => {
//     acc[el] ? acc[el] += 1 : acc[el] = 1
//     return acc;
// }, []);
// console.log(charCounts)

// Напиши функцію що приймае стрінг і повертає позицію першийого унікальний символ.
//     Наприклад Leetcode зустрічаеться тільки на позиції 1.

// const firstUniqChar = (string) => {
// const strToArr = string.split("")
//     .reduce((acc,element) => {
//     acc[element] ?
//     acc[element] += 1
//     : acc[element] = 1;
//     return acc
// },{})
//     // console.log(strToArr)
//     for (let i = 0; i < string.length; i++) {
//         const char = string[i];
//         if (strToArr[char] === 1) {
//             return i;
//         }
//     }
//     return  -1
// }
//
// console.log(firstUniqChar("aleetcode"))
// console.log(firstUniqChar("LoveLeetcode"))
// console.log(firstUniqChar("aaddc"))

// Напиши функцію що приймае стрінг і повертає позицію першийого унікальний символ.
//     Наприклад Leetcode зустрічаеться тільки на позиції 1.

// task 2: З двох масивів додати в третій  елементи що співпадають.
//
// const findNumber = (array,array2) => {
//     const total = [];
//     for (let i = 1; i < array.length; i += 1) {
//     if (array[i] === array2[i]){
//         total.push(array[i])
//     }
//     }
//     return total
// }
// console.log(findNumber([1,5,6,8,9,3,67,8,0,55,-1],[1,3,6,8,4,3,67,0,-1,55]))
// console.log(findNumber([1,3,6,3,4,3,67,0,77],[1,5,6,7,9,8,67,8,77]))

// function callback  ()  {
//     console.log('!!!22')
// }
//
// function  stats  (callback){
// callback();
// }
// stats(callback)

// ==== test tasks ======
// // 1 Поліндром
//
// const isPalindrome = (string) => {
//     return string === string.split("").reverse().join("")
// }
//
// console.log(isPalindrome("abba"))
// console.log(isPalindrome("abba"))
// console.log(isPalindrome("afdfsfba"))
// console.log(isPalindrome("'Madam i'm Adam'"))
// console.log(isPalindrome("abb23"))
// console.log(isPalindrome("11111113"))
// const findShortestWord = string  => {
//
//     return string
//         .split(" ")
//         .sort((a,b) => a.length -b.length[0]);
// }
//
//
// console.log(findShortestWord("The quick brown fox jumped over the lazy dog"))
