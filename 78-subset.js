// 找到所有組合
// const nums = [1, 2, 3];
// const res = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];

// iterative
var subsets = function (nums) {
  let start = [];
  let res = [];
  res.push(start);
  for (let i = 0; i < nums.length; i++) {
    let tmp = res.map((res) => {
      return [...res, nums[i]];
    });
    res = [...res, ...tmp];
  }
  return res;
};

//===========================================================//
// recursive dfs
// 											[]
//					[]											[1]
//			[]			[2]						[1] 			[1,2]
//		[]	[3]	[2]	[2,3]		[1]		[1,3]	[1,2]	[1,2,3]

var subsets = function (nums) {
  let res = [];

  function dfs(i, current) {
    if (i === nums.length) {
      res.push(current);
      return;
    } else {
      dfs(i + 1, current);
      dfs(i + 1, [...current, nums[i]]);
    }
  }
  dfs(0, []);
  return res;
};
