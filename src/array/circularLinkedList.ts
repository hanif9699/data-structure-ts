class CircularLinkedListNode {
    public data: number;
    public next: CircularLinkedListNode;
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class CircularLinkedList {
    public last: CircularLinkedListNode;
    constructor() {
        this.last = null;
    }
    public insertAtFirst(data: number) {
        let newNode = new CircularLinkedListNode(data)
        if (!this.last) {
            this.last = newNode
            newNode.next = this.last
        } else {
            let firstNode = this.last.next
            newNode.next = firstNode;
            this.last.next = newNode
        }
    }
    public insertAtLast(data: number) {
        let newNode = new CircularLinkedListNode(data)
        if (!this.last) {
            this.last = newNode
            newNode.next = this.last
        } else {
            newNode.next = this.last.next;
            this.last.next = newNode;
            this.last = newNode;
        }
    }
    public insertBetween(data: number, item: number) {
        let newNode = new CircularLinkedListNode(data)
        if (this.last.data == item) {
            newNode.next = this.last.next
            this.last.next = newNode
            this.last = newNode
        }
        let trav = this.last.next
        while (trav != this.last) {
            if (trav.data == item) {
                newNode.next = trav.next
                trav.next = newNode
                break
            }
            trav = trav.next
        }
    }
    public deleteItem(item: number) {
        let trav = this.last.next;
        let prev = this.last
        do {
            if (trav.data == item) {
                prev.next = trav.next
                break
            }
            prev = trav
            trav = trav.next
        } while (trav != this.last.next)
    }
}