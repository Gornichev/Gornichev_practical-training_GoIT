// const title = document.querySelector(".userClass")
// const btnUser = document.querySelector(".button-user-click")
//
// btnUser.addEventListener("click",()=>{
//     title.classList.toggle("changeColor")
// })
//
// // title.classList.add("changeColor")

// innerHTML==========
// const btnDecrText = document.querySelector(".js-decrement")
// btnDecrText.innerHTML = `<button class="js-increment">Збільшити in Btn</button>`

// insertAdjacentHTML==========

// const superTitleRef = document.querySelector(".super-title")
// superTitleRef.insertAdjacentHTML("beforeend",`__<span style=\"color : #038383 \">element</span>`)

// ===============addEventListener + this
//use bind.

// const mango = {
//     username: "Mango",
//     showUsername() {
//         console.log(this);
//         console.log(`My username is: ${this.username}`);
//     },
// };
//
// const btnUser = document.querySelector(".button-user-click");
// btnUser.addEventListener("click",mango.showUsername.bind(mango))
// ===========event

// const btnUser = document.querySelector(".button-user-click");
// const handleClick = event => {
//     console.log(event);
// };
//
// btnUser.addEventListener("click", handleClick);

// document.addEventListener("keydown", event => {
//     console.log("Keydown: ", event);
// });

const testListRef = document.querySelector(".test-list");
const firstElement = testListRef.querySelectorAll("li")[1];
console.log(firstElement)



