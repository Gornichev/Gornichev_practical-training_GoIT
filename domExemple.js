const fruits = ["orange", "apple", "banana", "grapefruit"]

const rootRef = document.querySelector("#root");
const btnMenuRef = document.querySelector("#bntMenu");

///==== створюемо Ul і даемо йому класи
const ulRef = document.createElement("ul");
ulRef.classList.add("list-menu");
ulRef.classList.add("close");


///====== функція що створюе LI і тег <a> в ньому

const createLi = (fruit) => {

    const li = document.createElement("li")
    const link = document.createElement("a");

    li.classList.add("element");
    link.classList.add("element-link");

    link.target = "_blank";
    link.textContent = fruit;

///==== в li посиллання робимо ;
    li.append(link);

    return li;
};

///=== масив за допомогою map перебираемо і використовуючи функцію створюемо ліст меню
const fruitsList = fruits.map((fruit)=> {
   return createLi(fruit)

})

///==== зоб елементи побачити в Dom треба їх додати (Роспиляемо)
ulRef.append(...fruitsList);
rootRef.append(ulRef);

/// === поява по кліку тут все ясно
btnMenuRef.addEventListener("click", (event)=> {

    ulRef.classList.toggle('open');
    ulRef.classList.toggle('close');
})
