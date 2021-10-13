/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    // r = 0
    // b = 1
    // g = 2
    const min = [0, 0, 0]
    for (const [c0, c1, c2] of costs) {
        [
            min[0],
            min[1],
            min[2],
        ] = [
            Math.min(min[1], min[2]) + c0,
            Math.min(min[0], min[2]) + c1,
            Math.min(min[0], min[1]) + c2,
        ]
    }
    return Math.min(min[0], min[1], min[2])
};
