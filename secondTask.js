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
// Напишіть функцію всіх чисел  що приходять навіть якщо вони відьемні.

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
const  minMaxFind = (array) => {
   return [Math.min(...array),Math.max(...array)]
}

console.log(minMaxFind([4,6,88,1000,4,45,4,5,-5,-1000]))
minMaxFind([4,6,88,4,45,4,5,-5])
console.log(minMaxFind([0]))

