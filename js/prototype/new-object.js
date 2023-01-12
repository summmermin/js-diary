// object의 생성자 함수
// 빈 객체 생성
const person = new Object();

//프로퍼티 추가
person.name='kim'; //person:{name:'kim'}
person.sayHello=function (){  //person 아래 syaHello라는 함수 담음
    console.log(`안녕하세요 나는 ${this.name}`)
};

console.log(person.name);
person.sayHello();