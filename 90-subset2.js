// 先 sort
// 在 dfs 把 全部的結果得出
// 在用 obj 的方式排除重複的

var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  const dfs = (i, nums, slate) => {
    if (i === nums.length) {
      res.push(slate.slice());
      return;
    }
    dfs(i + 1, nums, slate);
    slate.push(nums[i]);
    dfs(i + 1, nums, slate);
    slate.pop();
  };
  dfs(0, nums, []);
  let obj = {};
  for (arr of res) {
    if (!obj[arr]) obj[arr] = arr;
  }
  return Object.values(obj);
};

// 先 sort
// 如果當前數跟上數相同，必須使用上一數的產生結果給當前數產生結果 e.g.
//0 []
//1 [1]
//2 [2] [1,2]
//2 [2,2] [1,2,2] <- 遇到相同，找上一個數結果運行即可。

var subsetsWithDup = function (nums) {
  nums.sort();
  let res = [];
  res.push([]);
  let tmpNum = null;
  let tmpArr = [];
  for (num of nums) {
    if (tmpNum === num) {
      let tmp = [];
      tmpArr.forEach((ele) => {
        tmp.push([...ele, num]);
        res.push([...ele, num]);
      });
      tmpArr = tmp;
    } else {
      let tmp = [];
      res.forEach((ele) => {
        tmp.push([...ele, num]);
        res.push([...ele, num]);
      });
      tmpArr = tmp;
    }
    tmpNum = num;
  }
  return res;
};

//
//===========================================================//
// recursive dfs
// 											[]
//1					[]											[1]
//2			[]			[2]						[1] 			[1,2]
//2		[]	[2]	 X	[2,2]		 [1]	[1,2]	 X	[1,2,2]
//  i-1層有包含重複的，i層左邊一率不要，只留右邊。

var subsetsWithDup = function (nums) {
  nums.sort();
  const res = [];
  function dfsHelper(i, current) {
    if (i === nums.length) {
      res.push(current);
      return;
    }
    if (!current.includes(nums[i])) {
      dfsHelper(i + 1, [...current]);
    }
    dfsHelper(i + 1, [...current, nums[i]]);
  }
  dfsHelper(0, []);
  return res;
};

//=======================================================
//combination
//假設 arr = [1,2,2,3] 就把 C(3,0) + C(3,1) + C(3,2) + C(3,3) 加再一起
//參考 78-subset combination
//重複問題，要在 pop 後面判斷 個是重復的話要 skip 掉。
// e.g. C(4,1)
//             []
//      [1] [2] [2](skip)  [3]

// e.g C(4,2)
//                                      []
//               [1]                    [2]                  [2]    [3]
//     [1,2] [1,2](skip) [1,3]      [2,2]  [2,3](skip)      [2,3]

var subsetsWithDup = function (nums) {
  nums.sort();
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
      while (nums[i + 1] === nums[i]) {
        i++;
      }
    }
  }
  for (let j = 0; j <= nums.length; j++) {
    dfs(j, 0, []);
  }
  return res;
};
