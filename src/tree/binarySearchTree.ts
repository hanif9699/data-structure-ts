class TreeNode {
    public data: number;
    public left?: TreeNode;
    public right?: TreeNode;

    constructor(data: number) {
        this.data = data
        this.right = null;
        this.left = null;
    }
}
class BinaryTree {
    public root?: TreeNode;
    constructor() {
        this.root = null
    }

    public insert(data) {
        if (this.root == null) {
            this.root = new TreeNode(data)
        } else {
            this.insertNode(data, this.root)
        }
    }

    private insertNode(data: number, node: TreeNode): TreeNode {
        // console.log(node, data)
        if (node.data > data) {
            if (node.left === null) {
                node.left = new TreeNode(data)
            } else {
                node.left = this.insertNode(data, node.left)
            }
        } else {
            if (node.right === null) {
                node.right = new TreeNode(data)
            } else {
                node.right = this.insertNode(data, node.right)
            }
        }
        return node
    }
    public remove(data) {
        this.root = this.removeNode(data, this.root)
    }
    private removeNode(data: number, node: TreeNode) {
        if (node.data > data) {
            node.left = this.removeNode(data, node.left)
        } else if (node.data < data) {
            node.right = this.removeNode(data, node.right)
        } else {
            if (node.left === null && node.right === null) {
                node.data = null
            } else if (node.left === null) {
                node = node.right
            } else if (node.right === null) {
                node = node.left
            } else {
                let minNode = this.findMinNode(node.right)
                node.data = minNode.data
                node.right = this.removeNode(minNode.data, node.right)
            }
        }
        return node
    }
    public findMaxNode(node: TreeNode) {
        if (node.right === null) {
            return node
        }
        return this.findMaxNode(node.right)
    }
    public findMinNode(node: TreeNode) {
        if (node.left === null) {
            return node
        }
        return this.findMinNode(node.left)
    }
    public preOrderTraversal(node: TreeNode) {
        if (node != null) {
            console.log(node.data)
            this.preOrderTraversal(node.left)
            this.preOrderTraversal(node.right)
        }
    }
    public postOrderTraversal(node: TreeNode) {
        if (node != null) {
            this.postOrderTraversal(node.left)
            this.postOrderTraversal(node.right)
            console.log(node.data)
        }
    }
    public inOrderTraversal(node: TreeNode) {
        if (node != null) {
            this.inOrderTraversal(node.left)
            console.log(node.data)
            this.inOrderTraversal(node.right)
        }
    }
    public getHeight(node: TreeNode, height: number) {
        if (!node.left && !node.right) {
            return height
        }
        if (!node.left) {
            return this.getHeight(node.right, height + 1)
        }
        if (!node.right) {
            return this.getHeight(node.left, height + 1)
        }
        return Math.max(this.getHeight(node.left, height + 1), this.getHeight(node.right, height + 1))
    }
    public getHeightWithNode(node: TreeNode) {
        if (!node.left && !node.right) {
            return 0
        }
        if (!node.left) {
            return this.getHeightWithNode(node.right) + 1
        }
        if (!node.right) {
            return this.getHeightWithNode(node.left) + 1
        }
        return Math.max(this.getHeightWithNode(node.left), this.getHeightWithNode(node.right)) + 1
    }
    public getRoot() {
        return this.root
    }
}

const BST = new BinaryTree()
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);

BST.insert(17);
// BST.insert(13);
// BST.insert(5);
// BST.insert(9);
// BST.insert(27);




// BST.remove(15)
console.log(BST)
const BSTRoot = BST.getRoot()
console.log(BST.getHeight(BSTRoot, 0))
console.log(BST.getHeightWithNode(BSTRoot))


/*
            15
        10      25
    7           22
                

*/



