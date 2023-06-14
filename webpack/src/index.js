import colors from  "../js/main";
import "./sass/base.sass";
import menuTemplates from "./templates/menu.handlebars";
import menuData from "./menuData";
// import refs from "../js/refs";
// import lodash from 'lodash.throttle'
import lodash from 'lodash.debounce'
const debounce = require('debounce')
// import { debounce } from "debounce"


// import {Modal,Button,Carousel, Collapse, Dropdown} from "bootstrap.native"

// const modal = new Modal("#exampleModal");
// const PROMPT_DELAY = 3000;
//
// function showModal () {
//     modal.show();
//     console.log("open modal window");
// };
//
// setTimeout(showModal,PROMPT_DELAY);
//
// const  modalUser = document.querySelector("#exampleModal")
//
// modalUser.addEventListener("hide.bs.modal", ()=> {
//     console.log('!!!')
// });

// colorsPictures
// const markup = menuTemplates(menuData);
// refs.root.innerHTML = markup;
// colors.map((color) =>{
//     console.log(`${color.hex} and ${color.rgb}`);
// });

// class User {
//     #age
//     constructor(status) {
//         this.status = status;
//         this.#age = age;
//     }
//     getInfo() {
//         console.log(this.#age)
//     }
// };

// const viva = new User("incognito", "26");
// console.log("Hello")

// Home WOrk
// Створи невеликий додаток пошуку даних про країну по її частковому або повному імені.
//    Використовуй Rest Countries API v2, а саме ендпоінт /name, який повертає масив
// об'єктів країн, що потрапили під критерій пошуку.


const refs = {
    inputSource : document.querySelector(".js-input-source-countries"),
    rootsCountry : document.querySelector(".js-root-countries")
};


function searchCountryByName(name) {
    fetch(`https://restcountries.com/v2/name/${name}`)
        .then(response => response.json())
        .then(countries => {
            if (countries.length > 0) {
                countries.forEach(country => {
                    const markup = `
                    <li>Name: ${country.name}</li>
                    <li>Capital: ${country.capital}</li>
                    <li>Population: ${country.population}</li>
                    <li>Region: ${country.region}</li>
                    `
                    refs.rootsCountry.insertAdjacentHTML("beforeend",markup)

                });

            }
                // if(countries.length > 5){
                //     alert("Write the request more correctly")
            //   }
            else {
                console.log("No matching countries found.");
            }
        })
        .catch(error => {
            console.log("Error occurred while accessing the API.");
            console.log(error);
        })

};
refs.inputSource.addEventListener("input", debounce(findCountry,1000));
function findCountry (e) {
    searchCountryByName(e.currentTarget.value)
};


function fetchUnit () {
    fetch(" http://localhost:3000/motorcycle")
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
}

// CRUD

// Get
const BASE_URL = "http://localhost:0543/motorcycle"
//
function fetchMoto () {
    return  fetch(`${BASE_URL}`)
        .then(r => r.json())
};
//
// fetchMoto();
//
// function fetchMotoById(motoId) {
//     return  fetch(`${BASE_URL}/${motoId}`)
//         .then(r => r.json())
// };
//
// fetchMotoById(4)

// POST

const ducati = {
    "name": "Ducati",
    "price" : 4200,
    "color" : "black",
    "description" : "Multistrada NEW 1260 Enduros!",
    "available" : true
};
const lonsin = {
    "name": "lonsin",
    "price" : 1500,
    "color" : "white",
    "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, voluptatibus!",
    "available" : true
};

// const options = {
//     method : "POST",
//     headers : {
//         "Content-Type" : "application/json; charset=utf-8 "
//     },
//     body : JSON.stringify(newMoto)
// };
//
// fetch(`${BASE_URL}`,options)
//     .then(r => r.json())
//     .then(console.log);


// function addMoto(moto) {
//     const options = {
//         method : "POST",
//         headers : {
//             "Content-Type" : "application/json; charset=utf-8 "
//         },
//         body : JSON.stringify(moto)
//     };
//
//   return  fetch(`${BASE_URL}`,options)
//         .then(r => r.json())
// };
//
// // addMoto(lonsin).then(renderMoto);
// addMoto(ducati)
//
// function renderMoto(moto) {
//     console.log(moto)
//     console.log("Back and ")
// };

// PUT/PATCH (PATCH чатсково заміняе властивість);

// function changeMotoById(newName,newPrice,id) {
//
//     const changeMotoName = {
//         name : `${newName}`,
//         price : `${newPrice}`,
//     };
//
//     const options = {
//         method: "PATCH",
//         headers : {
//             "Content-Type" : "application/json; charset=utf-8 "
//         },
//         body : JSON.stringify(changeMotoName)
//     };
//
//    return  fetch(`${BASE_URL}/${id}`,options)
// };
//
// changeMotoById("Bisicle)",5430,2);


// function changeMotoByName() {
//
//     const options = {
//         method: "PATCH",
//         headers : {
//             "Content-Type" : "application/json; charset=utf-8 "
//         },
//         body : JSON.stringify({name : "Planeta", price : 10000})
//     };
//
//     fetch(`http://localhost:0543/motorcycle/8`,options)
// };


// function changeMotoById(update,id) {
//
//     const options = {
//         method: "PATCH",
//         headers : {
//             "Content-Type" : "application/json; charset=utf-8 "
//         },
//         body : JSON.stringify(update)
//     };
//
//     return  fetch(`${BASE_URL}/${id}`,options)
// };
//
// changeMotoById({name: "KTM", price : 7700},7);

// DELETE

function deleteMOtoById (id) {

    const options = {
        method: "DELETE"
    };

return fetch(`${BASE_URL}/${id}`,options).then(r => r.json())

};

deleteMOtoById(7).catch(error => console.log(error))

fetchMoto();