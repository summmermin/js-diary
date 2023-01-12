const circle1 = {
    radius :5,
    summer(){
        return 2*this.radius;
    }
}
console.log(circle1.summer()); //10

const circle2={
    radius: 3,
    summer() {
        return 2*this.radius;
    }
}
console.log(circle2.summer()) //6