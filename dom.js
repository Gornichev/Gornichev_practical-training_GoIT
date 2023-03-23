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

// const testListRef = document.querySelector(".test-list");
// const firstEl = document.querySelector("li")[1];
// console.log(firstEl)
//
// // console.log(testListRef.nodeName)
// const firstElement = testListRef.querySelectorAll("li")[1];
//
// const btnUser = document.querySelector(".button-user-click");
// btnUser.addEventListener("click",()=> {
//
//     firstElement.classList.toggle(firstElement.innerText = "!!!")
//
//
// })

// const btn = document.querySelector('.button-user-click');
// btn.addEventListener('click', ()=> {

//     const initialText = 'Click me Button';
//
//     if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
//         btn.textContent = 'Button clicked';
//     } else {
//         btn.textContent = initialText;
//     }
// });

// const btn = document.querySelector('.button-user-click');
// // console.log(btn.nodeName)
// btn.addEventListener("click",() => {
//
//     const textInBtn = "Click me please"
//
//     if(btn.textContent.toLowerCase().includes(textInBtn.toLowerCase())){
//
//         btn.textContent = "Click again";
//     } else  {
//         btn.textContent = textInBtn;
//     }
// })

// class ==============

// const btnUser = document.querySelector(".button-user-click");
// const titleRef = document.querySelector(".userClass")
//
// btnUser.addEventListener("click",() => {
//
//
//         if(titleRef.classList.contains("userClass")){
//                 titleRef.classList.toggle("changeColor")
//                 titleRef.textContent = "Blue Button"
//         }
//
// });

// getAtribute  and setAtribute ===

// const linksRef = document.querySelectorAll(".links")
// const linkRef = document.querySelector(".link")

// linksRef.forEach(link =>{
//     link.href = "https://github.com/Gornichev"
//     link.target = "_blank"
// })
// linkRef.target = "_blank"
// console.log(linkRef)
// ===  short syntax for link and img only;

// insertAdjacentHTML()
//
// const btnUser = document.querySelector(".button-user-click");
// const titleRef = document.querySelector(".userClass");
//
// btnUser.addEventListener("click", () =>{
//     console.log('!!')
//     titleRef.insertAdjacentHTML("beforeend","<h5>Test_Html</h5>")
// })

// style
// const btnUser = document.querySelector(".button-user-click");
// const titleRef = document.querySelector(".userClass");
//
// btnUser.addEventListener("click", (e) =>{
//
//     if(e){
//         btnUser.style.background = "#867"
//     }
//
//
// // })
// createElement
// const linksRef = document.querySelector(".links")
// const aRef = document.createElement("a")
// aRef.href = "https://github.com/Gornichev"
// aRef.target = "blank"
// aRef.classList.add("superLink")
// aRef.textContent = "Git"
//
//
// const btnUser = document.querySelector(".button-user-click");
// const titleRef = document.querySelector(".userClass");
//
// btnUser.addEventListener("click", (e) =>{
//
//     linksRef.append(aRef)
//
// })

// Remove addEventListener()

// const btnUser = document.querySelector(".button-user-click");
// const addBtnUser = document.querySelector(".add-button");
// const removeBtnUser = document.querySelector(".remove-button");
//
//
// btnUser.addEventListener("click",()=> {
//
//     console.log("addListener")
//     addBtnUser.addEventListener("click",onAdd)
//
// });
//
// const onAdd = () => {
//     console.log("addBtnUser")
// }
// removeBtnUser.addEventListener("click",()=>{
//     console.log("Зняти слухача")
//     addBtnUser.removeEventListener("click", onAdd)
// });

// ============
