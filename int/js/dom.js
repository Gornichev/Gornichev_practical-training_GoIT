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

// const btnUser = document.querySelector(".button-user-click");
//
// btnUser.addEventListener("click",(event)=> {
//     console.log(event.target)
// });

// event.preventDefault()========== відмінити дію (відпрвки форми що важливо! або наприклад кнопки)

// Form обробка

// const btnSubmitRef = document.querySelector("#main-form");
//
//
// btnSubmitRef.addEventListener("submit",(event)=> {
//     event.preventDefault();


// 1.========================
//     const userText = document.querySelector("input[type='text']");
//     const userEmail = document.querySelector("input[type='email']")
//     // console.log(userEmail.value)
//     // console.log(userText.value)
//
//     const data = {
//         userText : userText.value,
//         userEmail : userEmail.value,
//     }
//     console.log(data)
//     2.================

   //  const formRef = event.target.elements;
   //  console.log(formRef.text.value)
   //  const {email,text,password} = event.target.elements
   //
   //  const data = {
   //      text : text.value,
   //      email : email.value,
   //      password : password.value,
   //  }
   //  console.log(data)
   //  // 3================== TOP!
   //
   // const formRef = event.target;
   // const formData = new FormData(formRef);
   //
   // const data = {}
   // formData.forEach((value,key)=> {
   //
   //     data[key] = value;
   // })
   //  console.log(data)
// });

// Input event

// const formControlRef = document.querySelector(".form-control")
// const inputGroupRef = document.querySelector(".input-group")
// const checkBoxRef = document.querySelector(".check-box-User")
// const btnBoxRef = document.querySelector(".button-user")
// const spanRef = document.querySelector(".button-user > span")


// input event
// formControlRef.addEventListener("input",(event)=> {
//
//     console.log(event.target.value)
// })
//  change event
// formControlRef.addEventListener("change",(event)=> {
//
//     console.log(event.target.value)
// })
// checkBoxRef.addEventListener("change",(event)=> {
//
//     console.log(event.target.checked)
// })

// Приклад !


// inputGroupRef.addEventListener("input",(event)=> {
//
//     const inputValue = event.target.value;
//     console.log(btnBoxRef)
//
//     checkBoxRef.addEventListener("change",(event)=> {
//
//         btnBoxRef.disabled = !event.target.disabled;
//         btnBoxRef.textContent = `${inputValue} registration`;
//         btnBoxRef.style.color = "red";
//         console.log(btnBoxRef)
//     });
// });
// //
// Focus event
// formControlRef.addEventListener("focus",(event)=> {
//     event.target.border = "3px solid #785"
//     event.target.style.color = "2px solid #221"
//
// });
// // Blur
// formControlRef.addEventListener("blur",(event)=> {
//     event.target.style.color = "2px solid #565"
// });

// keybords event

// window.addEventListener("keydown",(event)=>{
//     console.log(event.code)
// })

// приклад!
// Кнопка очистки
// const pOutput = document.querySelector(".output");
// const btnClear = document.querySelector(".btn-clear");
//
// const onKeyListener =  (event)=> {
//     pOutput.textContent += event.key;
// };
//
// window.addEventListener("keydown",onKeyListener);
//
// btnClear.addEventListener("click",(event)=> {
//     pOutput.textContent = "";
//     window.removeEventListener("keydown",onKeyListener)
// });

// Modal window
// const bntModalRef = document.querySelector('#btb-modal');
// const contentModalRef = document.querySelector('#modal-content');
// const iconModalRef = document.querySelector('#icon-close');
// const windowModalRef = document.querySelector('#modal-window');
//
//
// bntModalRef.addEventListener("click",(event)=>{
//
//     contentModalRef.style.display = "block"
// });
//
// iconModalRef.addEventListener("click",(event)=>{
//     contentModalRef.style.display = "none"
// });
//
// iconModalRef.addEventListener("mouseover",(event)=>{
//     event.target.style.cursor = "pointer"
// });
//
// const onEscape = (event) => {
//     if (event.code === "Escape"){
//         contentModalRef.style.display = "none";
//     }
// };
//
// window.addEventListener("keydown", onEscape);
//
// const onBackDropClose = (event) => {
//      // console.log(event.target)
//      // console.log(event.currentTarget)
//
//     if(event.target === windowModalRef){
//         contentModalRef.style.display = "none";
//     };
// };
//
// window.addEventListener("click", onBackDropClose)


// РЕПЕТА форми

// якщо треба поелементно працювати з параметрами використовуемо  const formRef = event.target.elements
// якщо просто зібрати данні з форми то new formData і метод foreach

// const btnSubmitRef = document.querySelector("#main-form");
// btnSubmitRef.addEventListener("submit", onFormSubmit);
//
// function onFormSubmit (event) {
//
//     event.preventDefault();
//
//     const formData = new FormData(event.target);
//
//     const data  = {};
//     formData.forEach((value,key) => {
//
//         data[value] = key;
//     })
//     console.log(data)
// };

// Обьект посилань робиться дл того щоб в коді було зрозуміло де посилання на елементи з сторінки ( назвемо їх наприклад  Refs)


// const formControlRef = document.querySelector(".js-form-control")
// const checkBoxRef = document.querySelector(".check-box-User")
// const btnBoxRef = document.querySelector(".button-user")
// const spanRef = document.querySelector(".button-user > span")

// const refs = {
//      formControl : document.querySelector(".js-form-control"),
//      checkBox : document.querySelector(".check-box-User"),
//      btnBox : document.querySelector(".button-user"),
//      spanRef : document.querySelector(".button-user > span"),
// };


// refs.formControl.addEventListener("input",(event) => {
//
//     const inputValue = event.target.value;
//     refs.checkBox.addEventListener("change",(event)=> {
//
//         refs.btnBox.disabled = !event.target.checked;
//         refs.btnBox.textContent = `${inputValue} registration`;
//         refs.btnBox.style.color = "red";
//
//     });
// })
// refs.formControl.addEventListener("input", onChangeInput);
// refs.checkBox.addEventListener("change", onChangeCheckBox)
//
// function onChangeInput (event)  {
//
//     refs.btnBox.textContent = `${event.target.value} registration`;
//
// };
//
// function onChangeCheckBox (event) {
//
//
//     refs.btnBox.disabled = !event.target.checked;
// };


