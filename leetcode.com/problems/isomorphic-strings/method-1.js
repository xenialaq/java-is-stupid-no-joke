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
        const chS = s[i];
        const chT = t[i];
        if (isoMapST[chS] === undefined && isoMapTS[chT] === undefined) {
            isoMapST[chS] = chT;
            isoMapTS[chT] = chS;
        } else if (isoMapST[chS] !== chT || isoMapTS[chT] !== chS) {
            return false;
        }
    }
    return true;
};
