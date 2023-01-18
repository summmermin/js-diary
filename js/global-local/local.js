const x='글로벌'
function asd(){
    // 지역변수의 생명주기
    const x='로컬'
}
// 전역변수의 생명주기
// 메모리 리소스 사용을 줄이기 위해, 최대한 전역변수 사용 자제하자
asd();
console.log(x); //글로벌