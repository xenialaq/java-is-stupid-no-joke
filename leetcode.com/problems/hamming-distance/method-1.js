/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let diff = 0;
    while (x !== 0 || y !== 0) {
        if (x%2 !== y%2) {
            diff++;
        }
        x -= x%2; x /= 2;
        y -= y%2; y /= 2;
    }
    return diff;
};
