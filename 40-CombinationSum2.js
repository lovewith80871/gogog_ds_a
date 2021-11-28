var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b);
  const visited = new Array(candidates.length).fill(false);
  const res = [];
  const dfs = (curr, currSum, startIdx, visited) => {
    if (currSum === target) {
      res.push(curr);
      return;
    }
    if (currSum > target) return;

    for (let i = startIdx; i < candidates.length; i++) {
      if (i > startIdx && candidates[i] === candidates[i - 1]) continue;
      dfs([...curr, candidates[i]], currSum + candidates[i], i + 1, visited);
    }
  };
  dfs([], 0, 0, visited, []);
  return res;
};
// Q: [10,1,2,7,6,1,5], target = 8，從陣列中組合各個數 相加為 8 的組合有哪些？
// A: [[1,1,6],[1,2,5],[1,7],[2,6]]

// ps visited 這東西沒用到
