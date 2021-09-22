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

//=======================================================
//combination
//假設 arr = [0,1,2] 就把 C(3,0) + C(3,1) + C(3,2) + C(3,3) 加再一起
//參考 https://www.youtube.com/watch?v=CUzm-buvH_8&t=528s

var subsets = function (nums) {
  let res = [];
  function dfs(n, s, curr) {
    if (curr.length === n) {
      res.push([...curr]);
      return;
    }
    for (let i = s; i < nums.length; i++) {
      curr.push(nums[i]);
      dfs(n, i + 1, curr);
      curr.pop();
    }
  }
  for (let j = 0; j <= nums.length; j++) {
    dfs(j, 0, []);
  }
  return res;
};
