var wordBreak = function (s, wordDict) {
  const map = {};
  const dp = (s) => {
    if (map.hasOwnProperty(s)) {
      return map[s];
    } else if (s === '') {
      return true;
    }
    for (let i = 0; i < s.length; i++) {
      if (wordDict.includes(s.slice(i)) && dp(s.slice(0, i))) {
        map[s] = true;
        return true;
      }
    }
    map[s] = false;
    return false;
  };
  return dp(s);
};
//https://www.youtube.com/watch?v=ptlwluzeC1I&t=372s

var wordBreak = function (s, wordDict) {
  const dict = new Set(wordDict);
  const visited = new Set();
  const q = [0];

  while (q.length) {
    const start = q.shift();
    if (!visited.has(start)) {
      for (let end = start + 1; end <= s.length; end++) {
        if (dict.has(s.slice(start, end))) {
          if (end === s.length) return true;
          q.push(end);
        }
      }
      visited.add(start);
    }
  }
  return false;
};
// bfs https://leetcode.com/problems/word-break/discuss/397927/Clean-JavaScript-solution-(BFS-Dynamic-Programming)
