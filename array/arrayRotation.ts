class ArrayRotation {
    public temp: Array<number>
    public preProcess(arr: Array<number>) {
        let n = arr.length;
        this.temp = Array<number>(2 * n)
        for (let i = 0; i < n; i++) {
            this.temp[i] = this.temp[i + n] = arr[i];
        }
    }
    public rotateNtime(k: number, n: number) {
        let start = k % n;
        let end = start + n;
        let rotatedArray = [];
        for (let i = start; i < end; i++) {
            rotatedArray.push(this.temp[i])
        }
        return rotatedArray
    }
    public reverseArr(arr: Array<number>, start: number, end: number) {
        while (start < end) {
            let tempEl = arr[start]
            arr[start] = arr[end]
            arr[end] = tempEl
            start++;
            end--;
        }
        return arr;
    }
    public rotateThroughReversal(arr: Array<number>, k: number) {
        let n = arr.length;
        k = k % n; // To handle rotation greater than array size
        let tempArr = [...arr];
        this.reverseArr(tempArr, 0, k - 1)
        this.reverseArr(tempArr, k, n - 1)
        this.reverseArr(tempArr, 0, n - 1)
        return tempArr
    }
    public rotatethroughJugglingAlgo(arr: Array<number>, k: number) {
        let n = arr.length
        k = k % n
        let gcd = this.gcd(k, n)
        console.log(gcd)
        for (let i = 0; i < gcd; i++) {
            let j = i;
            let temp = arr[i]
            while (true) {
                let m = j + k
                if (m >= n) {
                    m = m - n
                }
                if (m == i) {
                    break
                }
                console.log('m:'+m)
                arr[j] = arr[m]
                j = m
            }
            arr[j] = temp
        }
        return arr

    }
    public gcd(a: number, b: number) {
        if (a == 0) {
            return b
        }
        return this.gcd(b % a, a)
    }
}

let Arr = [7, 1, 10, 8, 3, 5, 6]
let instance = new ArrayRotation()
instance.preProcess(Arr)

// console.log(instance.rotateNtime(1, Arr.length))
// console.log(instance.rotateNtime(10, Arr.length))
// console.log(instance.rotateThroughReversal(Arr, 1))
// console.log(instance.rotateThroughReversal([...Arr], 10))
// console.log(Arr)
console.log(instance.rotatethroughJugglingAlgo(Arr, 10))
