//  #69 Sqrt(x)
var mySqrt = function(x) {
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
var guessNumber = function(n) {
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
var search = function(arr, target) {
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
console.log(search([4,5,6,7,0,1,2], 0));

// #278 first bad version 
var solution = function(isBadVersion) {
    return function(n) {
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

