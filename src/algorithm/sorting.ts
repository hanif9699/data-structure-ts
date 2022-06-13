const arrToBeSorted = [2, 34, 34, 3, 23, 45, 32, 24, 39, 56, 64, 43, 32]

function ascSelectionSort(arr: Array<number>) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min != i) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    console.log(arr)
}
function descSelectionSort(arr: Array<number>) {
    for (let i = 0; i < arr.length - 1; i++) {
        let max = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] > arr[max]) {
                max = j
            }
        }
        if (max != i) {
            let temp = arr[i]
            arr[i] = arr[max]
            arr[max] = temp
        }
    }
    console.log(arr)
}
function ascInsertionSort(arr: Array<number>) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = key
    }
    console.log(arr)
}
function descInsertionSort(arr: Array<number>) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]
        let j = i - 1;
        while (j >= 0 && arr[j] < key) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = key
    }
    console.log(arr)
}
ascInsertionSort([...arrToBeSorted])
descInsertionSort([...arrToBeSorted])
// console.log(arrToBeSorted)


//2 31 1 25 24 80

/*
l =0                              
r = 5
m = l+(h-l)/2 = 2
2 31 1
l= 0 
r=2
m = 1
2 31
l =0 
r=1
m=1

*/

function mergeSort(arr: Array<number>, low: number, high: number) {
    let mid = Math.floor(low + ((high - low) / 2))
    if (low < high) {
        mergeSort(arr, low, mid)
        mergeSort(arr, mid + 1, high)
        merge(arr, low, mid, high)
        return
    }
    // console.log('low'+low)
    // console.log('high'+high)
}
function merge(arr: Array<number>, low: number, mid: number, high: number) {
    let i = low;
    let j = mid + 1;
    let k = low
    let temp: Array<number> = []
    while (i <= mid && j <= high) {
        if (arr[i] >= arr[j]) {
            temp[k] = arr[j]
            k++
            j++
        } else {
            temp[k] = arr[i]
            i++
            k++
        }
    }
    while (i <= mid) {
        temp[k] = arr[i]
        k++
        i++
    }
    while (j <= high) {
        temp[k] = arr[j]
        j++
        k++
    }
    for (let start = low; start <= high; start++){
        arr[start] = temp[start]
    }
}
mergeSort(arrToBeSorted, 0, arrToBeSorted.length - 1)
console.log(arrToBeSorted)