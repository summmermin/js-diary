// 먼저 집어넣은 데이터가 먼저 나옵니다 FIFO
class Queue {
    constructor() {
        this._arr = [];
    }

    enqueue(item) {
        this._arr.push(item);
    }

    dequeue() {
        return this._arr.shift();
    }
}

const queue = new Queue();
queue.enqueue(1)
queue.enqueue(100)
queue.dequeue(); //1
//큐는 순서대로 처리해야 하는 작업을 임시로 저장해두는 버퍼(buffer)