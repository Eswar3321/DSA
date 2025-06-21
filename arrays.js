// write a program to print all even numbers 
function printEvenNumbers(arr) {
  for(let i=0; i<arr.length; i++) {
    if(arr[i]%2 ===0) console.log(arr[i]);
  }
}
printEvenNumbers([1,2,3,4,5,6,7,8]);

// count negative numbers in a array
function countNegativeNum(arr) {
  let count = 0;
  for(let i=0; i<arr.length; i++) {
    if(arr[i]<0) count++;
  }
  return count;
}
console.log(countNegativeNum([1, -2, 3, -4, -5, 6, 7]));

// write a function to return small and largest number in the array
function findSmallandLargeNum(arr) {
  let small = Infinity;
  let large = -Infinity;
  for(let i=0; i<arr.length; i++) {
    if(arr[i] < small) small = arr[i];
    if(arr[i] > large) large = arr[i];
  }
  return [small, large];
}
console.log(findSmallandLargeNum([7,3,4,8,5,2,4,5,3]));

// write a function to find second largest number in the array
function findSecondLargeNum(arr) {
  let large = -Infinity;
  let sLarge = -Infinity;
  for(let i=0; i<arr.length; i++){
    if(arr[i]>large) {
      sLarge = large;
      large = arr[i];
    } else if(arr[i] > sLarge && arr[i] !== large) {
      sLarge= arr[i];
    }
  }
  return sLarge;
}

console.log(findSecondLargeNum([7,3,4,8,5,2,4,5,3]));

// Remove duplicates from sorted array return k count of unique values #26 leetcode
var removeDuplicates = function(nums) {
    let x = 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] > nums[x]) {
            x++;
            nums[x] = nums[i];
        }
    }
    return x+1;
};
console.log(removeDuplicates([1, 2, 3, 2, 4, 3])); // 4

// Remove element from an array #27
function removeElement(arr, val) {
  let x = 0;
  for(let i=0; i<arr.length; i++) {
    if(arr[i] !== val) {
      arr[x] = arr[i]
      x++;
    }
  }
  return x;
}
console.log(removeElement([1, 2, 3, 4, 5, 6, 3], 3)); // 5;

// Reverse a string #344
function reverseString(s) {
  let len = s.length;
  let halfLen = Math.floor(len/2);
  for(let i=0; i<halfLen; i++) {
    let temp = s[i];
    s[i] = s[len-i-1];
    s[len-i-1] = temp;
  }
   return s;
}
console.log(reverseString(['a', 'b', 'c', 'd'])); // ['d', 'c', 'b', 'a'];

// best time to buy and sell stocks #121
function bestTimetoBuySell(prices) {
  let min = prices[0];
  let maxProfit = 0;
  for(let i=1; i<prices.length; i++) {
    if(maxProfit<prices[i]-min) maxProfit = prices[i]-min;
    if(prices[i]<min) min = prices[i];
  }
  return maxProfit;
}
console.log(bestTimetoBuySell([7,1,5,3,6,4]));

// merge sorted array #88
 var maxProfit = function(prices) {
      let min = prices[0];
      let maxProfit = 0;
      for (let i = 1; i < prices.length; i++) {
          if (prices[i] - min > maxProfit) {
              maxProfit = prices[i] - min;
          }
          if (prices[i] < min) {
              min = prices[i];
          }
      }
      return maxProfit;
  };

// Move zeroes #283
var moveZeroes = function(nums) {
      let x = 0;
      for (let i = 0; i < nums.length; i++) {
          if (nums[i] !== 0) {
              nums[x] = nums[i];
              x++;
          }
      }
      for (let i = x; i < nums.length; i++) {
          nums[i] = 0;
      }
  };

// return the maximum number of consecutive 1’s #485
 var findMaxConsecutiveOnes = function(nums) {
    let currentCount = 0;
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 1) {
        currentCount++;
      } else {
        maxCount = Math.max(currentCount, maxCount);
        currentCount = 0;
      }
    }
    return Math.max(maxCount, currentCount);
  };

// return missing number #268
 var missingNumber = function(nums) {
      let n = nums.length;
      let total_sum = (n * (n + 1)) / 2;
      let sum_of_array = 0;
  
      for (let num of nums) {
          sum_of_array += num;
      }
      return total_sum - sum_of_array;
  };

  // return single number
   var missingNumber = function(nums) {
      let n = nums.length;
      let total_sum = (n * (n + 1)) / 2;
      let sum_of_array = 0;
      for (let num of nums) {
          sum_of_array += num;
      }
      return total_sum - sum_of_array;
  };
  