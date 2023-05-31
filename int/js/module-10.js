// Cards Rickandmorty

const refs = {
    root : document.querySelector("#root-items-card"),
    itemList : document.querySelector("#js-item-list"),
    bntReadPersonage : document.querySelector("#js-bnt"),
};

let pageCounter = 1;

function getData() {

    fetch(`https://rickandmortyapi.com/api/character?page=${pageCounter}`)
        .then((response) => response.json())
        .then((data) => {

            console.log(pageCounter)
            // console.log(data.results);
            // if(data.results.length >= 2) {
            //     data.results = data.results.slice(0,4); /// завантажить тільки перші 4 елемети масиву
            // }
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
            pageCounter += 1
        });
};

refs.bntReadPersonage.addEventListener("click",getData);

