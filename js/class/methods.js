// constructor
class Person {
    constructor() {
        this.name = 'summer'
        this.pet = 'kong'
    }
}
const me = new Person()
console.log(me) //Person{name: 'summer', pet: 'kong'}

class Song{
    constructor(num,address) {
        this.num=num;
        this.address=address;
    }
}
const x=new Song(1,'seoul')
console.log(x) //Song{num: 1, address: 'seoul'}