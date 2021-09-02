const twoSum = (nums, target) => {
    const map = new Map();
    const ret = [];
    nums.forEach((t, i) => {
      if (ret.length > 0) {
        return;
      }
      if (map.has(target - t)) {
        ret.push(i);
        ret.push(map.get(target-t));
        return;
      }
      map.set(t, i);
    });
    return ret;
};


console.log(twoSum([2,2], 4));
console.log(twoSum([1,2,3,4,5], 4));
console.log(twoSum([2,4,5], 4));
