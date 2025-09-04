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

// 28. Find the Index of the First Occurrence in a String
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// Time complexity O(n*m)
var strStr = function(haystack, needle) {
    for(let i=0; i<haystack.length; i++) {
        if(needle[0] === haystack[i]) {
            for(let j=0; j<needle.length; j++) {
                if(haystack[j+i] !== needle[j]) break;
                if(j === needle.length-1) return i;
            }
        }
    }
    return -1;
};

var strStr = function(haystack, needle) {
    let n = haystack.length;
    let m = needle.length;
    let lps = [0];
    let i = 0;
    let j = 1;
    while(j < m){
        if(needle[i] === needle[j]) {
            lps[j] = i+1;
            ++i;
            ++j;
        } else {
            if(i == 0) {
                lps[j] = 0;
                ++j;
            } else{
                i = lps[i-1];
            }
        }
    }
    i = j = 0;
    while(i < n) {
        if(haystack[i] === needle[j]) {
            ++i;
            ++j;
        } else{
            if(j==0) {
                ++i;
            } else {
                j = lps[j-1];
            }
        }
        if(j === m){
            return i - m;
        }
    }
    return -1;
};

// intersection of two linked list
// Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// Output: No intersection
// Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. 
// Since the two lists do not intersect, intersectVal must be 0, 
// while skipA and skipB can be arbitrary values.
// Explanation: The two lists do not intersect, so return null.
var getIntersectionNode = function(headA, headB) {
    let pA = headA;
    let pB = headB;

    while(pA != pB) {
        pA = pA == null ? headB : pA.next;
        pB = pB == null ? headA : pB.next;
    }
    return pA;
};

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
// In this case, the max area of water (blue section) the container can contain is 49.
// container woth most water
var maxArea = function(arr) {
    let i = 0;
    let j = arr.length - 1;
    let maxWater = 0;
    while(i < j){
        let area = Math.min(arr[i], arr[j]) * (j-i);
        maxWater = Math.max(maxWater, area);
        if(arr[i] > arr[j]) {
            --j;
        } else {
            ++i;
        }
    }
    return maxWater;
};