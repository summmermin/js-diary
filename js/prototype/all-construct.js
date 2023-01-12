function foo() {
}

foo.prop = 10
foo.summer = function () {
    return this.prop * 2;
}
foo.summer();

// 생성자함수로 정의되지 않은 일반함수
function add(x, y) {
    return x + y;
}

const a = new add(); //함수가 객체를 반환하지 않았기때문에 빈값으로 반환
console.log(a); //{}

// 객체를 반환하는 일반함수
function add2(name,id){
    return{name, id}
}
const b= new add2('summer','djfis567')
console.log(b); //{name:'summer',id:'djfis567'}
