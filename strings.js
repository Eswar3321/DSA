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

