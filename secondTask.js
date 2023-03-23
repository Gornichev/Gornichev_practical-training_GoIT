// 1) Поліндром
// const isPalindrome = string => {
//     return string === string.split("").reverse().join("")
// }
//
// console.log(isPalindrome("abba"))
// console.log(isPalindrome("'Madam i'm Adam'"))
// console.log(isPalindrome("abb23"))
// console.log(isPalindrome("11111113"))

// 2) the shortest word search function;
// Знайти найкоротший єлемент в виразі;

// const findShortestWord = string  => {
//
//   return string
//        .split(" ")
//         .sort((a,b) =>{
//            return  a.length - b.length
//         })[0]
// }
// console.log(findShortestWord("The a quick brown fox jumped over the lazyyyyyy dog"))

// task #3================
// const apple = {
//     label: 'apple',
//     price : 50,
//     quantity :3,
//     tags: ["gt", "de"],
//     isOnline : false
// }
//
// const mango = {
//     label: 'mango',
//     price : 21,
//     quantity :2,
//     tags: ["js", "de"],
//     isOnline : true
// }
//
// createProduct(mango,LogProduct)
// //
// function createProduct (obj,callback) {
// const product = {
//     ...obj,
//     id: Date.now()
//         .toString()
//         .slice(1,4),
//     sex: true,}
//
//   return callback(product)
// }
//
// function LogProduct (product)  {
//     console.log("product callback", product)
// }
//
// function logTotalPrice (product) {
//     console.log("Product total price" ,product.price * product.quantity)
// }

// task 4

// const each = (array,callback) => {
//
//     let newArr = [];
//     for (let el of array){
//         newArr.push(callback(el))
//     }
//     return newArr
// }
//
// console.log(each([1,2,6,7,89,9,9],value => value * 2))

// Task #5
// створіть функцію що приймае імя + фамилію і повертае ініціали завжди у верхньому регістрі.

// const initials = (string) => {
//    return  string.split(" ")
//        .map(el => {
//            return el.slice(0, 1) + "."
//        })
//        .join("")
//        .toUpperCase()
//        .slice(0,3)
// }
// Task #6
// Напишіть функцію сумми всіх чисел  що приходять навіть якщо вони відьемні.

// const sumOfAllNumber = (num) => {
//
//     return Math.abs(num)
//         .toString()
//         .split("")
//         .reduce((acc,el) => Number(acc) + Number(el))
// }
//
//  console.log(sumOfAllNumber(-44))

// Task 7
// Напиши функцію пошуку мінімального та максимального числа в масиві. повертати мае масив ціх значень.
// повертае масив ціх двох елементів .
// A) варіант
// const  minMaxFind = (array) => {
//     const min = Math.min(...array)
//     const max = Math.max(...array)
//     return [min, max]
// }

// Б) варіант  es 5 сінтаксис

// const  minMaxFind = (array) => {
//     const min = Math.min.apply(null,array)
//     const max = Math.max.apply(null,array)
//     return [min, max]
// }
// С) варіант

// const  minMaxFind = (array) => {
//
// let min = 0;
// let max = 0;
//     array.forEach(el =>{
//         if(el > max){
//             max = el
//         }
//         if (el < min){
//             min = el
//         }
//     })
//     return [min,max]
// }
// Топ варіант
// const  minMaxFind = (array) => {
//    return [Math.min(...array),Math.max(...array)]
// }
//
// console.log(minMaxFind([4,6,88,1000,4,45,4,5,-5,-1000]))
// minMaxFind([4,6,88,4,45,4,5,-5])
// console.log(minMaxFind([0]))

//Task 08;
// Нашишіть метод calkTotalPrice (stoneName) що приймае назву каміння і розраховуе та повертае
// загальну вартість каміння з таким імям,ціною та кількістю з властивості stone.

// const shop = {
//     stones : [
//         {name : "Ruby", price: 100, quantity : 12},
//         {name : "Diamond", price: 200, quantity : 5},
//         {name : "Saphire", price: 30, quantity : 20}
//     ],
//     calkTotalPrice (stoneName){
//         const stoneToFind = this.stones.find(stone =>{
//             return stone.name === stoneName
//
//         } )
//         if (stoneToFind) {
//             const {price,quantity} = stoneToFind
//             return price * quantity
//         } else {
//             console.log("WTF?")
//         }
//     }
// }
// shop.calkTotalPrice("Ruby!")
// console.log(shop.calkTotalPrice("Ruby"))

// =======
//task 09;
// Створіть обьект Calculator з трьома методами
// 1) read (а,b) приймае два значення і зберігае їх як властивість обьекта
// 2) add() повертае сумму збережених значень.
// 3) mult() перемножуе збережені значення та повертае результат.

// const calculator = {
//     a: 0,
//     b: 0,
//     read (a,b) {
//         this.a = a;
//         this.b = b;
//     },
//     add(){git
//     return this.a + this.b
//     },
//     mult(){
//     return this.a * this.b
//     },
// }
//
// calculator.read(10,4)
// console.log(calculator.mult())
//task 10;

// Правильний чейнінг

// const icon = {
//     _color : "fff222",
//     _size: "25px",
//     _padding : "16px",
//
//     color(newColor){
//         this._color = newColor;
//         return this
//     },
//     size(newSize){
//         this._size = newSize;
//         return this
//     },
//     padding (newPadding){
//         this._padding = newPadding;
//         return this
//     }
// }
//
// icon.size("45px").color("$%$").padding("100")
// console.log(icon)

//task 10;

// Напишіть функцію що повертае масив індекси всіх букв слова написаних у верхньому регістрі.

// const capitalLetterIndex = (string) => {
//
//     return string.split("")
//         .reduce((acc, element, idx) => {
//         if (element === element.toUpperCase()) {
//             acc.push(idx)
//         }
//         return acc
//     }, [])
// }
// //(2) варіант
// //     // const res = [];
// //     // string.split("")
// //     //     .forEach((element,idx) =>{
// //     //         if(element === element.toUpperCase()){
// //     //             res.push(idx)
// //     //         }
// //     //
// //     //     })
// //     // return res
// // }
//
// console.log(capitalLetterIndex("CoDeWarS"))
// console.log(capitalLetterIndex("wWw.CapiTaLLetteR.cOm"))

// Task 11
// створіть функцію що приймае декілька масивів (а скільки ми не знаемо ) з числами
// і повертае масив унікальних чисел що не повторюються.

// роспиляемо ...rest у аргументів тому що ми не знаемо скільки масивів може прийти у функцію.
///спосіб зібрати вс значення з масивів в один (253 рядок)

// const uniteUnique = (...array) => {
//
//     newArr = [].concat(...array)
//     .sort((el1,el2)=> el1 - el2);
//     newArr = new Set(newArr)
//     return [...newArr]
//
// }
// //
// console.log(uniteUnique([1,5,5],[6,8,3],[3,2,4],[2,777,555,3]))
// Task 12.
//// напишіть функцію що приймае і повертае  довільну стрінгу вже з усіма заглавними буквами .

// const firstUpLetter = (string) => {
//
//     if(string){
//         return string
//             .split(" ")
//             .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
//             .join(" ")
//     } if (string === ""){
//         console.log('Wtf')
//     }
// }
//
// console.log(firstUpLetter("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, unde."))
// console.log(firstUpLetter(""))

// Tast 13

// функція форматуваня цифр в телефонний номер

// const createPhoneNumber = (number) => {
//
//     const strNum = number.toString();
//     return `(${strNum.slice(0,3)}) ${strNum.slice(3,6)}-${strNum.slice(6,10)}`
//
// }
// // createPhoneNumber(1234567890) /// 123 456 7890 такий формат
// console.log(createPhoneNumber(1234567890))

// Task 14
// Напиши скрипт підрахунку вартості гравіювання прикрас.
// Для цього створи функцію calculateEngravingPrice(message, pricePerWord)
// приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова,
// і повертає ціну гравіювання всіх слів в рядку.

// const calculateEngravingPrice =  (message, pricePerWord) => {
// 1)
//     const strToArr = message.split(" ")
//     return strToArr.length * pricePerWord
//
//   2)
//     // const strToArr = message.split(" ").filter( n =>  n != '' ).length;
// // return strToArr * pricePerWord
//
// };
//
// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20,),); // 16
//
// task 14
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок
// (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

// const findLongestWord = (string) => {
//     let longestWord = "";
//     const word = string.split(" ").forEach((el,idx) => {
//         if(el.length > longestWord.length){
//             longestWord = el;
//         }
//     })
//     return longestWord
// };
//
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
// console.log(findLongestWord('Google do a roll')); // 'Google'

// task 15
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
//     Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому   вигляді.
//     Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки
// '...', після чого повертає   укорочену версію.
//
// const formatString = (string) => {
//
//     const strToArr = string.split("")
//     if (strToArr.length < 40){
//         return string
//     } else  {
//         return `${string.slice(0,40)}...`
//     }
//
// }
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // повернеться форматований рядок
//
// console.log(formatString('Curabitur ligula sapien.'));
// // повернеться оригінальний рядок

// // task 16
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message - рядок.
//     Функція перевіряє її на вміст слів spam і sale.
//     Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false.
//     Слова в рядку можуть бути в довільному регістрі.

// const checkForSpam = (message) => {
//
//     if(message.includes("sale") || message.includes("spam")){
//         return true
//     } return false
// }
//
// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true

// task 17

// Cтворіть функцію що Отримуе масив фруктів який треба відсортувати в заложності від повторення.

// const fruits = ["banana", "apple", "orange", "apple", "banana", "banana", "paneple", "apple"];

// const fruitsSort = (array)=> {
//
//     const testFruits = array.reduce((acc,fruit)=> {
//
//         //  acc[fruit] ? acc[fruit] += 1 : acc[fruit] = 1
//         // return acc;
//         /// або ///
//         if (acc[fruit]){
//             acc[fruit] += 1;
//         } else {
//             acc[fruit] = 1;
//         }
//         return acc;
//     },{})
//
//         const keys = Object.keys(testFruits)
//      return keys.sort((el1,el2)=> testFruits[el2] - testFruits[el1])
//
// }
//
// console.log(fruitsSort([ "apple","pizza", "orange", "apple", "banana", "banana","banana", "paneple", "pizza", "pizza", "pizza"]))

 // як знайти яку кількість раз кожне число було записано в масив.
// отримаемо обьект .

// const numbers = [1,1,1,4,4,4,3,3,2,4,4,2,2,1,1,2,4]
// const  repeat = (numbers) => {
//
//     const res = numbers.reduce((acc,num)=> {
//         if (acc[num]){
//             acc[num] += 1;
//         } else {
//             acc[num] = 1;
//         }
//         return acc;
//
//     },{})
//     return res
// }
// console.log(repeat(numbers))