/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
var maxBoxesInWarehouse = function (boxes, warehouse) {
    // greedy
    // warehouse limit is monotonic decreasing
    // smallest box you can fit, right to left
    let wHMin = warehouse[0];
    const warehouseLim = warehouse.map((h) => {
        wHMin = Math.min(wHMin, h);
        return wHMin;
    });
    const boxesSorted = boxes.sort((a, b) => (a - b));
    let result = 0;
    let smallIdx = 0;
    let smallestBox;
    for (let j = warehouseLim.length - 1; j >= 0; j--) {
        if (smallIdx >= boxesSorted.length) {
            break;
        }
        smallestBox = boxesSorted[smallIdx];
        wHMin = warehouseLim[j];
        if (smallestBox > wHMin) {
            continue;
        }
        result++;
        smallIdx++;
    }
    return result;
};
