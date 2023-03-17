const title = document.querySelector(".userClass")
const btnUser = document.querySelector(".button-user-click")

btnUser.addEventListener("click",()=>{
    title.classList.toggle("changeColor")
})

// title.classList.add("changeColor")
