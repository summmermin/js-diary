// 생성자 함수
function Circle(radius) {
    // 1. 암묵적으로 빈객체가 생성되고 this 에 바인딩된다.

    // 2. this 에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.summer = function () {
        return this.radius * 2;
    }
    // 3. 완성된 인스턴스가 바인딩된 this 가 암묵적으로 반환된다.
}

const circle1 = new Circle(2)
const circle2 = new Circle(10)
console.log(circle1) // {radius:2,summer():function(){}}
console.log(circle1.summer()) //4
console.log(circle2.summer()) //20