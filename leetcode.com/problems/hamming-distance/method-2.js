/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let xor = x ^ y;
    let diff = 0;
    // collect 1 bits from xor
    while (xor !== 0) {
        diff += xor & 1 // 0 if last bit 0, 1 if last bit 1
        xor >>>= 1;
    }
    return diff;
};
