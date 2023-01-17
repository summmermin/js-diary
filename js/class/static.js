// 1. static
class Person{
    // 정적 메소드 활용
    static area(width,height){
        return width*height;
    }
}
const me=new Person()
console.log(me.area(10,5))

// 2.프로토타입
class Per{
    constructor(name,address) {
        this.name=name;
        this.address=address;
    }
    // 프로토타입 메소드 활용
    arr(){
        return this.name+this.address;
    }
}
const you=new Per('안녕','반가워')
console.log(you.arr())
