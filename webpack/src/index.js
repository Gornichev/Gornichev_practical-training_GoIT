import colors from  "../js/main";
import "./sass/base.sass";
import menuTemplates from "./templates/menu.handlebars";
import menuData from "./menuData";
import refs from "../js/refs";
import lodash from 'lodash.throttle'
import {Modal,Button,Carousel, Collapse, Dropdown} from "bootstrap.native"

const modal = new Modal("#exampleModal");
const PROMPT_DELAY = 3000;

function showModal () {
    modal.show();
    console.log("open modal window");
};

setTimeout(showModal,PROMPT_DELAY);


const  modalUser = document.querySelector("#exampleModal")

modalUser.addEventListener("hide.bs.modal", ()=> {
    console.log('!!!')
});




// colorsPictures
// const markup = menuTemplates(menuData);
// refs.root.innerHTML = markup;
// colors.map((color) =>{
//     console.log(`${color.hex} and ${color.rgb}`);
// });

// class User {
//     #age
//     constructor(status) {
//         this.status = status;
//         this.#age = age;
//     }
//     getInfo() {
//         console.log(this.#age)
//     }
// };

// const viva = new User("incognito", "26");
// console.log("Hello")


