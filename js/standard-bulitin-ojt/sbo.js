const arr = new Array('a', 'b', 'c', 'd', 'e')

function getRandom(arr) {
    const index = Math.floor(arr.length * Math.random());
    return arr[index];
}

console.log(getRandom(arr));

Array.prototype.randomProp=function (){
    const index = Math.floor(this.length * Math.random());
    return this[index];
}
console.log(arr.randomProp());