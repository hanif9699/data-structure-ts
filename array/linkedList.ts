class LinkedNode {
    public data: number;
    public next?: LinkedNode;
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    public head?: LinkedNode;
    public tail?: LinkedNode;

    public insert(data: number) {
        let newNode = new LinkedNode(data)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    public insertAfter(data: number, prev: number) {
        let newNode = new LinkedNode(data)
        if (!this.head) {
            return null
        }
        let trav: LinkedNode = this.head;
        while (trav != null) {
            // console.log(trav.data, prev)
            if (trav.data === prev) {
                // console.log(this.tail == trav)
                if (this.tail === trav) {
                    this.tail = newNode
                }
                newNode.next = trav.next;
                trav.next = newNode;
                break;
            } else {
                trav = trav.next;
            }
        }
    }
    public insertBefore(data: number, next: number) {
        let newNode = new LinkedNode(data)
        if (!this.head) {
            return null
        }
        // console.log(this.head.data, next)
        if (this.head.data === next) {
            newNode.next = this.head;
            this.head = newNode
            return
        }
        let trav: LinkedNode = this.head;
        let prev: LinkedNode;
        while (trav != null) {
            if (trav.data === next) {
                newNode.next = trav;
                prev.next = newNode;
                break;
            } else {
                prev = trav;
                trav = trav.next;
            }
        }
    }
    public remove(data: number) {
        if (!this.head) {
            return null
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return
        }
        let trav: LinkedNode, prev: LinkedNode;
        prev = trav = this.head
        while (trav != null) {
            if (trav.data === data) {
                if (trav.next != null) {
                    prev.next = trav.next
                } else {
                    prev.next = null
                    this.tail = prev
                }
                return
            }
            prev = trav
            trav = trav.next
        }
    }
}

const list = new LinkedList()
list.insert(7)
list.insert(8)
list.insert(9)
list.insertAfter(10, 9)
list.insertBefore(5, 7)
list.remove(5)
list.remove(10)
console.log(list)