var subsets = function (arr) {
  let result = [];
  let backtrack = (path, start) => {
    result.push([...path]);
    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  };
  backtrack([], 0);
  return result;
};

var combine = function (n, k) {
  let result = [];
  let backtrack = (path, start) => {
    if (path.length == k) {
      result.push([...path]);
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(path, i + 1);
      path.pop();
    }
  };
  backtrack([], 1);
  return result;
};

// #40 permutations
var permute = function (arr) {
  let result = [];
  let n = arr.length;
  let backtrack = (path) => {
    if (path.length === n) {
      result.push([...path]);
    }
    for (let i = 0; i < n; i++) {
      if (!path.includes(arr[i])) {
        path.push(arr[i]);
        backtrack(path);
        path.pop();
      }
    }
  };
  backtrack([]);
  return result;
};

var subsetsWithDup = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b);
  function backtrack(path, start) {
    result.push([...path]);
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      path.push(nums[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  }
  backtrack([], 0);
  return result;
};

var combinationSum = function (arr, target) {
  let result = [];
  let backtrack = (remainingSum, path, start) => {
    if (remainingSum === 0) result.push([...path]);
    if (remainingSum <= 0) return;
    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      backtrack(remainingSum - arr[i], path, i);
      path.pop();
    }
  };
  backtrack(target, [], 0);
  return result;
};

// 40. Combination Sum II
var combinationSum2 = function (arr, target) {
  let result = [];
  arr.sort((a, b) => a - b);
  let backtrack = (remainingSum, path, start) => {
    if (remainingSum === 0) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      if (i > start && arr[i] === arr[i - 1]) continue;
      if (arr[i] > remainingSum) break;
      path.push(arr[i]);
      backtrack(remainingSum - arr[i], path, i + 1);
      path.pop();
    }
  };
  backtrack(target, [], 0);
  return result;
};

// 216. Combination Sum III
var combinationSum3 = function (k, n) {
  let result = [];
  let backtrack = (remainingSum, path, start) => {
    if (path.length == k) {
      if (remainingSum === 0) {
        result.push([...path]);
      }
      return;
    }
    for (let i = start; i <= 9; i++) {
      path.push(i);
      backtrack(remainingSum - i, path, i + 1);
      path.pop();
    }
  };
  backtrack(n, [], 1);
  return result;
};
