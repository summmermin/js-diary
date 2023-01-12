function dog(name) {
    this.name = name;
}

const dog1 = new dog('gabby');
dog.prototype.toString = function dogToString() {
    return `${this.name}`;
}
console.log(dog1.toString())