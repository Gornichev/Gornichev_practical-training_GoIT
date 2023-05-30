// Cards Rickandmorty

const refs = {
    root : document.querySelector("#root-items-card"),
    itemList : document.querySelector("#js-item-list"),
    bntReadPersonage : document.querySelector("#js-bnt"),
};

function getData() {
    fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const markup = data.results
                .map(
                    ({ image, name, status, gender, location, id }) =>
                        `<li class="item">
              <img src="${image}" alt="">
              <p class="name">${name}</p>
              <p class="gender">${gender}</p>
              <p class="status">${status}</p>
              <p class="location">${location.name}</p>
              <p class="id">${id}</p>
            </li>`
                )
                .join("");

            refs.itemList.insertAdjacentHTML("beforeend", markup);
        });
}

refs.bntReadPersonage.addEventListener("click",getData);

