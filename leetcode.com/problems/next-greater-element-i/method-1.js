/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  const stack = [];
  const map = {};
  nums1.forEach(n => {
    map[n] = -1;
  })
  nums2.forEach(n => {
    if (stack.length === 0) {
      if (map[n] !== undefined) {
        stack.push(n);
      }
    } else {
      let toCompare = stack[stack.length - 1];
      while (toCompare < n) {
        map[toCompare] = n;
        stack.pop();
        toCompare = stack[stack.length - 1];
      }
      if (map[n] !== undefined) {
        stack.push(n);
      }
    }
  });
  return nums1.map(n => map[n]);
};
