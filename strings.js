// find length of last word approach-1
// let s = "   Hi hello   world   ";
// should return 5; 
var lengthOfLastWord = function(s) {
  let n = s.length-1;
  while(n>0) {
    if(s[n] == ' ') n--;
    else { break; }
  }
  let count = 0;
  while(n>0) {
    if(s[n] == ' ') break;
    count++;
    n--;
  }
  return count;
}

// find length of last word approach-2
var lengthOfLastWord = function(s) {
  let n = s.length-1;
  let count = 0;
  while(n>0) {
    if(s[n] !== ' ') {
      count++;
    } else if(count > 0) {
      break;
    }
    n--;
  }
  return count;
}

// find words containing letter and return word index
// let words = ['hello', 'world', 'eswar', 'here'], x = 'e';
// result = [0, 2, 3];
var findWordsContaining = function(words, x) {
    let res = [];
    for(let i =0; i< words.length; i++) {
        let wordL = words[i].length;
        for(let j=0; j<words[i].length; j++) {
            if(words[i][j] == x) {
                res.push(i);
                break;
            }
        }
    }
    return res;
};

var numJewelsInStones = function(jewels, stones) {
    const set = new Set();
    let count = 0;
    for(let i=0; i<jewels.length; i++) {
      set.add(jewels[i]);
    }
    for(let i=0; i<=stones.length; i++) {
    if(set.has(stones[i])) count++;
    }
    return count;
};

var maxFreqSum = function(s) {
    const freq = {};
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let i=0; i<s.length; i++) {
        freq[s[i]] ? freq[s[i]]++ :  freq[s[i]] = 1;
    }
    let maxVowels = 0;
    let maxConsonant = 0;
    for(let key in freq) {
      if(vowels.includes(key)) {
        if(freq[key] > maxVowels) maxVowels = freq[key];
      } else if(freq[key] > maxConsonant){
        maxConsonant = freq[key];
      }
    }
    return maxVowels + maxConsonant;
};
console.log(maxFreqSum('successes'));

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL";
var balancedStringSplit = function(s) {
    let count = 0;
    let subStr = 0;
  for(let i=0; i<s.length; i++) {
    if(s[i] == 'R') count++;
    if(s[i] == 'L') count--;
    if(count === 0) subStr++;
  }  
  return subStr;
};

// reverse a string-2 #541
var reverseStr = function (s, k) {
      s = s.split("")
      for (let x = 0; x < s.length; x = x + (2 * k)) {
          let n = k;
          let mid = Math.floor(n / 2)
          for (let i = 0; i < mid; i++) {
              let temp = s[x + i]
              s[x + i] = s[x + n - 1 - i]
              s[x + n - 1 - i] = temp
          }
      }
      return s.join("")
  };  


// isPalindrome approach-1
var isPalindrome = function(s) {
  s = s.toLowerCase();
  let filterString = "";
  let rev = "";
  for(let i = 0; i < s.length; i++) {
    if(s[i].match(/[a-z0-9]/i)) {
      filterString = filterString + s[i];
      rev = s[i] + rev;
    }
  }
  return filterString === rev;
}

// isPalindrome Approach-2
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;
    while (i < j) {
        if (!s[i].match(/[a-z0-9]/i)) {
            ++i;
        }
        else if (!s[j].match(/[a-z0-9]/i)) {
            --j;
        }
        else if (s[i] === s[j]) {
            ++i;
            --j;
        }
        else {
            return false;
        }
    }
    return true;
  };

// Largest Odd Number in String #1903
  var largestOddNumber = function(num) {
    let n = num.length-1;
    while(n>=0) {
        if(Number(num[n]) % 2 ==1) {
            return num.substring(0, n+1);
        }
        n--;
    }
    return "";
};

// Longest Common Prefix #14
var longestCommonPrefix = function(strs) {
      let x = 0;
      while (x < strs[0].length) {
          let ch = strs[0][x];
          for (let i = 1; i < strs.length; i++) {
              if (ch != strs[i][x] || x == strs[i].length) {
                  return strs[0].substring(0, x);
              }
          }
          ++x;
      }
      return strs[0];
  };
  