const arr = [1, 2, 3]
const res = [];
for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] * 2);
}
//2, 4, 6
const res1 = arr.map((value) => {
    return value * 2;
})
console.log(res1)
//2, 4, 6

const res2 = arr.map((value) => value * 2);
console.log(res2)
//2, 4, 6
//이렇게 짧게 줄일수도 있음

const res2 = arr.map((value, index) => index);
console.log(res2)
const items = [{id: 1, name: 'summer'}, {id: 2, name: 'min'}]
const result = items.map((item) => {
    return {
        name: item.name
    }
})
console.log(result)
//[{name: 1},{name:2}]