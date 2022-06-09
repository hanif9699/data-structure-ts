const arrToBeSearched = [2, 34, 34, 3, 23, 45, 32, 24, 39, 56, 64, 43, 32]

arrToBeSearched.sort()

console.log(arrToBeSearched)

function BinarySearch(arr: Array<number>, num: number) {
    let low = 0;
    let high = arr.length - 1;
    let index: number
    while (low <= high) {
        console.log('low:' + low)
        console.log('high:' + high)
        let mid = Math.floor(low + ((high - low) / 2))
        if (arr[mid] == num) {
            index = num
            break
        } else if (arr[mid] > num) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return index
}

console.log(BinarySearch(arrToBeSearched, 2))