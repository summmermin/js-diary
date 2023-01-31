// const promise=new Promise(function (resolve,reject){
// //     ...
// })
// function returnPromise(){
//     return new Promise((resolve,reject)=>{
//     //     ...
//     })
// }
function devide(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num2 === 0) reject(new Error("에러메시지"));
        else resolve(num1 / num2);
    });
}

devide(8, 2)
    .then((result) => console.log(`성공했다`, result))
    .catch((error) => console.log(`실패`, error))
// 성공했다 4

devide(8, 0)
    .then((result) => console.log(`성공했다`, result))
    .catch((error) => console.log(`실패`, error))
//실패 에러메시지

// Promise는 then()과 catch() 메서드를 통해서 동기 처리 코드에서 사용하던 try-catch 블록과 유사한 방법으로 비동기 처리 코드를 작성할 수 있다