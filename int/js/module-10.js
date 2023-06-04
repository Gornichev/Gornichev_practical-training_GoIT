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

// pocemoncard
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

// // PixabayApi
//
// fetch("https://pixabay.com/api/?key=36998604-a22208bfbc6a6ebb3feca8fcb&q=dog&lang=en&image_type=photo")
// .then(r => r.json())
// .then(data => {
//     data.hits.map(element => {
//         console.log(element.id)
//     })
// } )

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
            if (countries.length > 0 & countries.length === 1) {
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
        }).finally(()=> setTimeout(()=> {
        refs.rootsCountry.textContent = ""
    },5000));
};
refs.inputSource.addEventListener("input", _.debounce(findCountry,2000));
function findCountry (e) {
        searchCountryByName(e.currentTarget.value)
};












