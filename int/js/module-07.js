// // (event bubbling
//
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");
//
// // parent.addEventListener("click", () => {
// //     alert("Parent click handler");
// // });
// //
// // child.addEventListener("click", () => {
// //     alert("Child click handler");
// // });
// //
// // descendant.addEventListener("click", () => {
// //     alert("Descendant click handler");
// // });
// //
//
//
// // parent.addEventListener("click", (event) => {
// //     console.log("event.target: ", event.target);
// //     console.log("event.currentTarget: ", event.currentTarget);
// // });
//
// //
// // parent.addEventListener("click", () => {
// //     alert(
// //         "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
// //     );
// // });
// //
// // child.addEventListener("click", () => {
// //     alert(
// //         "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
// //     );
// // });
// //
// // descendant.addEventListener("click", (event) => {
// //     event.stopPropagation();
// //     alert("Descendant click handler");
// // });
// //
// //
// const listenerBnt = document.querySelector(`.listenerBtn`);
//
//
// // listenerBnt.addEventListener(`click`,(event)=> {
// //
// //     // if (event.target.nodeName !== "BUTTON") {
// //     //    return;
// //     // };
// //     // console.log("use Bubbling");
// //     console.log(event.target.dataset)
// //
// // });
//
// const output = document.querySelector(".output");
// let scrollEventCounter = 0;
//
// document.addEventListener("scroll", () => {
//     scrollEventCounter += 1;
//     output.textContent = scrollEventCounter;
// });
//
// // document.addEventListener("scroll", _.throttle(() => {
// //         console.log("Scroll handler call every 300ms");
// //     }, 300)
// // );
//
// // document.addEventListener("scroll", _.debounce(() => {
// //         console.log("Scroll handler call after 300ms pause");
// //     }, 300)
// // );
//
// // event-delegation
//
// const tags = document.querySelector(".js-tags");
// const activeTeg = document.querySelector(".js-active-tag");
//
// tags.addEventListener("click", onTagClick);
//
// function onTagClick (event){
//
//     if(event.target.nodeName !== "BUTTON"){
//         return;
//     };
//     console.log("Btn");
//
//     const prevTags = event.currentTarget.querySelector(".tags-bnt-active");
//
//     if(prevTags) {
//         prevTags.classList.remove("tags-bnt-active");
//     };
//
//     const nextTags = event.target;
//     nextTags.classList.add("tags-bnt-active");
//
//     activeTeg.textContent = nextTags.dataset.value
//
// };

// Lodash
// Talking events

// window.addEventListener("scroll", _.throttle(onScrollFunc,2000));  // виконуе ф-цію раз в 2 секунди
// window.addEventListener("scroll", _.debounce(onScrollFunc,2000));  // через 2 секунди буде викликанаф-ія
//
// function onScrollFunc (event) {
//     console.log(event)
// };

// input

// const inputRef = document.querySelector(".js-input");
// const outputRef = document.querySelector(".js-output");
//
// inputRef.addEventListener("input", _.debounce(onInput,3000));
//
// function onInput (event) {
//         outputRef.textContent = event.target.value
// };


// console.log(window.IntersectionObserver)

// Node-Js server

// const http = require("http");
//
// const server = http.createServer((require,res)=> {
//
//     res.setHeader("Content-type","text/html");
//     res.end(html);
//     const html = "<h1>Hello Nigga from NodeJs</h1>"
// });
//
// const PORT = 5000;
// server.listen(5000,()=> {
//
//     console.log(`server running on port ${Port}`)
// })


// Репета
// const lodash = _;
// console.log(_.add(2,3));
// console.log(lodash.add(2,1))
// console.log(_.isEqual(1,2))


// Filter element on Input
// import film from "./database.js";
//
// const inputRef = document.querySelector("#filter-input");
// const inputResultRef = document.querySelector("#js-input-result");
//
// inputRef.addEventListener("input", _.debounce(onFilmChange,1000));
//
// const createListItems = (items) => {
//
//     return items.map(item =>`<li>${item.name}</li>`).join("");
//
// };
//
// const listenItems = createListItems(film);
// // inputResultRef.innerHTML = listenItems;
//
// function onFilmChange (event) {
//     const filter = event.target.value.toLowerCase();
//
//     const filtered = film.filter((element) =>  element.name.toLowerCase().includes(filter));
//     const listenItems = createListItems(filtered);
//     inputResultRef.innerHTML = listenItems;
// };

// function innerMarkup (markup) {
//
//     inputResultRef.innerHTML = markup;
// }

// Lazy Loading
// const allImage = document.querySelectorAll('img[loading="lazy"]');
//
// allImage.forEach((image)=> {
//
//     image.addEventListener("load", onImageLoader,{once: true});  //// знімае listener
// });
//
// function onImageLoader (event) {
//
//     event.target.classList.add("appear")
//     console.log("Image upload");
//     console.log(event.target)
// };
// <script async src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
//         integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
//         crossOrigin="anonymous"
//         referrerpolicy="no-referrer"
// {/*></script>*/}

if ("loading",HTMLImageElement.prototype){
    console.log("Yes")

    // const scriptCreate = document.createElement("Script");
    // scriptCreate.src = "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js";
    // scriptCreate.integrity = "sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==";
    // scriptCreate.crossOrigin = "anonymous";
    // scriptCreate.referrerpolicy = "no-referrer";
    // document.body.append(scriptCreate)


    const img = document.createElement("img");
    img.class = "gallery-image";
    img.src =  "./int/image/2.jpg";
    img.width = 200
    img.height = 200
    document.body.append(img);

} else {
    console.log("NO!")
}