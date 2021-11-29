var combinationSum3 = function (k, n) {
  const res = [];
  const dfs = (curr, currSum, length, idx) => {
    if (length > k || currSum > n) return;
    if (length === k && currSum === n) {
      res.push(curr);
      return;
    }
    for (let i = idx; i < 10; i++) {
      dfs([...curr, i], currSum + i, length + 1, i + 1);
    }
  };
  dfs([], 0, 0, 1);
  return res;
};
