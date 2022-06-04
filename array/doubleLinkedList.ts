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
}