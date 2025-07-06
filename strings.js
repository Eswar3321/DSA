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
