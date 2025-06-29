// design linked list
function Node(val) {
    this.val = val;
    this.next = null;
}
var MyLinkedList = function() {
    this.head = null;
    this.size = 0;
};
MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    for (let i = 0; i < index; i++) curr = curr.next;
    return curr.val;
};
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new Node(val);
    if (!this.head) {
        this.head = newNode;
    } else {
        let curr = this.head;
        while (curr.next) curr = curr.next;
        curr.next = newNode;
    }
    this.size++;
};
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0 || index > this.size) return;

    if (index === 0) {
        this.addAtHead(val);
    } else if (index === this.size) {
        this.addAtTail(val);
    } else {
        const newNode = new Node(val);
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) curr = curr.next;
        newNode.next = curr.next;
        curr.next = newNode;
        this.size++;
    }
};
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size || this.head === null) return;
    if (index === 0) {
        this.head = this.head.next;
    } else {
        let curr = this.head;
        for (let i = 0; i < index - 1; i++) curr = curr.next;
        if (curr.next) {
            curr.next = curr.next.next;
        }
    }
    this.size--;
};

//middle of linked list 
function MiddleNode(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
// reverseList
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev= curr;
        curr = temp;
    }
    return prev;
};

// is Linked list -hash Table time&space O(n)
var hasCycle = function(head) {
    let seenNodes = new Set();
    let curr = head;
    while (curr !== null) {
        if (seenNodes.has(curr)) {
            return true;
        }
        seenNodes.add(curr);
        curr = curr.next;
    }
    return false;
};
// is Linked list time O(n) and space O(1)
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next;
        if(slow == fast) return true;
    }
    return fasle;
}

// is Palindrome List
var isPalindrome = function(head) {
    // find the middle
    let slow = fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }
    // reverse second half
    let prev = null;
    let curr = slow;
    while(curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    // compare both lists
    let firstList = head;
    let secondList = prev;
    while(secondList) {
        if(firstList.val != secondList.val) return false;
        firstList = firstList.next;
        secondList = secondList.next;
    }
    return true;
};
