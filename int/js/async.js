// Async function
// async function getMoto () {
//     const response = await fetch(" http://localhost:0543/motorcycle");
//     const moto = await response.json()
//     return moto
// };
//
// getMoto().then(console.log)
//
// getMoto().then(moto => moto.json()).then(data => {
//     data.map(element => {
//         console.log(element.name)
//     })
// })
//
// const arrow = async () => {
//
// };
//
// const fn = async function () {
//
// }
//
// class Moto  {
//     async getName () {
//
//     }
// }

function getMoto (name)  {

    const motorcycles = {

        suzuki : "🏍️",
        lonsin  : "🏍️🏍️",
        geon : "🏍️🏍️🏍️"
    };
    return Promise.resolve(motorcycles[name])
};


async function makeRide () {

    const data = getMoto("suzuki")
    console.log(data)
};

makeRide()



// function getMoto(name) {
//     const motorcycles = {
//         suzuki: "🏍️",
//         lonsin: "🏍️🏍️",
//         geon: "🏍️🏍️🏍️",
//     };
//     return motorcycles[name];
// }
//
// async function makeRide() {
//     const data = getMoto('suzuki');
//     console.log(data);
// }
//
// makeRide();