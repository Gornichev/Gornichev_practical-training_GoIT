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
// const motoElementList = ["wheel", "motor", "transmission","Helm"];
//
// const listRef = document.querySelector(".js-list");
// //
// // motoElementList.forEach((element)=>{
// //
// //     listRef.innerHTML += `<li class="changeColor"> This is ${element}</li>`
// // });
//
// const markup = motoElementList.map((element)=>{
//
//     return `<li class="changeColor"> This is ${element}</li>`
// }).join("");
//
// listRef.insertAdjacentHTML("beforeend", markup);
// Hendlebars
// const motoElementList = ["wheel", "motor", "transmission","Helm","bars"];
//
// const template = document.querySelector(".template-demo").innerHTML;
// const rootRef = document.querySelector("#root");
//
// const templateScript = Handlebars.compile(template);
// const markup = templateScript(motoElementList);
//
// rootRef.insertAdjacentHTML("beforeend",markup);

// Gallery whith Handlebars



const galleryItem = [
    {   img: "https://cdn.pixabay.com/photo/2023/04/22/02/19/roller-coaster-7942853_1280.jpg",
        name:"rollerCoaster"
    },
    {
        img: "https://cdn.pixabay.com/photo/2023/04/18/18/38/atv-7935771_1280.jpg",
        name : "bike"
    },
    {
        img: "https://media.istockphoto.com/id/1084805740/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D1%83%D0%BB%D0%B8%D1%87%D0%BD%D1%96-%D0%BF%D0%B0%D0%BB%D1%8C%D0%BC%D0%B8.jpg?s=1024x1024&w=is&k=20&c=HPAPLmyoMW-EtvqOdQxS51Pa7krjtYtumBLFugg9o48=",
        name: "nature"
    }
];


// import  Handlebars from  ".handlebars"

const template = document.querySelector("#gallery").innerHTML;
const rootRef = document.querySelector(".root");

const templateScript = Handlebars.compile(template);
const markup = templateScript(galleryItem);

rootRef.insertAdjacentHTML("beforeend",markup)

// Hendlebars
// console.log('!!')

// REpeta Module-08--------------------

// import func from "/int/js/module-07.js"
// console.log(func);

// import {getId as testGetId} from  "/int/js/module-07.js";
// console.log(testGetId())


import * as data from  "/int/js/module-07.js";

console.log(data);

