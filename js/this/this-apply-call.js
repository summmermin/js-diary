function sum(x, y) {
    return x + y;
}

// 함수 리터럴
sum(1, 2)
// 3
const sum2 = new Function('x', 'y', 'return x+y');
// 객체 리터럴
sum2(1, 2);
// 3

//[] 배열 리터럴

const o = {}
const p = {}

function func() {
    switch (this) {
        case o:
            console.log('o')
            break;
        case p:
            console.log('p')
            break;
        case window:
            console.log('window')

    }
}
func(); 
//this === window
func.apply(o);
//this = o
func.apply(p);
//this = p