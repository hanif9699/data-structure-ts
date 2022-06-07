class Stack {
    public top: number;
    public MAX: number = 1000;
    public arr: Array<number>
    constructor() {
        this.top = -1
        this.arr = Array(this.MAX)
    }
    push(data: number) {
        if (this.top > this.MAX - 1) {
            console.log("Overflow ...")
        } else {
            this.top++;
            this.arr[this.top] = data
        }
    }
    pop() {
        if (this.top < 0) {
            console.log("No data")
        } else {
            let data = this.arr[this.top];
            this.top--;
            return data
        }
    }
    peek() {
        if (this.top < 0) {
            console.log("No data")
        } else {
            let data = this.arr[this.top];
            return data
        }
    }
    print() {
        for (let i = 0; i <= this.top; i++) {
            console.log(`${i} :  ${this.arr[i]}`)
        }
        return "done"
    }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.pop())
console.log(stack.peek())

// console.log(stack)
console.log(stack.print())