// Cards Rickandmorty

const refs = {
    root : document.querySelector("#root-items-card"),
    itemList : document.querySelector("#js-item-list"),
    bntReadPersonage : document.querySelector("#js-bnt"),
};

function getData () {
    fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then((items) => {
            const markup = items.results.map(item =>
                `
                    <li class="item">
            <img src="${item.image}" alt="">
            <p class="name">${item.name}</p>
            <p class="gender">${item.gender}</p>
            <p class="status">${item.status}</p>
            <p class="id">${item.id}</p>
        </li>
            `
            ).join("");
            refs.itemList.insertAdjacentHTML("beforeend",markup)
        });
};

refs.bntReadPersonage.addEventListener("click",getData);

