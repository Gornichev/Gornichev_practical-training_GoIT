// const mainFilter = (array,callback) => {
//     const totalArr = [];
//     for (const el of array){
//         const passed = callback(el);
//         if (passed){
//             totalArr.push(el)
//         }
//     }
//     console.log(totalArr)
// }
// const welcomeFunction = (value) => value > 6
//
// mainFilter([1,4,6,7,8,4,66],welcomeFunction)
// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Полі", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Ківі", score: 94 },
//     { name: "Х'юстон", score: 64 },
// ];
//
// const studentFilter = (student) => student.score === 37;
// mainFilter(students,studentFilter)
//
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#175888", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#a49b23", rgb: "255,235,59" },
// ];
//
// const colorFilter = (color) => color.rgb === "244,67,54"
// mainFilter(colors,colorFilter)


// const makeSheff = (name) => {
//
//     const makeDish = (dish) => {
//         console.log(`${name} готує ${dish}`)
//     }
//     return makeDish()
// }

// const makeSheff = function (name){
//     const makeDish = function (dish) {
//         return `${name} готує ${dish}`
//     }
//     return makeDish()
// }
//
// const poly = makeSheff("Oliver")
//
// poly()

const makeSheff = (name) => {
    return (dish) => {
        console.log(`${name} make ${dish}`)
    }
}

const sheffDen = makeSheff("den4ik")
const sheffOliver = makeSheff("oliver")

sheffDen("pasta")
sheffOliver("rise")