var permute = function (nums) {
  const visited = new Array(nums.length).fill(false);
  const res = [];
  const dfs = (curr) => {
    if (curr.length === nums.length) {
      res.push([...curr]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      curr.push(nums[i]);
      dfs(curr);
      visited[i] = false;
      curr.pop();
    }
  };
  dfs([]);
  return res;
};

//https://blog.csdn.net/weixin_43840202/article/details/113663169
//https://www.youtube.com/watch?v=CUzm-buvH_8&t=185s
