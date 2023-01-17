class Animal{
    constructor(age,name) {
        this.age=age;
        this.name=name;
    }
    eat(){return '먹어'}
    drink(){return '마셔'}
}
const x=new Animal()
class Cat extends Animal{
    // extends 상속통해 클래스 확장
    charm(){
        return '귀여워'
    }
}
const cat=new Cat(1,'챠챠')
console.log(cat.eat())
console.log(cat.drink())
console.log(cat.charm())