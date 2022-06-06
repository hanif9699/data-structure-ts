class DoubleLinkedListNode {
    public data: number;
    public prev?: DoubleLinkedListNode;
    public next?: DoubleLinkedListNode;
    constructor(data) {
        this.data = data;
        this.prev = null
        this.next = null
    }
}
class DoubleLinkedList {
    public head?: DoubleLinkedListNode;
    public tail?: DoubleLinkedListNode;
    constructor() {
        this.head = null;
        this.tail = null;
    }
    insert(data: number) {
        let newNode = new DoubleLinkedListNode(data)
        if (!this.head && !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    insertAfter(data: number, prev: number) {
        let newNode = new DoubleLinkedListNode(data)
        if (!this.head) {
            return null
        }
        let trav: DoubleLinkedListNode = this.head;
        while (trav != null) {
            if (trav.data === prev) {
                let nextNode = trav.next
                if (!nextNode) {
                    this.tail = newNode;
                    newNode.prev = trav
                    trav.next = newNode
                
                } else {
                    newNode.next = nextNode
                    newNode.prev = trav
                    trav.next = newNode
                    nextNode.prev = newNode
                }
                break
            }
            trav = trav.next
        }
        return
    }
    insertBefore(data: number, next: number) {
        let newNode = new DoubleLinkedListNode(data)
        if (!this.head) {
            return null
        }
        let trav: DoubleLinkedListNode = this.head;
        while (trav != null) {
            if (trav.data === next) {
                let prevNode = trav.prev
                if (!prevNode) {
                    this.head = newNode
                    newNode.next = trav
                    trav.prev = newNode
                } else {
                    newNode.next = trav
                    newNode.prev = prevNode
                    trav.prev = newNode
                    prevNode.next = newNode
                }

            }
            trav = trav.next
        }
        return
    }
    remove(data: number) {
        if (!this.head) {
            return null
        }
        if (this.head.data === data) {
            let nextNode = this.head.next
            if (!nextNode) {
                this.head = null
                this.tail = null
            } else {
                nextNode.prev = null
                this.head = nextNode
            }
            return
        }
        let trav: DoubleLinkedListNode = this.head
        while (trav != null) {
            if (trav.data === data) {
                let nextNode = trav.next
                let prevNode = trav.prev
                if (!nextNode) {
                    prevNode.next = null;
                    this.tail = prevNode
                    return
                } else {
                    nextNode.prev = prevNode
                    prevNode.next = nextNode
                }
            }
            trav = trav.next
        }
    }
}
const list = new DoubleLinkedList()
list.insert(7)
list.insert(8)
list.insert(9)
list.insertAfter(10, 9)
list.insertBefore(5, 7)
list.remove(5)
list.remove(10)
console.log(list)