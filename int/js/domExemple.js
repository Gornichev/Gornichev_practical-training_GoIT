// import  products from  "./product.js"
//
// Generate menu
// const fruits = ["orange", "apple", "banana", "grapefruit"]
//
// const rootRef = document.querySelector("#root");
// const btnMenuRef = document.querySelector("#bntMenu");

///==== створюемо Ul і даемо йому класи
// const ulRef = document.createElement("ul");
// ulRef.classList.add("list-menu");
// ulRef.classList.add("close");
//
//
// ///====== функція що створюе LI і тег <a> в ньому
//
// const createLi = (fruit) => {
//
//     const li = document.createElement("li")
//     const link = document.createElement("a");
//
//     li.classList.add("element");
//     link.classList.add("element-link");
//
//     link.target = "_blank";
//     link.textContent = fruit;
//     link.href = "https://djinni.co/my/dashboard/"
//
// ///==== в li посиллання робимо ;
//     li.append(link);
//
//     return li;
// };
//
// ///=== масив за допомогою map перебираемо і використовуючи функцію створюемо ліст меню
// const fruitsList = fruits.map((fruit)=> {
//    return createLi(fruit)
//
// })
//
// ///==== зоб елементи побачити в Dom треба їх додати (Роспиляемо)
// ulRef.append(...fruitsList);
// rootRef.append(ulRef);
//
// /// === поява по кліку тут все ясно
// btnMenuRef.addEventListener("click", (event)=> {
//
//     ulRef.classList.toggle('open');
//     ulRef.classList.toggle('close');
// })
// Generate menu

// find element
// const findEl = "exampleRadios2"
// const linkEl = document.querySelector(`.form-check-input[id="${findEl}"]`);
// console.log(linkEl)


// Створюемо Функцію що оброблюе данні з бека в новий обьект що ми створили;

// const colorPicturesOptions = [
//     {label : "red", color : "#c02020"},
//     {label : "green", color : "#365522"},
//     {label : "black", color : "#000000"},
//     {label : "yellow", color : "#e0ab47"},
//     {label : "white", color : "#ffffff"},
// ];
//
// const colorOptions = [
//     {label : "323", color : "#2b7e7e"},
//     {label : "green", color : "#365522"},
//     {label : "23323", color : "#324280"},
//     {label : "ye323llow", color : "#dec79c"},
//     {label : "32", color : "#f51313"},
// ];

// const elementRef = colorPicturesOptions.map((element) =>{
//
//     const btnRef = document.createElement("button");
//     btnRef.style.width = 40;
//     btnRef.style.height = 20;
//     btnRef.style.background = element.color;
//     btnRef.textContent =  element.label;
//     btnRef.classList.add("mr-5")
//     btnRef.addEventListener("focus",(event)=> {
//
//         console.log(event.target)
//         event.target.style.color = "red"
//     })
//
//     return btnRef;
// });



// const makeOptions = (options) => {
//
//     return options.map((element) => {
//
//         const btnRef = document.createElement("button");
//         btnRef.style.width = 40;
//         btnRef.style.height = 20;
//         btnRef.style.background = element.color;
//         btnRef.textContent = element.label;
//         btnRef.classList.add("mr-5")
//         btnRef.addEventListener("focus", (event) => {
//
//             console.log(event.target)
//             event.target.style.color = "red"
//         })
//         return btnRef
//     })
//
// };
//
// const elementRef = makeOptions(colorOptions)
// const rootRef = document.querySelector("#root");
// rootRef.append(...elementRef);



// Робимо карточку продукта по данним що приходять з масивів обьектів

//<article class="product">
//     <h2 class="product-name">назва</h2>
//     <p class="product-description"></p>
//     <p class="product-price"></p>
// </article>

// const makeProductCard = (options) => {
//
//     return options.map(({name,description,price})=>{
//
//         const articleRef = document.createElement("article");
//         articleRef.classList.add("product");
//
//         const titleRef = document.createElement("h2");
//         titleRef.classList.add("product-name");
//         titleRef.textContent = name;
//
//         const priceRef = document.createElement("p");
//         priceRef.classList.add("product-price");
//         priceRef.textContent = price;
//
//         const dscRef = document.createElement("p");
//         dscRef.classList.add("product-description");
//         dscRef.textContent = description;
//
//         rootRef.append(articleRef);
//         articleRef.append(titleRef,priceRef,dscRef)
//
//         return articleRef
//     })
//
// };
//
// console.log(makeProductCard(products));

//======== 2=============

// const rootRef = document.querySelector("#root");
//
// const makeProductCard = ({name,description,price}) => {
//
//     const articleRef = document.createElement("article");
//         articleRef.classList.add("product");
//
//         const titleRef = document.createElement("h2");
//         titleRef.classList.add("product-name");
//         titleRef.textContent = name;
//
//         const priceRef = document.createElement("p");
//         priceRef.classList.add("product-price");
//         priceRef.textContent = price;
//
//         const dscRef = document.createElement("p");
//         dscRef.classList.add("product-description");
//         dscRef.textContent = description;
//
//         rootRef.append(articleRef);
//         articleRef.append(titleRef,priceRef,dscRef)
//
//         return articleRef
//
// };
//
// const element = products.map(makeProductCard);
