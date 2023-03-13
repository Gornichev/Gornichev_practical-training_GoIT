// const bookShelf = {
//     authors: ["Бернард Корнуелл", "Роберт Шеклі"],
//     getAuthors() {
//         return this.authors;
//     },
//     addAuthor(authorName) {
//         this.authors.push(authorName);
//     },
// };

// console.log(bookShelf.getAuthors())
// bookShelf.addAuthor("Stephen King")
// console.log(bookShelf.authors)
//

// const mango = {
//     label: 'mango',
//     price : 21,
//     quantity :2,
//     tags: ["js", "de"],
//     isOnline : true,
//      makeSheaf  (item) {
//          console.log(this.label,this.price)
// },
//     addItem (item) {
//         console.log(this.quantity )
//     }
// }
//
// // console.log(mango.addItem("time"))
//
// document.querySelector(".button-user-click")
//     .addEventListener("click", mango.addItem.bind(mango))

// ======= Метод coll,apply, bind
// function greet(clientName) {
//     return `${clientName}, ласкаво просимо в «${this.service}».`;
// }
//
// const steam = {
//     service: "Steam",
// };
//
// const test = greet.bind(steam);
// console.log(test("lENA"))
//
// const vivaldi = {
//     name: "Vitas",
//     age : "14",
//     status : "online",
//     mail : true,
// }
//
// const otto = {
//     name: "Otto",
//     age : "19",
//     status : "offline"
// }
// const info = {
//     showInfo() {
//         console.log(this.name, this.age, this.status)
//     }
// }
//
// const status = {
//     showStatus (){
//         console.log(this.name,  "actor")
//     }
// }
//
// status.showStatus.call(vivaldi)

// document.querySelector(".button-user-click")
//     .addEventListener("click",status.showStatus.bind(vivaldi))

// document.querySelector(".button-user-click")
//     .addEventListener("click",info.showInfo.bind(vivaldi))

// =======
// function greetGuest(greeting) {
//     console.log(`${greeting}, ${this.username}`);
// }
//
// const mango = {
//     username: "Манго",
//     age : "25"
// };
// const poly = {
//     username: "Полі",
// };
//
// greetGuest.call(mango,"hello")

// const number = [1,2,6,8,8]
// const min =  Math.min.apply(Math,number)
// console.log(min)
// ======= Метод coll,apply, bind

// const fma = () => {
//     console.log('Fma')
// }
//
// const fmb = fma;
// console.log(fmb === fma); /// true

// const showTag = function () {
//     console.log(`showTag this.name`, this.name)
//     console.log(`showTag this`, this)
//
// }
// showTag()

// const user = {
//     name: "Lena",
//     showTag() {
//         console.log(`showTag this.name`, this.name)
//         // console.log(`showTag this`, this)
//     }
// }
// user.showTag();
//
// const error = user.showTag;
// error()

// =====================
// const counter = {
//     value : 0,
//     increment (value) {
//         console.log("increment this ", this);
//         this.value += value;
//     },
//     decrement (value) {
//         console.log("decrement this ", this);
//         this.value -= value;
//     }
//
// }
// const updateCounter = function (value, operation) {
//     operation(value)
// }
//
// updateCounter(10,counter.increment.bind(counter))
// updateCounter(10,counter.decrement.bind(counter))
// console.log(counter)



// const obj = {
//      a : 5,
//     b : 10,
//
// }
//
// const showThis = function (...arg) {
//     console.log("a + b" , this.a + this.b)
//     console.log( "showThis this" , this)
// }
// showThis.call(obj,2,3,34,4,4)
//
// const changeColor = function (color) {
//
//     console.log("changeColor this", this)
//     this.color = color;
// }
//
// const objColor = {
//
//     color : "black",
// }
// console.log(objColor)
// changeColor.call(objColor,"red")
// console.log(objColor)
