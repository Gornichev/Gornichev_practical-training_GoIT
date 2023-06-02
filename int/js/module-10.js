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

const refs = {
    root : document.querySelector("#root-items-card"),
    itemList : document.querySelector("#js-item-list"),
    jsFormSearch : document.querySelector("#js-form-search")
};

function fetchPokemon (pokemonId) {

  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
};

function renderPokemonCard (pokemon) {

        const markup = `
            <li class="item">
              <img src="${pokemon.sprites.front_default}" alt="">
              <p class="sprites">Name: ${pokemon.name}</p>
              <p class="weight"> weight: ${pokemon.weight}</p>
              <p class="id">Stats : ${pokemon.id}</p>
            </li>`

    refs.itemList.insertAdjacentHTML("beforeend", markup);
};

refs.jsFormSearch.addEventListener("submit",getPokemon);

function getPokemon (event) {
    event.preventDefault();

    const form = event.target;
    const pokemonId = form.elements.query.value;

    fetchPokemon(pokemonId)
        .then(renderPokemonCard)
        .catch(onFetchError)
        .finally(()=> form.reset())
};

function onFetchError (error) {
    alert("Wrong request")
}