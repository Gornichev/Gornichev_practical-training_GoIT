// (event bubbling

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//     alert("Parent click handler");
// });
//
// child.addEventListener("click", () => {
//     alert("Child click handler");
// });
//
// descendant.addEventListener("click", () => {
//     alert("Descendant click handler");
// });
//


// parent.addEventListener("click", (event) => {
//     console.log("event.target: ", event.target);
//     console.log("event.currentTarget: ", event.currentTarget);
// });

//
// parent.addEventListener("click", () => {
//     alert(
//         "Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//     );
// });
//
// child.addEventListener("click", () => {
//     alert(
//         "Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!"
//     );
// });
//
// descendant.addEventListener("click", (event) => {
//     event.stopPropagation();
//     alert("Descendant click handler");
// });
//
//
const listenerBnt = document.querySelector(`.listenerBtn`);


listenerBnt.addEventListener(`click`,(event)=> {

    // if (event.target.nodeName !== "BUTTON") {
    //    return;
    // };
    // console.log("use Bubbling");
    console.log(event.target.dataset)

});

const output = document.querySelector(".output");
let scrollEventCounter = 0;

document.addEventListener("scroll", () => {
    scrollEventCounter += 1;
    output.textContent = scrollEventCounter;
});

// document.addEventListener("scroll", _.throttle(() => {
//         console.log("Scroll handler call every 300ms");
//     }, 300)
// );

// document.addEventListener("scroll", _.debounce(() => {
//         console.log("Scroll handler call after 300ms pause");
//     }, 300)
// );

// event-delegation

const tags = document.querySelector(".js-tags");
const activeTeg = document.querySelector(".js-active-tag");

tags.addEventListener("click", onTagClick);

function onTagClick (event){

    if(event.target.nodeName !== "BUTTON"){
        return;
    };
    console.log("Btn");

    const prevTags = event.currentTarget.querySelector(".tags-bnt-active");
    if(prevTags) {
        prevTags.classList.remove("tags-bnt-active");
    };

    const nextTags = event.target;
    nextTags.classList.add("tags-bnt-active");

    activeTeg.textContent = nextTags.dataset.value

};


