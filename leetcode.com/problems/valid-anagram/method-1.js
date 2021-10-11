/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const sMap = new Map();
    let i = 0;
    let cp;
    while (s.codePointAt(i) !== undefined) {
        cp = s.codePointAt(i++)
        sMap.set(cp, sMap.has(cp) ? (sMap.get(cp) + 1) : 1);
    }
    const tMap = new Map();
    i = 0;
    cp = undefined;
    while (t.codePointAt(i) !== undefined) {
        cp = t.codePointAt(i++)
        tMap.set(cp, tMap.has(cp) ? (tMap.get(cp) + 1) : 1);
    }
    if (sMap.size !== tMap.size) {
        return false;
    }
    for (const scp of sMap.keys()) {
        if (sMap.get(scp) !== tMap.get(scp)) {
            return false;
        }
    }
    return true;
};
