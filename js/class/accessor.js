const summer={
    // 데이터의 프로퍼티
    name:'summer',
    surname:'kim',

    get getName() {
        return this.name+this.surname;
    },
    set setName(sum){
        [this.name,this.surname]=sum.split('')
    }
}
console.log(summer.name+summer.surname) //"summerkim"
console.log(summer) //{ name: "summer", surname: "kim", getName: "summerkim", setName: undefined }