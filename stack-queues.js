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
