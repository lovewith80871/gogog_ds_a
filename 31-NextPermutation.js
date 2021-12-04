var nextPermutation = function(nums) {
  const length = nums.length
  const reverse = (idx) => {
      let end = length - 1
      let start = idx
      while(end > start) {
          const temp = nums[start]
          nums[start] = nums[end]
          nums[end] = temp
          start++
          end--
      }
  }
  let i = length - 2
  if (nums[i] < nums[i+1]) {
      const temp = nums[i]
      nums[i] = nums[i+1]
      nums[i+1] = temp
      return
  }
  while (i>=0 && nums[i] >= nums[i+1]) {
      i--    
  }
  if (i<0) {
      reverse(0)
      return 
  }
  const temp = nums[i]
  let j = i+1
  let smallestBiggerThanTemp = j
  for(let k=j;k<length; k++ ) {
      if (nums[k] > temp && nums[k] < nums[smallestBiggerThanTemp]) {
          smallestBiggerThanTemp = k
      }
  }
  nums[i] = nums[smallestBiggerThanTemp]
  nums[smallestBiggerThanTemp] = temp
  i++
  while(i<length) {
      let small = i
      for (let q=i; q<length; q++) {
          if (nums[q] < nums[small]) {
              small = q
          }
      }
      const temp = nums[small]
      nums[small] = nums[i]
      nums[i] = temp
      i++
  }
  
};