Object.prototype.contain = function (needle) {
    for (const name in this) {
        if (this[name] === needle) {
            return true;
        }
    }
    return false;
}

const o = {'name': 'summer', 'city': 'seoul'}
console.log(o.contain('apple')) //false
const p = ['summer', 'kim', 'hong', 'min']
console.log(p.contain('kim')) //true


for (const nickname in a) {
    if (a.hasOwnProperty(nickname)) {
        console.log(nickname);
    }
}

