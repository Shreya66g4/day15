function longestIncreasingSubsequenceLength(nums) {
    const n = nums.length;
    if (n === 0) return 0;
  
    // Initialize an array to store the lengths of the increasing subsequences ending at each index
    const dp = new Array(n).fill(1);
  
    // Iterate through the elements and update the dp array
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          dp[i] = Math.max(dp[i], dp[j] + 1);
        }
      }
    }
  
    const maxLength = Math.max(...dp);
  
    return maxLength;
  }
  const inputArray = [10, 22, 9, 33, 21, 50, 41, 60, 80];
  console.log(longestIncreasingSubsequenceLength(inputArray));
  