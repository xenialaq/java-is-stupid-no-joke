/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n <= 0) {
        return false; // don't forget
    }
    while (n % 5 === 0) {
        n /= 5;
    }
    while (n % 3 === 0) {
        n /= 3;
    }
    while (n % 2 === 0) {
        n /= 2;
    }
    return n === 1;
};
