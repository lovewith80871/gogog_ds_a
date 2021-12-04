var letterCombinations = function(digits) {
  const map = {
      '2': ['a','b','c'],
      '3': ['d','e','f'],
      '4': ['g','h','i'],
      '5': ['j','k','l'],
      '6': ['m','n','o'],
      '7': ['p','q','r','s'],
      '8': ['t','u','v'],
      '9': ['w','x','y','z']
  }
  const res = []
  if (!digits.length) return []
  const dfs = (curr, index) => {
      const key = digits[index]
      if (curr.length === digits.length) {
          res.push(curr.reduce((last,now)=> {return last+now},''))
          return
      }
      const temp = ''
      for (let i = 0; i< map[key].length; i++) {
          curr.push(map[key][i])
          dfs([...curr], index+1 )
          curr.pop()
      }   
  }
  dfs([], 0)
  return res
};