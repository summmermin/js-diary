// 전역 변수의 사용 억제하는 방법
//1. 즉시 실행 함수로 모든 코드 감싸서 즉시실행함수의 지역변수로 만들기
(function (){
    // ...
}());
//2. namespace
const MYNAME={};
MYNAME.person={
    name:'summer',
    num:2991,
    food:['떡볶이','샤브샤브','오꼬노미야끼','붕어빵']
};
console.log(MYNAME.person.food[1])
//네임스페이스 객체에 또 다른 네임스페이스 객체를 프로퍼티로 추가하여
//네임스페이스를 계층적으로 구성 but 그다지 유용하진않음 이거 자체가 전역변수에 할당되니까
//3.모듈패턴
//  모듈에서 선언된 모든 변수, 클래스, 함수 등은 모듈 외부에서 액세스할 수 없습니다.
export const summer='이 변수 사용하고 싶다면 import 할 것'