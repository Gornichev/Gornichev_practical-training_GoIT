// const mainFilter = (array,callback) => {
//     const totalArr = []
//     for (const el of array){
//         totalArr.push(el)
//     }
//     console.log(totalArr)
// }

const mainFilter = function (array,callback){
    const totalArr = [];
    for (const el of array){
        const passed = callback(el);
        if(passed) {
            totalArr.push(el)
        }
    }
    console.log(totalArr)
}
const welcomeFunction = (value) => value > 6

mainFilter([1,4,6,7,8,4,66],welcomeFunction)
//
// const errorFunction = () => {
//     console.log("error")
// }


