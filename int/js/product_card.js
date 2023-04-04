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
//
// cart.add({name: "apple", price: 5});
// cart.add({name:"lemon", price: 5});
// cart.add({name:"Orange", price: 15});
// console.log(cart.getItems())
// cart.add({name:"Strawberry", price: 40});
// cart.add({ name:"watermelon", price: 10});
//
// cart.remove("Orange");
// // console.log(cart.items)
// // console.log(cart.countTotalPrice())
// cart.clear();

// ==================
const items = [
  { name: "orange", price: 1300, quantity: 4, category : "fruits", id: 1},
  { name: "apple", price: 2700, quantity: 3,category : "vegetables",id: 4},
  { name: "watermelon", price: 400, quantity: 7, category : "fruits", id: 4},
  { name: "Strawberry", price: 1200, quantity: 9,category : "fruits", id: 6 },
  { name: "carrot", price: 22, quantity: 2,category : "vegetables", id: 8 },
];

class Cart {
  // #items  Приватне поле

  #items
  constructor(name,items) {
    this.name = name;
    this.#items = items;
  }

  showItems (items){
      for (let item of this.#items) {
        console.log(item)
      }
   }

  addItem ({name,price,quantity,category,id}){
    return [
      ...this.#items,
      {name,price,quantity,category,id : this.generateId()},
    ]
  }
  updateItem(updateName,newName){

    this.#items.forEach(el => {

       if (el.name === updateName){
         el.name = newName;
       }
    })
  }
  deleteItem (findItem){
    this.#items.forEach(el =>{
      if(el.name === findItem){
        let idx = this.items.indexOf(el)
        this.#items.splice(idx,1)
      }
    })
  }
  generateId (){
    return Math.random().toString().slice(0,4);
  }
}

// const atb = new Cart("AtB",items)
// const silpo = new Cart("AtB",items)
// const fora = new Cart("AtB",items)
//
// // show ===
// atb.items = null
// atb.showItems()
//
// // add ======
// // const newItem =  { name: "newItem", price: 0, quantity: 0, category : "fruits", id: 0}
// // // console.log(atb.addItem(newItem))
// // console.log(fora.addItem(newItem))
//
// // update ===
// // atb.updateItem("watermelon", "Super_Lemon")
// fora.updateItem("watermelon", "Super_Lemon")
// atb.showItems()

// delete
// atb.deleteItem("watermelon")
// atb.showItems()

// generateId
// console.log(atb.generateId())
// atb.showItems()
