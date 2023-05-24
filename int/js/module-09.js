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

// const promise = new Promise(((resolve, reject) => {
//
//     const info = Math.random() > 0.5;
//     if (info){
//         resolve ("Victory");
//     }
//     reject ("defeat");
// }))
//
// promise.then(onFulfilled,onReject).catch(onError);
//
// function onFulfilled (value) {
//     console.log(`Перемога ${value}`);
// };
//
// function onReject (value) {
//     console.log(`Поразка ${value}`);
// };
//
// function onError (value) {
//     console.log(`Catch ${value}`)
// };
//
//
// // Напиши функцію delay(ms), яка повертає проміс, що переходить в стан "resolved" через ms мілісекунд.
// // Значенням промісу, яке виповнилося має бути та кількість мілісекунд, яку передали під час виклику функції delay.
//
//     const delay = ms => {
//
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve(ms);
//         },ms)
//     });
// };
//
// const logger = time => console.log(`Resolved after ${time}ms`);
//
// delay(2000).then(logger); // Resolved after 2000ms
// delay(1000).then(logger); // Resolved after 1000ms
// delay(1500).then(logger); // Resolved after 1500ms

// Завдання 2
// Перепиши функцію toggleUserState() так, щоб вона не використовувала callback-функцію callback,
// а приймала всього два параметри allUsers і userName і повертала проміс.

// const users = [
//     { name: 'Mango', active: true },
//     { name: 'Poly', active: false },
//     { name: 'Ajax', active: true },
//     { name: 'Lux', active: false },
// ];
//
// const toggleUserState = (allUsers, userName) => {
//
//     return new Promise(resolve => {
//         const updatedUsers = allUsers.map(user =>
//             user.name === userName ? { ...user, active: !user.active } : user,
//         );
//
//         resolve(updatedUsers);
//     });
// };
//
// const logger = updatedUsers => console.table(updatedUsers);
//
// /*
//  * Зараз працює так
//  */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);
//
// /*
//  * Повинно працювати так
//  */
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);

// Завдання 3
// Перепиши функцію makeTransaction() так, щоб вона не використовувала callback-функції onSuccess і onError,
// а приймала всього один параметр transaction і повертала проміс.
//
//     const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };
//
// const makeTransaction = (transaction) => {
//
//     const promise =  new Promise(((resolve, reject) => {
//
//         const delay = randomIntegerFromInterval(200, 500);
//
//         setTimeout(() => {
//             const canProcess = Math.random() > 0.3;
//
//             if (canProcess) {
//                 resolve(transaction.id, delay);
//             } else {
//                 reject(transaction.id);
//             }
//         }, delay);
//
//     }));
//     return promise
// };
//
//
//
// const logSuccess = (id, time) => {
//     console.log(`Transaction ${id} processed in ${time}ms`);
// };
//
// const logError = id => {
//     console.warn(`Error processing transaction ${id}. Please try again later.`);
// };
//
// // /*
// //  * Працює так
// //  */
// // makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// // makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// // makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// // makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
// // /*
// //  * Повинно працювати так
// //  */
// makeTransaction({ id: 70, amount: 150 })
//     .then(logSuccess)
//     .catch(logError)
//     .finally(()=> console.warn("FINALY!"))
//
// makeTransaction({ id: 71, amount: 230 })
//     .then(logSuccess)
//     .catch(logError);
//
// makeTransaction({ id: 72, amount: 75 })
//     .then(logSuccess)
//     .catch(logError);
//
// makeTransaction({ id: 73, amount: 100 })
//     .then(logSuccess)
//     .catch(logError);

// -------#Examples----------

// function fetchPokemonById (id ) {
//
//    return  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//                 .then(r => r.json())
// } ;
//
// fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);
//
// function onFetchSuccess (pokemon) {
//     console.log(pokemon);
// };
//
// function onFetchError (error) {
//     console.log("ERROR!!!")
//     console.log(error);
// }
//

// Hippodrome
const horses = [
    "Chicken",
    "Pig",
    "Oliver",
    "Fanny Devils",
    "Mather-case"
];

const refs = {
    btnStart : document.querySelector(".js-btn-start"),
    winner : document.querySelector(".js-winner"),
    progress : document.querySelector(".js-progress"),
    tableBody : document.querySelector(".js-table-body")
};

refs.btnStart.addEventListener("click",getStartRace);

function getStartRace () {
    const promises = horses.map(horse => run(horse));

    Promise.race(promises).then(({horse,time}) => {
        refs.winner.textContent = `Winner < ${horse} > time [${time}]`;

    });

    Promise.all(promises).then((horses) => {
        horses.map(({horse,time}) => {
            const tr = `<tr><td></td><td>${horse}</td><td>${time}</td></tr>`
            refs.tableBody.insertAdjacentHTML("beforeend",tr)
        })
    });

    updateProgressField("Race Start! Bids are no longer accepted.");
    updateWinnerField("");
};


function updateWinnerField (message) {
    refs.winner.textContent = message;
};

function updateProgressField (message) {
    refs.progress.textContent = message
};

function run (horse) {
    return new Promise(resolve => {

        const time = randomIntegerFromInterval(2000,4000);
        setTimeout(()=>{
            resolve({horse,time})
        },time)
    })
};

function randomIntegerFromInterval  (min, max)  {
    return Math.floor(Math.random() * (max - min + 1) + min);
};



