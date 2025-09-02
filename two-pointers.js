// #1 two sum 
var twoSum = function(nums, target) {
     let map = {};
     for(let i =0; i<nums.length; i++) {
        map[nums[i]] = i;
     }

     for(let i=0; i<nums.length; i++) {
        let pair = target - nums[i];
        if(map[pair] && map[pair] !== i) {
            return [i, map[pair]];
        }
     }
};

// 167 Two sum-2 Input array is asorted
var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length-1;
    while(i < j) {
       let sum = numbers[j] + numbers[i];
       if(sum > target) j--;
       else if(sum < target) i++;
       else return [i+1, j+1];
    }
};


// #392 isSubsequence  
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    while(j < t.length) {
        if(s[i] === t[j]) i++;
        j++;
    }
    return i === s.length;
};