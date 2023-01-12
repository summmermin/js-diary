//동일한 생성자 함수에 의해 생성된 모든 인스턴스가 동일한 메서드를 중복 소유하는 것은 메모리를 불필요하게 낭비한다.
function Circle(radius) {
    this.radius = radius;
    this.getArea = function () {
        return this.radius * Math.PI * 2;
    }
}

const circle1 = new Circle(1)
const circle2 = new Circle(5)
console.log(circle1.getArea === circle2.getArea); //false
console.log(circle1.getArea());
console.log(circle2.getArea());

// 프로토타입으로 상속을 구현하여 재사용성 올리기

