class GeneralNode {
    public data: number;
    public children: Array<GeneralNode>;
    public parent?: GeneralNode;
    constructor(data) {
        this.data = data;
        this.children = []
    }
    public insert(node: GeneralNode) {
        this.children.push(node)
        node.parent = this
    }
}



const root = new GeneralNode(1)
const firstRootChild = new GeneralNode(2)
const secondRootChild = new GeneralNode(3)
const thirdRootChild = new GeneralNode(4)

const firstLeafNode1 = new GeneralNode(5)
const firstLeafNode2 = new GeneralNode(-5)
const firstLeafNode3 = new GeneralNode(15)

const secondLeafNode1 = new GeneralNode(5)
const secondLeafNode2 = new GeneralNode(10)
const secondLeafNode3 = new GeneralNode(15)

firstRootChild.insert(firstLeafNode1)
firstRootChild.insert(firstLeafNode2)
firstRootChild.insert(firstLeafNode3)

secondRootChild.insert(secondLeafNode1)
secondRootChild.insert(secondLeafNode2)
secondRootChild.insert(secondLeafNode3)

root.insert(firstRootChild)
root.insert(secondRootChild)
root.insert(thirdRootChild)

console.log(root)

function sumOfLeafNode(node: GeneralNode) {
    if (node.children.length <= 0) {
        return node.data
    }
    let total = 0;
    for (let i = 0; i < node.children.length; i++) {
        total = total + sumOfLeafNode(node.children[i])
    }
    return total
}
console.log(sumOfLeafNode(root))
