class Queue {
    public front: number
    public rear: number
    public arr: Array<any>
    public Max: number
    public length: number
    constructor(max) {
        this.Max = max
        this.arr = Array(this.Max)
        this.front = -1
        this.rear = -1
        this.length = 0
    }
    public enqueue(data: any) {
        if (this.rear === this.Max) {
            console.log('Overflow ..')
            return
        } else {
            if (this.front < 0) {
                this.front++;
                this.rear++;
                this.arr[this.rear] = data
            } else {
                this.rear++;
                this.arr[this.rear] = data
            }
            this.length++
        }
    }
    public dequeue() {
        if (this.length <= 0) {
            console.log('No data')
            return
        } else {
            console.log(this.arr[this.front])
            this.front++;
            this.length--;
        }
    }
    public frontElement() {
        if (this.length <= 0) {
            console.log('No Data')
            return
        } else {
            return this.arr[this.front]
        }
    }
    public rearElement() {
        if (this.length <= 0) {
            console.log('No Data')
            return
        } else {
            return this.arr[this.rear]
        }
    }
    public printQueue() {
        for (let i = this.front; i < this.rear; i++) {
            console.log(this.arr[i])
        }
        return
    }
}

export default Queue