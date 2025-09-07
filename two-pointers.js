// // #1 two sum 
// var twoSum = function (nums, target) {
//     let map = {};
//     for (let i = 0; i < nums.length; i++) {
//         map[nums[i]] = i;
//     }

//     for (let i = 0; i < nums.length; i++) {
//         let pair = target - nums[i];
//         if (map[pair] && map[pair] !== i) {
//             return [i, map[pair]];
//         }
//     }
// };

// // 167 Two sum-2 Input array is asorted
// var twoSum = function (numbers, target) {
//     let i = 0;
//     let j = numbers.length - 1;
//     while (i < j) {
//         let sum = numbers[j] + numbers[i];
//         if (sum > target) j--;
//         else if (sum < target) i++;
//         else return [i + 1, j + 1];
//     }
// };


// // #392 isSubsequence  
// var isSubsequence = function (s, t) {
//     let i = 0;
//     let j = 0;
//     while (j < t.length) {
//         if (s[i] === t[j]) i++;
//         j++;
//     }
//     return i === s.length;
// };

// // 28. Find the Index of the First Occurrence in a String
// // Input: haystack = "sadbutsad", needle = "sad"
// // Output: 0
// // Explanation: "sad" occurs at index 0 and 6.
// // Time complexity O(n*m)
// var strStr = function (haystack, needle) {
//     for (let i = 0; i < haystack.length; i++) {
//         if (needle[0] === haystack[i]) {
//             for (let j = 0; j < needle.length; j++) {
//                 if (haystack[j + i] !== needle[j]) break;
//                 if (j === needle.length - 1) return i;
//             }
//         }
//     }
//     return -1;
// };

// var strStr = function (haystack, needle) {
//     let n = haystack.length;
//     let m = needle.length;
//     let lps = [0];
//     let i = 0;
//     let j = 1;
//     while (j < m) {
//         if (needle[i] === needle[j]) {
//             lps[j] = i + 1;
//             ++i;
//             ++j;
//         } else {
//             if (i == 0) {
//                 lps[j] = 0;
//                 ++j;
//             } else {
//                 i = lps[i - 1];
//             }
//         }
//     }
//     i = j = 0;
//     while (i < n) {
//         if (haystack[i] === needle[j]) {
//             ++i;
//             ++j;
//         } else {
//             if (j == 0) {
//                 ++i;
//             } else {
//                 j = lps[j - 1];
//             }
//         }
//         if (j === m) {
//             return i - m;
//         }
//     }
//     return -1;
// };

// // intersection of two linked list
// // Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
// // Output: No intersection
// // Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. 
// // Since the two lists do not intersect, intersectVal must be 0, 
// // while skipA and skipB can be arbitrary values.
// // Explanation: The two lists do not intersect, so return null.
// var getIntersectionNode = function (headA, headB) {
//     let pA = headA;
//     let pB = headB;

//     while (pA != pB) {
//         pA = pA == null ? headB : pA.next;
//         pB = pB == null ? headA : pB.next;
//     }
//     return pA;
// };

// // Input: height = [1,8,6,2,5,4,8,3,7]
// // Output: 49
// // Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
// // In this case, the max area of water (blue section) the container can contain is 49.
// // container woth most water
// var maxArea = function (arr) {
//     let i = 0;
//     let j = arr.length - 1;
//     let maxWater = 0;
//     while (i < j) {
//         let area = Math.min(arr[i], arr[j]) * (j - i);
//         maxWater = Math.max(maxWater, area);
//         if (arr[i] > arr[j]) {
//             --j;
//         } else {
//             ++i;
//         }
//     }
//     return maxWater;
// };

// // 15. 3Sum
// // Input: nums = [-1,0,1,2,-1,-4]
// // Output: [[-1,-1,2],[-1,0,1]]
// // Explanation: 
// // nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// // nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// // nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// // The distinct triplets are [-1,0,1] and [-1,-1,2].
// // Notice that the order of the output and the order 
// // of the triplets does not matter.
// var threeSum = function (nums) {
//     nums.sort((a, b) => a - b);
//     let ans = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (i === 0 || nums[i] !== nums[i - 1]) {
//             twoSum(nums, i, ans);
//         }
//     }
//     return ans;
// };
// var twoSum = function (arr, x, ans) {
//     let i = x + 1;
//     let j = arr.length - 1;
//     while (i < j) {
//         let sum = arr[i] + arr[j] + arr[x];
//         if (sum > 0) {
//             j--;
//         } else if (sum < 0) {
//             i++;
//         } else {
//             ans.push([arr[i], arr[j], arr[x]]);
//             i++;
//             j--;
//             // Skip duplicates for the second element
//             while (i < j && arr[i] === arr[i - 1]) {
//                 i++;
//             }
//         }
//     }
// };

// // #42 trapping rain water
// // Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// // Output: 6
// // Explanation: The above elevation map (black section) is represented 
// // by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 
// // 6 units of rain water (blue section) are being trapped.
// var trap = function(arr) {
//     let n = arr.length;
//     let maxL = [];
//     maxL[0] = arr[0];
//     for (let i = 1; i < n; i++) {
//         maxL[i] = Math.max(maxL[i - 1], arr[i]);
//     }
//     let maxR = [];
//     maxR[n - 1] = arr[n - 1];
//     for (let i = n - 2; i >= 0; i--) {
//         maxR[i] = Math.max(arr[i], maxR[i + 1]);
//     }
//     let ans = 0;
//     for (let i = 0; i < n; i++) {
//         let waterTrapped = Math.min(maxL[i], maxR[i]) - arr[i];
//         ans += Math.max(waterTrapped, 0);  // Avoid negative values
//     }
//     return ans;
// };

// // #3 longest substring without characters
// // Input: s = "abcabcbb"
// // Output: 3
// // Explanation: The answer is "abc", with the length of 3.
// var lengthOfLongestSubstring = function(s) {
//     let i = 0; // left pointer
//     let map = {}; // store last index of character
//     let maxWS = 0;

//     for (let j = 0; j < s.length; j++) {
//         if (map[s[j]] !== undefined && map[s[j]] >= i) {
//             i = map[s[j]] + 1; // move left pointer
//         }
//         map[s[j]] = j; // update last index
//         let currWS = j - i + 1; // window size
//         maxWS = Math.max(maxWS, currWS); 
//     }

//     return maxWS;
// };

// // 424. Longest Repeating Character Replacement
// // Input: s = "ABAB", k = 2
// // Output: 4
// // Explanation: Replace the two 'A's with two 'B's or vice versa.
// var characterReplacement = function(s, k) {
//     let i = 0, j = 0;
//     let map = Array(26).fill(0);
//     map[s.charCodeAt(0) - 65] = 1;
//     let maxWindow = 0;
//     while (j < s.length) {
//         if (isWindowValid(map, k)) {
//             maxWindow = Math.max(maxWindow, j - i + 1);
//             ++j;
//             ++map[s.charCodeAt(j) - 65];
//         } else {
//             --map[s.charCodeAt(i) - 65];
//             ++i;
//         }
//     }
//     return maxWindow;  
// };
// var isWindowValid = function(map, k) {
//     let totalCount = 0;
//     let maxCount = 0;
//     for (let i = 0; i < 26; i++) {
//         totalCount += map[i];
//         maxCount = Math.max(maxCount, map[i]);
//     }
//     return (totalCount - maxCount <= k);
// };

// 567. Permutation in String
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
let hashS = Array(26).fill(0);
    let hashW = Array(26).fill(0);
    let windowLength = s1.length;
    for (let i = 0; i < windowLength; i++) {
        hashS[s1.charCodeAt(i) - 97]++;
        hashW[s2.charCodeAt(i) - 97]++;
    }
    let i = 0;
    let j = windowLength - 1;

    while (j < s2.length) {
        if (isHashSame(hashS, hashW)) {
            return true;
        }
        hashW[s2.charCodeAt(i) - 97]--;
        i++;
        j++;
        if (j < s2.length) {
            hashW[s2.charCodeAt(j) - 97]++;
        }
    }
    return false;
};
var isHashSame = function(hashS, hashW) {
    for (let i = 0; i < 26; i++) {
        if (hashS[i] !== hashW[i]) {
            return false;
        }
    }
    return true;
};


// 239 sliding window maximum
// Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
// Output: [3,3,5,5,6,7]
var maxSlidingWindow = function(arr, k) {
  let res = [];
  let q = [];

  let i = j = 0;
  while (j < arr.length) {
    while (q.length && arr[j] > q[q.length - 1]) {
      q.pop();
    }
    q.push(arr[j]);

    if (j >= k - 1) {
      res.push(q[0]);
      if (arr[i] == q[0]) q.shift();
      ++i;
    }
    ++j;
  }
  return res;
};