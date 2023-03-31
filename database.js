const dataBase = [
    {id: 28, name: "Action",isAvailable : true},
    {id: 12, name: "Adventure",isAvailable : true},
    {id: 16, name: "Animation",isAvailable : true},
    {id: 35, name: "Comedy",isAvailable : false},
    {id: 80, name: "Crime",isAvailable : false},
    {id: 99, name: "Documentary", isAvailable : true},
    {id: 18, name: "Drama", isAvailable : true},
    {id: 10751, name: "Family",isAvailable : false},
    {id: 14, name: "Fantasy",isAvailable : false},
    {id: 36, name: "History",isAvailable : true},
    {id: 27, name: "Horror",isAvailable : false},
    {id: 10402, name: "Music",isAvailable : false},
    {id: 9648, name: "Mystery",isAvailable : false},
    {id: 10749, name: "Romance",isAvailable : false},
    {id: 878, name: "Science Fiction",isAvailable : false},
    {id: 10770, name: "TV Movie",isAvailable : false},
    {id: 53, name: "Thriller",isAvailable : false},
    {id: 10752, name: "War",isAvailable : false},
    {id: 37, name: "Western",isAvailable : false}
];

const makeFilmMarkUp = ({name,id,isAvailable}) => {
    return `
    <tr>
    <th>${name}</th>
    <th>${id}</th>
    <th>${isAvailable}</th>
    </tr>
    `
};

const optionsRef = dataBase.map(makeFilmMarkUp).join(" ");

const movieGenreRef = document.querySelector(".js-movie-genres");

movieGenreRef.insertAdjacentHTML("beforeend",optionsRef);