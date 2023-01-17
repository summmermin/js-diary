class Person {
    constructor(name) {
        this.name = name;
    }
}
const me = new Person('summer');
console.log(me); //Person {name:'summer'}

class Job{
    // 클래스 필드에 문자열 할당
    name='developer';

    // 클래스 필드에 함수 할당
    getName=function (){
        return this.name;
    }
    // getName=()=>{this.name}
}
const x=new Job();
console.log(x); //Job{name: 'developer', getName: ƒ}
console.log(x.getName()); //'developer'