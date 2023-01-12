const arr=[1]
arr.push(2)//[1,2]
arr.concat(3) //[1,2,3]
delete arr[1] //[1, ,3] 희소배열이 생성
arr.splice(1,1) //삭제될 인덱스, 삭제할 수 //[1,3]

let result=arr.pop(); //마지막 배열 없애고 없앤값 반환
console.log(result) //3
console.log(arr) //[1]

const arr2=[1,2,3,4,5]
let summer=arr2.unshift(7,8) //[7,8,1,2,3,4,5]
console.log(arr2)
let sh=arr2.shift(); //첫번째 요소 제거 7 / [8,1,2,3,4,5]
console.log(arr2)

const arr3=[1,2,3,4]
arr3.splice(1,2,30,40) //[1,30,40,4]
//1번인덱스부터, 2개를 지우고, 그자리에 30 40을 넣어라
const arr4=[7,8,9,0]
arr4.slice(0,2) //0번인덱스부터 2번인덱스전까지 복사해반환 [7,8]