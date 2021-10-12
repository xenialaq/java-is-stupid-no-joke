/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const isoMapST = {};
    const isoMapTS = {};
    for (let i = 0; i < s.length; i++) {
        // opt 1 char code instead of substring
        const chS = s.charCodeAt(i);
        const chT = t.charCodeAt(i);
        // opt 2 store i (the first matched index for both strings) 
        // instead of s.charCodeAt(i) (the first matched char in opposite string)
        // and to compare less
        if (isoMapST[chS] === undefined && isoMapTS[chT] === undefined) {
            isoMapST[chS] = i;
            isoMapTS[chT] = i;
        } else if (isoMapST[chS] !== isoMapTS[chT]) {
            return false;
        }
    }
    return true;
};
