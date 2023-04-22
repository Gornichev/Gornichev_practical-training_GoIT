// import  products from  "./module-07.js"
// console.log(products);

// import numbers from "./module-07.js"
// console.log(numbers)

// import  person from "./module-07.js";
// const {name,age} = person;
// console.log(name)

// localStorage

// localStorage.setItem();
// localStorage.getItem();
// localStorage.removeItem();
// localStorage.clear();
// JSON
// JSON.parse() // read;
// JSON.stringify() // toString;
// для того щоб в LocalStorege  записати обьект його спочатку треба привести до стрінг методом JSON.stringify(user).

// const user = {
//     age : 25,
//     name : "Yurii",
//     status : true
// };
//
// localStorage.setItem("user-info",JSON.stringify(user));
//
// /// прочитати по ключу
// // localStorage.getItem("user-info")
// const data = localStorage.getItem("user-info");
//
// if (data) {
//     const findUser = JSON.parse(data)
//
//     console.log(findUser)
// };
//
// // Revove
//
// localStorage.removeItem("user-info");

// Example Form

// const formRef = document.querySelector("#js-form");
// const textAreaRef = document.querySelector("#js-textarea");
//
// window.addEventListener("load", ()=> {                   ////  \ \ читае з Local Storage що записано !
//     const msg = localStorage.getItem("user-message");
//
//     if(msg){
//         textAreaRef.textContent = msg;
//     }
// });
//
// formRef.addEventListener("submit", (e) => {           /// при події Submit LOcal Storege мае очиститися.
//     e.preventDefault();
//     const msg = localStorage.getItem("user-message");
//     if(msg){
//         localStorage.removeItem("user-message")
//         textAreaRef.textContent = "";
//         e.target.reset
//     };
// });
//
// textAreaRef.addEventListener("input", (e)=> {
//     const msg = e.target.value;
//     localStorage.setItem("user-message",msg);
//
// });


// Шаблонізація
const motoElementList = ["wheel", "motor", "transmission","Helm"];

const listRef = document.querySelector(".js-list");
//
// motoElementList.forEach((element)=>{
//
//     listRef.innerHTML += `<li class="changeColor"> This is ${element}</li>`
// });

const markup = motoElementList.map((element)=>{

    return `<li class="changeColor"> This is ${element}</li>`
}).join("");

listRef.insertAdjacentHTML("beforeend", markup);



