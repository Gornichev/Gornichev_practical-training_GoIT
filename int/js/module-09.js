// let getEl = selector => document.querySelector("selector");

// const btnTimeout = document.querySelector("#js-btn-timeout");
// const btnInterval = document.querySelector("#js-btn-interval");
// const btnClear = document.querySelector("#js-btn-clear");
//
// btnTimeout.addEventListener("click",startTimer);
// btnInterval.addEventListener("click",startInterval);
// btnClear.addEventListener("click",clearInterval);
//
// let intervalId;
// function clearInterval () {
//     clearInterval(intervalId);
// };
//
// function startTimer () {
//
//     setTimeout(()=> {
//         console.log("Start Timer");
//     },2000);
// };
//
// function startInterval () {
//   intervalId = setInterval(()=> {
//         console.log("start Interval")
//     },500);
// };
//
// const timerId =  setTimeout(testFunc,2000);
//
// function testFunc () {
//     console.log("!")
// };
//
// clearTimeout(timerId);

// Notification

// const notification = document.querySelector(".js-alert");
// notification.addEventListener("click",offNotification);
//
// const NOTIFICATION_DELAY = 4000;
// let timerId = null;
// onNotification();
//
// function offNotification () {
//     notification.classList.add("section-note-hide");
//     clearTimeout(timerId);
// };
//
// function onNotification () {
//     notification.classList.remove("section-note-hide");
//    const timerId = setTimeout(()=> {
//         offNotification();
//         console.log("off Note")
//     },NOTIFICATION_DELAY)
// };

// reiteration

// const PROMPT_DELAY = 1000;
// let counter = 0;
// const MAX_PROMPT_NUMBER = 3;
//
// const intervalId = setInterval(()=>{
//     if(counter === MAX_PROMPT_NUMBER){
//         console.log("Enough!");
//         clearInterval(intervalId);
//         return;
//     };
//     console.log(`Follow us lady  ${Date.now()}`);
//     counter += 1;
// },PROMPT_DELAY);

