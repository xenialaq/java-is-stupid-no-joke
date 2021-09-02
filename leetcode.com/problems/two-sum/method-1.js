const twoSum = (nums, target) => {
    const set = new Set();
    const ret = [];
    nums.forEach(t => {
      if (ret.length > 0) {
        return;
      }
      if (set.has(target - t)) {
        ret.push(target - t);
        ret.push(t);
        return;
      }
      set.add(t);
    });
    return ret;
};


console.log(twoSum([2,2], 4));
console.log(twoSum([1,2,3,4,5], 4));
console.log(twoSum([2,4,5], 4));
