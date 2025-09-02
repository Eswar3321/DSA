//  #69 Sqrt(x)
var mySqrt = function (x) {
    if (x < 2) return x;
    let l = 2;
    let r = Math.floor(x / 2);
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (x === m * m) {
            return m;
        } else if (x < m * m) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return r;
};

// #374 Guess Higer or Lower
var guessNumber = function (n) {
    let l = 1;
    let r = n;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        let res = guess(m);
        if (res === 0) {
            return m;
        } else if (res < 0) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
};

// 33. Search in Rotated Sorted Array 
var search = function (arr, target) {
    let l = 0;
    let r = arr.length - 1;
    while (l <= r) {
        let m = Math.floor(l + (r - l) / 2);
        if (target === arr[m]) {
            return m;
        }

        if (arr[l] <= arr[m]) {
            if (target >= arr[l] && target < arr[m]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        } else {
            if (target > arr[m] && target <= arr[r]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
    }
    return -1;
};
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));

// #278 first bad version 
var solution = function (isBadVersion) {
    return function (n) {
        let l = 1;
        let r = n;
        while (l < r) {
            let m = l + Math.floor((r - l) / 2);
            if (!isBadVersion(m)) {
                l = m + 1;
            } else {
                r = m;
            }
        }
        return r;
    };
};

// #162 find peak element
var findPeakElement = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (nums[m] < nums[m + 1]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return l;
};

// #153 find minimum in rotated sorted array
var findMin = function (a) {
    let l = 0;
    let r = a.length - 1;

    while (l <= r) {
        if (a[l] <= a[r]) {
            return a[l];
        }

        let m = l + Math.floor((r - l) / 2);
        if (a[m] < a[m - 1]) {
            return a[m];
        }

        if (a[l] > a[m]) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
};

// #34 Find last and first position of a element in sorted array
var searchRange = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let ans = [-1, -1];
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (nums[m] < target) l = m + 1;
        else r = m;
    }
    if (nums[l] === target) ans[0] = l;
    l = 0;
    r = nums.length - 1;
    while (l < r) {
        let m = l + Math.ceil((r - l) / 2);
        if (nums[m] > target) r = m - 1;
        else l = m;
    }
    if (nums[l] === target) ans[1] = l;
    return ans;
};

// #852 peak index in a mountain array
var peakIndexInMountainArray = function (arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m + 1] > arr[m]) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    return l;
};


var singleNonDuplicate = function (nums) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (nums[m] !== nums[m + 1] && nums[m] !== nums[m - 1]) return nums[m];
        if ((r - m) % 2 === 0) r = m;
        else l = m;
    }
};
console.log(singleNonDuplicate([1, 1, 2]));

// # 540 Single Element in a Sorted Array
var singleNonDuplicate = function (arr) {
    let l = 0;
    let r = arr.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] === arr[m - 1]) {
            let leftCount = m-1-l;
            if (leftCount % 2 === 1) {
                r = m - 2;
            } else {
                l = m + 1;
            }
        } else if (arr[m] === arr[m + 1]) {
            let leftCount = m - l;
            if (leftCount % 2 === 1) {
                r = m - 1;
            } else {
                l = m + 2;
            }
        } else {
            return arr[m];
        }
    }
    return arr[l];
};

// #658 find closest k elements
var findClosestElements = function(arr, k, x) {
    let l = 0;
    let r = arr.length - k;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if ((arr[m + k] - x) < (x - arr[m])) {
            l = m + 1;
        } else {
            r = m;
        }
    }
    let ans = [];
    for(let i = l; i < l + k; i++) {
        ans.push(arr[i]);
    }
    return ans;
};

