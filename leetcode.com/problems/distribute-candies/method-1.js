/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const uniqTs = new Set();
    candyType.forEach(t => uniqTs.add(t));
    return Math.min(uniqTs.size, candyType.length / 2);
};
