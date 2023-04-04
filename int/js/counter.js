const counter = {
    value : 0,
    increment (value) {
        console.log("increment this ", this);
        this.value += 1;
    },
    decrement (value) {
        console.log("decrement this ", this);
        this.value -= 1;
    }
}
// console.log(counter.__proto__)
// const buttonIncr = document.querySelector(".js-increment");
// const buttonDcr = document.querySelector(".js-decrement");
// const buttonValue = document.querySelector(".js-value");
// console.log(buttonValue)
//
// buttonDcr.addEventListener("click",()=>{
//
//     counter.decrement();
//     buttonValue.textContent  = counter.value
//
// })
//
// buttonIncr.addEventListener("click",()=>{
//
//     counter.increment();
//     buttonValue.innerHTML  = counter.value
// })



