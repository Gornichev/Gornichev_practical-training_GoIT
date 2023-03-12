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

const icon = {
    _color : "fff222",
    _size: "25px",
    _padding : "16px",

    color(newColor){
        this._color = newColor;
        return this
    },
    size(newSize){
        this._size = newSize;
        return this
    },
    padding (newPadding){
        this._padding = newPadding;
        return this
    }
}
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
