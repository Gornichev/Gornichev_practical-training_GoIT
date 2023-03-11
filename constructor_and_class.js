// const mangoUser = {
//     label: 'mango',
//     price : 25,
//     quantity :2,
//     tags: ["js", "de"],
//     isOnline : true
// };
//
// const cloneUser = Object.create(mangoUser);
// cloneUser.name = "ok";
// console.log(cloneUser)
// console.log(cloneUser.name)
// console.log(cloneUser.hasOwnProperty("name"))

// console.log(cloneUser.price);
// class User {
//     #email;
//
// constructor(name,email,age) {
//     this.name = name;
//     this.age = age;
//     this.#email = email;
//
// }
//     getEmail(){
//         return this.#email
//     }
//     getAge(newAge){
//    return  this.age = newAge
//     }
//     getText(text){
//         console.log(`${this.name} ${this.age} ${text}`)
//     }
// }
//
// const mango = new User("OLya", "www.lena@","30")
// const yurii = new User ("Vova", "www.@.com","31")
//
// // console.log(yurii.email)
// console.log(mango.getEmail())
// console.log(mango.email)
// // console.log(yurii.getAge("65"))
// const sveta = new  User ("Sveta","www@@@!!","18")
// sveta.getText("years")

// class MyUser {
//     constructor(name, isOnline, age) {
//         this.name = name;
//         this.age = age;
//         this.isOnlene = isOnline;
//
//     }
//     getName(newName){
//         return this.name + newName
//     }
//     showInfo =  () => {
//         console.log(this.name, this.age, this.isOnlene)
//     }
//     showThis =  () => {
//         console.log(this)
//     }
// }
//
// const alex = new MyUser("Alex","true","23")
// console.log(alex)
// // alex.name = "Kolya"
// // console.log(alex.getName(" master"))
// alex.showInfo()
// ========= Get Set

class MyUser {
    #age;
    static isAdult = true;
    // - статичний метод тільки у клааса не у інстанса(екземпляра)

    constructor(name, isOnline, age, email) {
        this.name = name;
        this.#age = age;
        this.isOnlene = isOnline;
        this.email = email;
    }
    showName(){
        return this.name
    }
    showNewEmail(){
        console.log("!!!");
    }
   get showAge (){
        return this.#age
    }
    set showAge (newAge){
        this.#age = newAge;
    }

}
class NewUser  extends  MyUser {
constructor(name, isOnline, age, email, isGood) {
    super(...arguments);
    this.isGood = isGood;
}
    showInform () {
        return this
    }
    showParent () {
     return super.showName()
    }
}
class OldUser extends NewUser {
    constructor(name, isOnline, age, email, isGood, music) {
        super(...arguments);
        this.music = music;
    }
    likeMusic(){
        return `${this.name} like ${this.music}`
    }
    showParent(){
        return super.showName()
    }
}

const valentin = new NewUser ("valentin","true","78","www.valentin","no")
const victor = new NewUser ("victor","true","11","www.victor","yes")
const alex = new MyUser("Alex","true","23")
const lena = new OldUser("lena","true","30","www.lena","no","rap")

// console.log(lena.showParent())
// console.log(lena.showInform)
// console.log(victor.showParent())
// console.log(valentin.showParent())
// console.log(NewUser)
// console.log(NewUser.isAdult)
// console.log(NewUser)
// console.log(alex.age = "1000")
// console.log(alex)
// console.log(MyUser.isAdult) - статичний метод тільки у клааса не у інстанса(екземпляра)

