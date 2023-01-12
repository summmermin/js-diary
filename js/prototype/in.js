const key = {
    name: 'summer',
    id: 1
}
console.log('id' in key) //true
console.log('age' in key) //false


// in 과 Reflect.has는 같은 기능을 한다.
console.log(Reflect.has(key,'name')) //true
console.log(Reflect.has(key,'job')) //false

