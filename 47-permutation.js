var permuteUnique = function (nums) {
  const visited = new Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);
  const temp = [];
  const res = [];
  const dfs = (curr, length) => {
    if (curr.length === length) {
      res.push([...curr]);
      return;
    }
    for (let i = 0; i < length; i++) {
      if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]))
        continue;
      visited[i] = true;
      curr.push(nums[i]);
      dfs(curr, length);
      visited[i] = false;
      curr.pop();
    }
  };
  dfs([], nums.length);
  return res;
};
