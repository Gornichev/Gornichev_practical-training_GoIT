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
const buttonIncr = document.querySelector(".js-increment");
const buttonDcr = document.querySelector(".js-decrement");
const buttonValue = document.querySelector(".js-value");

buttonDcr.addEventListener("click",()=>{

    counter.decrement();
    valueEl.textContent = counter.value
})

buttonIncr.addEventListener("click",()=>{

    counter.increment();
    valueEl.textContent = counter.value
})