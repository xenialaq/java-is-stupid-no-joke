/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  if (k === 1) {
    return nums
  }
  // k > 1
  const ret = []
  let N = nums.length
  // use i to index deq, use j to index nums
  // deq[i] is j, nums[j] is number
  let deq = []
  let maxJ = 0
  let maxV = nums[maxJ]
  for (let j = 0; j < k; j++) {
    if (nums[j] >= maxV) {
      maxV = nums[j]
      maxJ = j
    }
    deq.push(j)
  }
  // deq size always > 1

  ret.push(maxV)

  let nextJ = k
  while (nextJ < N) {
    // first, to delete
    if (deq.length === k) {
      // deq is full, we have to give up deq[0]
      if (maxJ === deq[0]) {
        // find 2nd largest j index, set as maxJ
        let maxJJ = deq[1]
        let maxVV = nums[maxJJ]
        for (let i = 1; i < deq.length; i++) {
          if (nums[deq[i]] >= maxVV) {
            maxVV = nums[deq[i]]
            maxJJ = deq[i]
          }
        }
        maxJ = maxJJ
      }
      // maxJ - deq[0] !== 0
      // delete everything until maxJ
      // has room for nextJ
      deq = deq.slice(maxJ - deq[0])
    }
    // next, to add
    deq.push(nextJ)
    if (nums[nextJ] >= nums[maxJ]) {
      maxJ = nextJ
    }

    ret.push(nums[maxJ])
    nextJ++
  }

  return ret
};
