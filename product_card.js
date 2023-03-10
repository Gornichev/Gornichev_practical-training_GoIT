// const cart = {
//     items: [],
//     getItems() {
//         return this.items
//     },
//     add({name,price}){
//
//         return this.items = [...this.items,{name,price}]
//
//     },
//     remove(productName){
//
//         for (let i = 0; i < this.items.length; i += 1){
//             const {name} = this.items[i]
//
//             if(name === productName){
//                 return this.items.splice([i],1)
//             }
//         }
//     },
//     clear(){
//         return this.items = []
//     },
//
//     countTotalPrice() {
//         const {items} = this.items
//
//         let total = 0;
//         for (let {price} of items) {
//             total += price
//         }
//         return total
//     }
//
// }
// cart.getItems();
// cart.add({name: "apple", price: 5});
// cart.add({name:"lemon", price: 5});
// cart.add({name:"Orange", price: 15});
// cart.add({name:"Strawberry", price: 40});
// cart.add({ name:"watermelon", price: 10});
//
// cart.remove("Orange");
// // console.log(cart.items)
// // console.log(cart.countTotalPrice())
// cart.clear();

// ==================
const products = [
  { name: "orange", price: 1300, quantity: 4, category : "fruits", id: 1},
  { name: "apple", price: 2700, quantity: 3,category : "vegetables",id: 4},
  { name: "watermelon", price: 400, quantity: 7, category : "fruits", id: 4},
  { name: "Strawberry", price: 1200, quantity: 9,category : "fruits", id: 6 },
  { name: "carrot", price: 22, quantity: 2,category : "vegetables", id: 8 },
];