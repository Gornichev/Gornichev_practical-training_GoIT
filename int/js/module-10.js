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

// NewSAPiService;
const refs = {
    newsForm : document.querySelector(".js-form-newApiFind"),
    containerList : document.querySelector(".js-list-container"),
    btnLoadMore : document.querySelector('[data-action="load-more"]')
};
refs.newsForm.addEventListener("submit",onSource);
refs.btnLoadMore.addEventListener("click",loadMore);

 class NewsApiService {
    constructor() {
        this.sourceQuery = "";
        this.page = 1;
    }
    fetchArticle () {

        const options = {
            headers : {
                Authorization: "0a6eeea406d74a34be3c6c704eaf1f8c",

            }
        };
        const url = `https://newsapi.org/v2/everything?q=${this.sourceQuery}&pageSize=5&page=${this.page}`;
       return fetch(url , options)
            .then(r => r.json())
            .then(data => {
                this.page += 1;
                return  data.articles;
            })
    };
     get query() {
        return this.sourceQuery;
 };
    set query(newQuery) {
        this.sourceQuery = newQuery;
    };
    resetPage (){
        this.page = 1;
    }

};

const newApiService = new NewsApiService();

function onSource (e) {
    e.preventDefault();

    newApiService.query = e.currentTarget.elements.query.value;
    newApiService.resetPage();
    newApiService.fetchArticle().then(articles => {
        console.log(articles)
    })
};

function loadMore (e) {
    newApiService.fetchArticle().then(articles => {
        console.log(articles)
    })
};

// const markup =
//     `<li>
//         <img src="{urlToImage}" alt="">
//         <h2>${title}</h2>
//         <p>${author}</p>
//         <p>${description}</p>
//     </li>
//     `


// NewSAPiService

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