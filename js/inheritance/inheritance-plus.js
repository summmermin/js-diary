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
job.prototype.coding=function (){
    return '코딩~!';
}

function designer(name) {
    this.name = name;
}
designer.prototype=new person();
designer.prototype.design=function (){
    return '코딩~!';
}

const p1=new job('summer');
console.log(p1.introduce())
console.log(p1.coding())

const p2=new designer('hong');
console.log(p2.introduce())
console.log(p2.design())