function Grandpa() {
}

Grandpa.prototype.GrandpaProp = true;

function pa() {
}

pa.prototype = new Grandpa();

function babe() {
}

babe.prototype = new pa();

const o = new babe(); //new가 붙으면 단순한 함수가 아니라 생성자가 된다
console.log(o.GrandpaProp); //true

const obj = new Object();
obj.x = 1;
console.log(obj.constructor === Object) //true
console.log(obj.hasOwnProperty('x')) //true

//프로토타입에 프로퍼티 추가하여 하위 객체가 상속받을 수 있게 구현하기
function Person(name) {
    this.name = name;
}

Person.prototype.hey = function () {
    console.log(`안녕하세요 저의 이름은 ${this.name}입니다`)
}
const me=new Person('summer')
const you=new Person('you')
me.hey();
you.hey();