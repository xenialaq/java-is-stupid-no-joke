/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
var maxBoxesInWarehouse = function(boxes, warehouse) {
    // greedy
    // largest you can fit, right to left
    const boxesSorted = boxes.sort((a, b) => (a-b));
    let wHMin = warehouse[0];
    const warehouseLim = warehouse.map((h) => {
        wHMin = Math.min(wHMin, h);
        return wHMin;
    });
    const result = [];
    for (let j = warehouseLim.length - 1; j >= 0; j--) {
        wHMin = warehouseLim[j];
        // console.log('warehouse', wHMin);
        let foundMax = false;
        for (let i = 0; i < boxesSorted.length; i++) {
            if (boxesSorted[i] > wHMin) {
                if (i-1 >= 0) {
                    foundMax = true;
                    result.push(boxesSorted[i-1]);
                    // console.log('box maxF', boxesSorted[i-1]);
                    boxesSorted.splice(i-1, 1);
                }
                break;
            }
        }
        // all boxes < wHMin || all boxes > wHMin
        if (!foundMax && boxesSorted.length > 0) {
            if (boxesSorted[boxesSorted.length-1] <= wHMin) {
                // console.log('box', boxesSorted[boxesSorted.length-1]);
                result.push(boxesSorted.pop());
            }
        }
    }
    // console.log(result);
    return result.length;
};
