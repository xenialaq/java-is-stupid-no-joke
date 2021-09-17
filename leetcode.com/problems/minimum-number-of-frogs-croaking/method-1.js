/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function(croakOfFrogs) {
    const counter = [0, 0, 0, 0, 0];
    let fail = false;
    let freeFrogs = 0;
    let numFrogs = 0;
    for (let ch of croakOfFrogs) {
        if (ch === 'c') {
            if (freeFrogs === 0) {
                // we need more frogs!
                numFrogs += 1;
                freeFrogs += 1;
            }
            freeFrogs -= 1;
            counter[0] += 1;
        } else if (ch === 'r' && counter[0] > 0) {
            counter[0] -= 1;
            counter[1] += 1;
        } else if (ch === 'o' && counter[1] > 0) {
            counter[1] -= 1;
            counter[2] += 1;
        } else if (ch === 'a' && counter[2] > 0) {
            counter[2] -= 1;
            counter[3] += 1;
        } else if (ch === 'k' && counter[3] > 0) {
            counter[3] -= 1;
            counter[4] += 1;
            freeFrogs += 1;
        } else {
            // fail only detects rogue char, not prematurely ended prefixes
            fail = true;
            break;
        }
    }
    if (fail || counter[0]+counter[1]+counter[2]+counter[3] > 0) {
        return -1;
    }
    // counter[4] is not always === numFrogs
    // because a frog may croak 1+ times
    return numFrogs;
};
