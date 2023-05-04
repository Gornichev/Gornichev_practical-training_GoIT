// let getEl = selector => document.querySelector("selector");

const btnTimeout = document.querySelector("#js-btn-timeout");
const btnInterval = document.querySelector("#js-btn-interval");
const btnClear = document.querySelector("#js-btn-clear");

btnTimeout.addEventListener("click",startTimer);
btnInterval.addEventListener("click",startInterval);
btnClear.addEventListener("click",clearInterval);

let intervalId;
function clearInterval () {
    clearInterval(intervalId);
};

function startTimer () {

    setTimeout(()=> {
        console.log("Start Timer");
    },2000);
};

function startInterval () {
  intervalId = setInterval(()=> {
        console.log("start Interval")
    },500);
};


