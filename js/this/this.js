function Func() {
    if (window === this) {
        console.log('window===this')
    } else {
        console.log('아니다')
    }
}

Func();

const o = {
    oFunc : function () {
        if (o === this) {
            console.log('o===this')
        } else {
            console.log('아니다')
        }
    }
}
o.oFunc();