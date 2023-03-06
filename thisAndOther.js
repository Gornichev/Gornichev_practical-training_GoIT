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
// function makeSheaf  () {
//     console.log("makeSheaf", this)
// }
const mango = {
    label: 'mango',
    price : 21,
    quantity :2,
    tags: ["js", "de"],
    isOnline : true,
    // makeSheaf,
    addItem (item) {
    return {
        ...this,
        item :"time"
    }
    }
}
// console.log(mango.addItem("time"))

///button

// document.querySelector(".button-user-click")
// .addEventListener("click", function () {
//     console.log(this)
// })
//

const vivaldi = {
    name: "Viva",
    age : "14",
    status : "online"
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
info.showInfo.call(mango)