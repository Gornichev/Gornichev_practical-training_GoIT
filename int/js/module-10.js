// const debounce = require('debounce')
// import { debounce } from "/debounce"
// import _ from 'lodash'

// Cards Rickandmorty

// const refs = {
//     root : document.querySelector("#root-items-card"),
//     itemList : document.querySelector("#js-item-list"),
//     btnReadPersonage : document.querySelector("#js-bnt"),
//
// };

// let pageCounter = 1;
//
// function getData() {
//
//     fetch(`https://rickandmortyapi.com/api/character?page=${pageCounter}`)
//         .then((response) => response.json())
//         .then((data) => {
//
//             console.log(pageCounter)
//             // console.log(data.results);
//             // if(data.results.length >= 2) {
//             //     data.results = data.results.slice(0,4); /// завантажить тільки перші 4 елемети масиву
//             // }
//             const markup = data.results
//                 .map(
//                     ({ image, name, status, gender, location, id }) =>
//                         `<li class="item">
//               <img src="${image}" alt="">
//               <p class="name">${name}</p>
//               <p class="gender">${gender}</p>
//               <p class="status">${status}</p>
//               <p class="location">${location.name}</p>
//               <p class="id">${id}</p>
//             </li>`
//                 )
//                 .join("");
//
//             refs.itemList.insertAdjacentHTML("beforeend", markup);
//             pageCounter += 1
//         });
// };
//
// refs.btnReadPersonage.addEventListener("click",getData);
//
// window.addEventListener("scroll", ()=> {
//
//     const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
//
//     if(scrollTop === clientHeight - scrollHeight ) {
//
//         console.log('!!!')
//         getData();
//     };
// })

// Pocemoncard
//
// const refs = {
//     root : document.querySelector("#root-items-card"),
//     itemList : document.querySelector("#js-item-list"),
//     jsFormSearch : document.querySelector("#js-form-search")
// };
//
// function fetchPokemon (pokemonId) {
//
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
//         .then(response => response.json())
// };
//
// function renderPokemonCard (pokemon) {
//
//         const markup = `
//             <li class="item">
//               <img src="${pokemon.sprites.front_default}" alt="">
//               <p class="sprites">Name: ${pokemon.name}</p>
//               <p class="weight"> weight: ${pokemon.weight}</p>
//               <p class="id">Stats : ${pokemon.id}</p>
//             </li>`
//
//     refs.itemList.insertAdjacentHTML("beforeend", markup);
// };
//
// refs.jsFormSearch.addEventListener("submit",getPokemon);
//
// function getPokemon (event) {
//     event.preventDefault();
//
//     const form = event.target;
//     const pokemonId = form.elements.query.value;
//
//     fetchPokemon(pokemonId)
//         .then(renderPokemonCard)
//         .catch(onFetchError)
//         .finally(()=> form.reset())
// };
//
// function onFetchError (error) {
//     alert("Wrong request")
// };

// PixabayApi
const url = "https://newsapi.org/v2/everything?q=cat&pageSize=10&page=1"

const options = {
    headers : {
        Authorization: "0a6eeea406d74a34be3c6c704eaf1f8c",

    }
}

fetch(url , options)
.then(r => r.json())
.then(data => {

} )



// Home WOrk
// searchCountry
// Створи невеликий додаток пошуку даних про країну по її частковому або повному імені.
//    Використовуй Rest Countries API v2, а саме ендпоінт /name, який повертає масив
// об'єктів країн, що потрапили під критерій пошуку.


// const refs = {
//     inputSource : document.querySelector(".input-source-countries"),
//     rootsCountry : document.querySelector(".js-root-countries"),
// };
//
// function searchCountryByName(name) {
//     fetch(`https://restcountries.com/v2/name/${name}`)
//         .then(response => response.json())
//         .then(countries => {
//             if (countries.length > 0) {
//                 countries.forEach(country => {
//                     const markup = `
//                     <ul class="item-country-list">
//                     <li><img src="${country.flag}" alt=""></li>
//                     <li>Name: ${country.name}</li>
//                     <li>Capital: ${country.capital}</li>
//                     <li>Population: ${country.population}</li>
//                     <li>Region: ${country.region}</li>
//                     </ul>
//                     `
//                     refs.rootsCountry.insertAdjacentHTML("beforeend",markup)
//
//                 });
//
//             }
//             if(countries.length > 10 ){
//                 console.log("enter the data more correctly");
//             }
//             else {
//                 console.log("No matching countries found.");
//             }
//         })
//         .catch(error => {
//             console.log("Error occurred while accessing the API.");
//             console.log(error);
//         })
//         .finally(()=> setTimeout(()=> {
//         refs.rootsCountry.textContent = "";
//     },7000));
//
// };
//
// function findCountry (e) {
//         searchCountryByName(e.target.value);
// };
// const debounce = _.debounce(findCountry,2000)
//
// refs.inputSource.addEventListener("input", (e) => {
//    return debounce(e);
// });

// / Home WOrk
// searchCountry