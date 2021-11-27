var combinationSum = function (candidates, target) {
  const res = [];
  const reducer = (pre, curr) => pre + curr;

  const dfsHelper = (idx, length, temp) => {
    temp.push(candidates[idx]);
    const sum = temp.reduce(reducer);
    if (sum === target) {
      res.push(temp);
    } else if (sum > target) {
      return;
    } else if (sum < target) {
      for (let i = idx; i < length; i++) {
        dfsHelper(i, length, [...temp]);
      }
    }
  };
  for (let i = 0; i < candidates.length; i++) {
    dfsHelper(i, candidates.length, []);
  }
  return res;
};

// 做一個 dfsHelper，試圖把所有解找出來
// Q: [2,3,6,7]
// 從 2 開始 -> 2222, 2223, 2226, 2227, 2233, 2236, 2237, 223, 226, 227, 233, 236, 237, 26, 27
