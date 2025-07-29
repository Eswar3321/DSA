// Implement stack using two queues
var MyStack = function() {
  this.q1 = [];
  this.q2 = [];
};

MyStack.prototype.push = function(x) {
  this.q1.push(x);
};

MyStack.prototype.pop = function() {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }
  let ans = this.q1.shift();
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
  return ans;
};

MyStack.prototype.top = function() {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    this.q2.push(this.q1.shift());
  }
  let front = this.q1[0];
  this.q2.push(this.q1.shift());
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
  return front;
};

MyStack.prototype.empty = function() {
  return this.q1.length === 0;
};


//Implement stack using one queue
var MyStack = function() {
    this.q = []; 
};

MyStack.prototype.push = function(x) {
    this.q.push(x);
};

MyStack.prototype.pop = function() {
    let n = this.q.length;
    for (let i = 0; i < n - 1; i++) {
        this.q.push(this.q.shift());
    }
    return this.q.shift();
};

MyStack.prototype.top = function() {
    let n = this.q.length;
    for (let i = 0; i < n - 1; i++) {
        this.q.push(this.q.shift());
    }
    let front = this.q.shift();
    this.q.push(front);
    return front;
};

MyStack.prototype.empty = function() {
    return this.q.length === 0;
};

// Implement Queue using stacks
var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};
MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};
MyQueue.prototype.pop = function() {
    if(this.s2.length === 0) {
        while(this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2.pop();
};
MyQueue.prototype.peek = function() {
        if(this.s2.length === 0) {
        while(this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2[this.s2.length-1];
    
};
MyQueue.prototype.empty = function() {
    return this.s1.length === 0 && this.s2.length === 0;
};

// Valid Parentheses
var isValid = function(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let ch of s) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else {
            if (stack.pop() !== map[ch]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

// Min stack
var MinStack = function() {
    this.s = [];
};
MinStack.prototype.push = function(val) {
    if(this.s.length === 0){
        this.s.push([val, val]);
    } else {
        let minVal = Math.min(val, this.s[this.s.length - 1][1]);
        this.s.push([val, minVal]);
    }
};
MinStack.prototype.pop = function() {
    this.s.pop();
};
MinStack.prototype.top = function() {
    return this.s[this.s.length-1][0];
};
MinStack.prototype.getMin = function() {
    return this.s[this.s.length-1][1];
};


// #1021 Remove Outermost Parentheses
var removeOuterParentheses = function(s) {
    let stack = [];
    let ans = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (stack.length > 0) ans += s[i];
            stack.push(s[i]);
        } else {
            stack.pop();
            if (stack.length > 0) ans += s[i];
        }
    }
    return ans;
};

// Remove Outermost Parentheses without Stack
var removeOuterParentheses = function(s) {
    let level = -1;
    let ans = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            ++level;
            ans += (level ? s[i] : "");
        } else {
            ans += (level ? s[i] : "");
            --level;
        }
    }
    return ans;
};

var evalRPN = function(arr) {
    let stack = [];
    const map = {
        "+": (a,b) => (b+a),
        "*": (a,b) => (b*a),
        "-": (a,b) => (b-a),
        "/": (a,b) => Math.trunc(b/a),
    };
        for(let i=0; i < arr.length; i++){
            if(map[arr[i]]) {
                let a = stack.pop();
                let b = stack.pop();
                let ans = map[arr[i]](+a,+b);
                stack.push(ans);
            } else {
                stack.push(arr[i]) 
            }
        }
    return Number(stack.pop());
};

// #150 Evaluate Reverse Polish Notation
var evalRPN = function(arr) {
    let stack = [];
    const map = {
        "+": (a,b) => (b+a),
        "*": (a,b) => (b*a),
        "-": (a,b) => (b-a),
        "/": (a,b) => Math.trunc(b/a),
    };
        for(let i=0; i < arr.length; i++){
            if(map[arr[i]]) {
                let a = stack.pop();
                let b = stack.pop();
                let ans = map[arr[i]](+a,+b);
                stack.push(ans);
            } else {
                stack.push(arr[i]) 
            }
        }
    return Number(stack.pop());
};

// next greater element
var nextGreaterElement = function(nums1, arr) {
    let ngeMap = {};
    let stack = [];
    let n = arr.length;-
    stack.push(arr[n-1]);
    ngeMap[arr[n-1]] = -1;
    for(let i=n-2; i>=0; i--){
        let top = stack[stack.length-1];
        if(arr[i] < top){
            ngeMap[arr[i]] = top;
        }
        else {
            while(stack.length) {
                if(stack[stack.length-1] < arr[i]){
                    stack.pop();
                } else {
                    ngeMap[arr[i]] = stack[stack.length-1];
                    break;
                }
            }
            if(stack.length === 0){
                ngeMap[arr[i]] = -1;
            }
        }
        stack.push(arr[i]);
    }
    let ans = [];
    for(let i=0; i < nums1.length; i++){
        ans.push(ngeMap[nums1[i]]);
    }
    return ans;
};

// daily temprature
var dailyTemperatures = function(arr) {
    let stack = [];
    let n = arr.length;
    let ans = Array(n).fill(0);

    stack.push(n-1);
    for(let i = n-2; i >= 0; i--){
        while(stack.length) {
            let top = stack[stack.length-1];
            if(arr[i] >= arr[top]) {
                stack.pop();
            } else {
                ans[i] = top - i;
                break;
            }
        }
        stack.push(i);
    }
    return ans;
};