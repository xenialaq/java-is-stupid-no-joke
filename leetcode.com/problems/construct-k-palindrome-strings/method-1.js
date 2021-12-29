/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    const map = {}
    for (const ch of s) {
        map[ch] = map[ch] || 0
        map[ch]++
    }
    let oddChCt = 0 // absolutely disjoint
    let pairCt = 0 // broken up or used as one
    Object.keys(map).forEach((ch) => {
        if (map[ch] % 2 === 1) {
            oddChCt++
        }
        pairCt += (map[ch] - map[ch] % 2) / 2
    })
    if (oddChCt > k) {
        return false
    }
    // pals without odd ch must be filled first to avoid empty str
    const mustFills = k - oddChCt
    // pairCt pairs may fill [1, 2 * pairCt] mustFills
    // special: mustFills == 0, then oddChCt > 0, fill oddChCt pals instead
    return mustFills <= 2 * pairCt
}
