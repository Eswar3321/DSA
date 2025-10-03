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
