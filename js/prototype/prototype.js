function Grandpa() {
}

Grandpa.prototype.GrandpaProp = true;

function pa() {
}

pa.prototype = new Grandpa();

function babe(){}
babe.prototype=new pa();

const o=new babe(); //new가 붙으면 단순한 함수가 아니라 생성자가 된다
console.log(o.GrandpaProp); //true
