// 생성자 함수와 클래스 방식 비교하기
// 1. 생성자 함수 방식
const summer = (function () {
    function Person(name) {
        this.name = name;
    }

// 프로토타입 메서드
    Person.prototype.sayHello = function () {
        console.log(`${name}가 안녕이래요`)
    }
//정적 메서드
    Person.sayHi = function () {
        console.log('hi!')
    }
    // 생성자함수 반환
    return summer;
}());

//2. 클래스 방식
class Per {
    // 초기 생성
    constructor(myName) {
        this.myName = myName;
    }
    // 프로토타입 메서트
    sayMyName() {
        console.log(`너의 이름은 ${this.myName}`)
    }
    // 정적 메서드(인스턴스를 생성하지 않아도 호출할수있는 메서드)
    static sayName() {
        console.log(`안녕!`)
    }
}

console.log(typeof Per); //function