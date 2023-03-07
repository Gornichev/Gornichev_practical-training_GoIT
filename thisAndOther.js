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

const vivaldi = {
    name: "Viva",
    age : "14",
    status : "online",
    mail : true,
}

const otto = {
    name: "Otto",
    age : "19",
    status : "offline"
}
const info = {
    showInfo() {
        console.log(this.name, this.age, this.status)
    }
}

const status = {
    showStatus (){
        console.log(this.mail, "!!")
    }
}

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

