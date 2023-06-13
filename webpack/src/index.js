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
