// 1. object to json
// stringify(obj)
let json = JSON.stringify(true);
console.log(json) //true
json = JSON.stringify(['apple', 'banana']);
console.log(json) // ["apple","banana"]

let dog = {
    name: 'ming',
    age: 5,
    size: null,
    birthdate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`)
    }
}

console.log(dog) // 함수는 오브젝트 안의 데이터가 아니어서 함수는 제외되서 나옴, 자바스크립트 만의 특별한 데이터도 안들어감
json = JSON.stringify(dog, ['name']) //뒤에 해당하는 프로퍼티만 정의되어서 나오게 된다 {"name":"ming"}
json = JSON.stringify(dog, (key, value) => {
    console.log(`key:${key}, value:${value}`);
    return key === 'name' ? 'summer' : value;
})

//2.json to object
//parse(json)
console.log(clear);
json = JSON.stringify(dog);
const obj = JSON.parse(json, (key, value) => {
    console.log(json)
    return key === 'birthdate' ? new Date(value) : value;
});
console.log(obj)
// obj.jump() 이거 안들어있다. stringfy 하면서 함수가 제외되기 때문에 다시 parse 할때도 없음
console.log(obj.birthdate.getDate());