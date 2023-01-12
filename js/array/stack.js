// stack 데이터를 마지막에 밀어넣고, 마지막에 밀어넣은 데이터를 먼저 꺼내기
const Stack = (
    function () {
        function Stack(arr = []) {
            if (!Array.isArray(arr)) {
                throw new TypeError(`${arr}은 array가 아니다`)
            }
            this.array = arr;
        }

        Stack.prototype = {
            constructor: Stack,
            push(value) {
                return this.array.pop();
            },
            pop() {
                return this.array.pop();
            },
            entries() {
                return [this.array]
            }
        };
        return Stack;
    }()
);
const stack = new Stack([1, 2]);
console.log(stack.entries())

stack.pop();
console.log(stack.entries())
stack.push();
console.log(stack.entries())