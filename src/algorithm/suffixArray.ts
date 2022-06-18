import { quickSort } from "./sorting";

let str = "Pepcoding"

function generateSuffixArray(x: string) {
    let n = x.length;
    let s = x;
    let suffix = []
    let suffixArray = []
    for (let i = 0; i < n; i++) {
        suffix.push({ index: i, suffix: s.substring(i).toLowerCase() })
    }
    suffix.sort((a, b) => {
        if (a.suffix > b.suffix) {
            return 1
        }if (b.suffix > a.suffix) {
            return -1
        }
        return 0
    })
    suffix.forEach((value)=>{
        suffixArray.push(value.index)
    })
    console.log(suffixArray)
    return suffixArray
}
generateSuffixArray(str)