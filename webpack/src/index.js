import colors from  "../js/main";
import "./sass/base.sass";
import menuTemplates from "./templates/menu.handlebars";
import menuData from "./menuData";
import refs from "../js/refs";
import lodash from 'lodash.throttle'
import {Modal} from "bootstrap.native"

const markup = menuTemplates(menuData);
refs.root.innerHTML = markup;

const modal = new Modal("#exampleModal");
modal.show()


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


