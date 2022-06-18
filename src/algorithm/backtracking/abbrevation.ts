function genrateAbbrreviation(str: string, sol: string, count: number, pos: number) {
    if (pos == str.length) {
        if (count > 0) {
            console.log(sol + count)
        } else {
            console.log(sol)
        }
        return
    }
    if (count > 0) {
        genrateAbbrreviation(str, sol + count + str.charAt(pos), 0, pos + 1)
    } else {
        genrateAbbrreviation(str, sol + str.charAt(pos), 0, pos + 1)
    }
    genrateAbbrreviation(str, sol, count + 1, pos + 1)
}
genrateAbbrreviation('pep', '', 0, 0)

export {};