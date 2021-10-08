/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // ___
    //    |
    //    |___
    //        |
    //        |___
    //            |
    //            |
    
    //                   NMO            NMT
    // NMO'=NMO+NMT   NMT'=NMO 
    // ____|______________|______________|
    
    //                        ___
    //                           |
    //                           |___
    //                               |
    //                               |___
    //                                   |
    //                                   |

    if (n < 2) {
        return n;
    }
    let nMinusTwo = 1;
    let nMinusOne = 2;
    for (let i = 2; i < n; i++) {
        [nMinusOne, nMinusTwo] = [nMinusOne + nMinusTwo, nMinusOne];
    }
    return nMinusOne;
};
