//나중에 집어넣은 데이터가 먼저 나옵니다 LIFO
class Stack {
    constructor() {
        this._arr = []
    }

    push(item) {
        this._arr.push(item)
    }

    pop() {
        return this._arr.pop()
        // pop() 메서드는 배열에서 마지막 요소를 제거하고 그 요소를 반환
    }

    peek() {
        return this._arr[this._arr.length - 1]
    }
}
const stack=new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop() //3
//이전의 작업 내용을 저장해 둘 필요가 있을 때