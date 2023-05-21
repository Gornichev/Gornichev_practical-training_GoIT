import {Modal,Button} from "../../ext/bootstrap.native-master/dist/bootstrap-native.mjs";

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

// const modalContent = document.querySelector(".js-modal-content");
//
//
// function onModal () {
//     modalContent.classList.add(modal-content-show);
// };
//
// setTimeout(onModal,2000)

// const PROMPT_DELAY = 1000;
// let counter = 0;
// const MAX_PROMPT_NUMBER = 3;

// Modal at SetTimeOut
// const modal = new Modal("#userModal");
// const DELAY_TIME = 3000;
// const refs = {
//     modalUser : document.querySelector("#userModal")
// };
// modal.show()
// refs.modalUser.addEventListener("hide.bs.modal", ()=>{
//     console.log("Close")
// })
// function openModal () {
//     modal.show();
//     console.log("OPEN MODAl");
// };
//
// setTimeout(openModal,DELAY_TIME)

// Timer

// const timer = {
//
//     start(){
//        let counter = 0;
//         const StartTime = Date.now()
//         setInterval(()=>{
//             const currentTime = Date.now()
//             // console.log(`currentTime -> ${currentTime}`)
//             counter += 1;
//             console.log(`${counter} sec later`);
//             const differenceTime = currentTime - StartTime;
//             console.log(differenceTime)
//
//         },1000)
//     },
// }
// timer.start()
// TIMER

// class CountdownTimer {
//     constructor({ selector, targetDate }) {
//         this.selector = selector;
//         this.targetDate = targetDate;
//         this.timerId = null;
//     }
//
//     start() {
//         this.timerId = setInterval(() => {
//             const currentTime = Date.now();
//             const time = this.targetDate - currentTime;
//             this.updateClockface(time);
//             if (time <= 0) {
//                 this.stop();
//             }
//         }, 1000);
//     }
//
//     stop() {
//         clearInterval(this.timerId);
//         this.timerId = null;
//         this.updateClockface(0);
//     }
//
//     pad(value) {
//         return String(value).padStart(2, '0');
//     }
//
//     updateClockface(time) {
//         const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//         const hours = this.pad(
//             Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//         );
//         const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//         const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
//
//         const timerElement = document.querySelector(this.selector);
//
//         timerElement.querySelector('[data-value="days"]').textContent = days;
//         timerElement.querySelector('[data-value="hours"]').textContent = hours;
//         timerElement.querySelector('[data-value="mins"]').textContent = mins;
//         timerElement.querySelector('[data-value="secs"]').textContent = secs;
//     }
// }
//
// const timer = new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('May 18, 2023 00:00:00'),
// });
//
// timer.start();

// colorChange
// const colors = [
//     '#6e2121',
//     '#f3c921',
//     '#4CAF50',
// ];
//
// const startButton = document.querySelector('button[data-action="start"]');
// const stopButton = document.querySelector("button[data-action='stop']");
//
// let intervalId = null;
// const body = document.body
//
// startButton.addEventListener('click', () => {
//     if (!intervalId) {
//         intervalId = setInterval(() => {
//             const randomColor = colors[Math.floor(Math.random() * colors.length)];
//             body.style.backgroundColor = randomColor;
//         }, 1000);
//     }
// });
//
// stopButton.addEventListener('click', () => {
//     clearInterval(intervalId);
//     intervalId = null;
// });


const promise = new Promise(((resolve, reject) => {

    const info = Math.random() > 0.5;
    if (info){
        resolve ("Victory");
    }
    reject ("defeat");
}))

promise.then(resolve => {
    console.log("!!!!")
})