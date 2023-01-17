// 생성자 함수
// 동적상속
function Base(a) {
    this.a = a;
}

class Sub extends Base {
    // constructor() {
    // }
}

const sub = new Sub(1)
console.log(sub.a); //1