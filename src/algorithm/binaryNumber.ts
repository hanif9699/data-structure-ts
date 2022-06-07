import Queue from "../array/queue";

function generateBinaryNumber(num: number) {
    const q = new Queue(100)
    q.enqueue("1")
    while (num > 0) {
        let s1 = q.frontElement()
        // console.log('s1'+s1)
        let s2 = s1
        q.dequeue()
        q.enqueue(s1 + "0")
        q.enqueue(s2 + "1")
        num--;
    }
    // q.printQueue()
}

generateBinaryNumber(5)