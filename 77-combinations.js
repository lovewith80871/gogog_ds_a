var combine = function (n, k) {
  let res = [];
  const dfs = (len, s, slate) => {
    if (slate.length === len) {
      res.push([...slate]);
      return;
    }
    for (let i = s; i <= n; i++) {
      slate.push(i);
      dfs(len, i + 1, slate);
      slate.pop();
    }
  };
  dfs(k, 1, []);
  return res;
};
// C(n,k) combination 可以參照 78-subsets
// e.g. => C(4,2)
//                              []
//             [1]              [2]           [3]  [4]
//       [1,2] [1,3] [1,4]  [2,3] [2,4]     [3,4]
