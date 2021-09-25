/**
 * @param {number[]} boxes
 * @param {number[]} warehouse
 * @return {number}
 */
const findLastLeq = (arr, l, r, val) => {
    const len = r - l;
    if (len === 0) {
        return null;
    }
    if (len === 1) {
        return arr[l] <= val ? l : null;
    }
    if (len === 2) {
        if (arr[l] > val) {
            return null;
        } else if (arr[l + 1] <= val) {
            return l + 1;
        } else {
            return l;
        }
    }
    const m = Math.floor(l / 2) + Math.floor(r / 2); // even -> midright, odd -> mid
    if (arr[m] > val) {
        return findLastLeq(arr, l, m, val);
    } else if (arr[m] < val) {
        return findLastLeq(arr, m, r, val);
    } else {
        return m;
    }
}

var maxBoxesInWarehouse = function (boxes, warehouse) {
    // greedy
    // largest you can fit, right to left
    const boxesSorted = boxes.sort((a, b) => (a - b));
    let wHMin = warehouse[0];
    const warehouseLim = warehouse.map((h) => {
        wHMin = Math.min(wHMin, h);
        return wHMin;
    });
    const result = [];
    for (let j = warehouseLim.length - 1; j >= 0; j--) {
        wHMin = warehouseLim[j];
        // console.log('warehouse', wHMin);
        if (!boxesSorted.length) {
            break;
        }
        const biggestBox = boxesSorted[boxesSorted.length - 1];
        if (biggestBox <= wHMin) {
            result.push(boxesSorted.pop());
            continue;
        }
        // absolutely biggest box cannot fit
        const lastLeq = findLastLeq(boxesSorted, 0, boxesSorted.length, wHMin);
        // console.log('findLastLeq', boxesSorted, wHMin, 'res:', lastLeq)
        if (lastLeq !== null) {
            // biggest box that fits is found
            result.push(boxesSorted[lastLeq]);
            // console.log('box maxF', boxesSorted[lastLeq]);
            boxesSorted.splice(lastLeq, 1);
        }
    }
    // console.log(result);
    return result.length;
};
