/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prevNotRobbed = 0;
    let prevRobbed = 0;
    for (let i = 0; i < nums.length; i++) {
        [
            prevNotRobbed,
            prevRobbed
        ] = [
            // leave this house alone
            Math.max(prevRobbed, prevNotRobbed),
            // rob this house but prev must not been robbed
            prevNotRobbed + nums[i]
        ];
    }
    return Math.max(prevNotRobbed, prevRobbed);
};
