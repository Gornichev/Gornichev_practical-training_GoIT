// import  products from  "./module-07.js"
// console.log(products);

// import numbers from "./module-07.js"
// console.log(numbers)

// import  person from "./module-07.js";
// const {name,age} = person;
// console.log(name)

// localStorage
// JSON
// JSON.parse() // read;
// JSON.stringify() // toString;
// для того щоб в LocalStorege  записати обьект його спочатку треба привести до стрінг методом JSON.stringify(user).

const user = {
    age : 25,
    name : "Yurii",
    status : true
};

localStorage.setItem("user-info",JSON.stringify(user));

/// прочитати по ключу
// localStorage.getItem("user-info")
const data = localStorage.getItem("user-info");

if (data) {
    const findUser = JSON.parse(data)

    console.log(findUser)
};

// Revove

localStorage.removeItem("user-info");