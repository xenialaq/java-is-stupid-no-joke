/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    const gg = g.sort((a, b) => a - b);
    const ss = s.sort((a, b) => a - b);
    let c = 0;
    let i = 0; let j = 0;
    while (i < gg.length) {
        for (; j < ss.length; j++) {
            if (ss[j] >= gg[i]) {
                c++;
                j++;
                break;
            }
        }
        if (j === ss.length) {
            break;
        }
        i++;
    }
    return c;
};
