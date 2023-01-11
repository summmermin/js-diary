function person(name) {
    this.name = name;
}

person.prototype.name = null;
person.prototype.introduce = function () {
    return '내 이름은' + this.name;
}

function job(name) {
    this.name = name;
}
job.prototype=new person();
const p1=new job('summer');
console.log(p1.introduce())