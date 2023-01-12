// Object.keys
// 생성자 함수.keys=fuction(){}
const summer = {'name': 'summer', 'grade': 100, 'car': false}
console.log('Object.keys(arr)', Object.keys(arr));
//Object.keys(arr) ['0','1','2','3']
const o = {name: 'summer', city: 'seoul'}
Object.keys(o);
console.log(o); //['name','city']


// Object.prototype.toString
// 생성자함수.프로토타입.메소드=function(){}
const a ={}
a.toString();
const b= [1,2,3];
b.toString(); //'1,2,3' 배열이 담고있는 값만을 출력