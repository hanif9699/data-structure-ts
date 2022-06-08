class Deque {
    public front: number;
    public rear: number;
    public max: number;
    public arr: Array<any>
    constructor(max) {
        this.max = max;
        this.front = -1;
        this.rear = -1;
        this.arr = Array(max)
    }
    public insertFront(data: any) {
        if (this.isFull()) {
            console.log('Overflow ...')
            return
        } else {
            if (this.isEmpty()) {
                this.front = 0
                this.rear = 0
                this.arr[this.front] = data
            } else if (this.front == 0) {
                this.front = this.max - 1;
                this.arr[this.front] = data
            } else {
                this.front--;
                this.arr[this.front] = data
            }
            return
        }
    }
    public insertRear(data: any) {
        if (this.isFull()) {
            console.log('Overflow ...')
            return
        } else {
            if (this.isEmpty()) {
                // console.log('Empty')
                this.front = 0
                this.rear = 0
                this.arr[this.rear] = data
            } else if (this.rear == this.max - 1) {
                this.rear = 0;
                this.arr[this.rear] = data
            } else {
                this.rear = this.rear + 1
                this.arr[this.rear] = data
            }
        }
    }
    public deleteFront() {
        if (this.isEmpty()) {
            console.log('No data')
            return
        } else {
            if (this.front == this.rear) {
                this.front = -1
                this.rear = -1
            } else if (this.front == this.max - 1) {
                this.front = 0;
            } else {
                this.front++;
            }
        }
    }
    public deleteRear() {
        if (this.isEmpty()) {
            console.log('No data')
            return
        } else {
            if (this.front == this.rear) {
                this.front = -1
                this.rear = -1
            }
            else if (this.rear == 0) {
                this.rear = this.max - 1
            } else {
                this.rear--;
            }
        }
    }
    public isFull() {
        if ((this.front == 0 && this.rear == this.max - 1) || this.front == this.rear + 1) {
            return true
        } else {
            return false
        }
    }
    public isEmpty() {
        if (this.front == -1 && this.rear == -1) {
            return true
        } else {
            return false
        }
    }
    public getFirst() {
        if (this.isEmpty()) {
            console.log('No data')
            return
        } else {
            return this.arr[this.front]
        }
    }
    public getLast() {
        if (this.isEmpty()) {
            console.log('No data')
            return
        } else {
            return this.arr[this.rear]
        }
    }
}

let deque = new Deque(10)
deque.insertFront(1)
deque.insertRear(2)
deque.insertFront(3)
deque.insertFront(4)
deque.deleteFront()
deque.deleteFront()
deque.deleteFront()
deque.deleteFront()
deque.insertRear(2)
deque.insertRear(2)
deque.insertRear(2)
deque.insertRear(2)
deque.insertRear(2)
deque.insertRear(2)
deque.insertRear(2)
deque.insertRear(2)
deque.insertRear(2)
deque.insertRear(2)
deque.insertRear(2)
deque.deleteFront()
deque.insertRear(1)
deque.deleteRear()


console.log(deque)