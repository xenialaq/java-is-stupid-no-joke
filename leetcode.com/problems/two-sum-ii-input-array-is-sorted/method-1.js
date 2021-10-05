/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;
    while (i < j) {
        const l = numbers[i];
        const r = numbers[j];
        const sum = l + r;
        if (sum === target) {
            return [i+1, j+1];
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }
    return null; // unreachable due to data setup 
};
