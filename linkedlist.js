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

// Intersection of two linked list
var interSection = function(headA, headB) {
    // pull all nodes of headA
    let store = new Set();
    while(headA) {
        store.add(headA);
        headA = headA.next;
    }
    // compare any of headB element is exist in headA
    while(headB) {
        if(store.has(headB)) return true;
        headB = headB.next;
    }
    return false;
}

// Remove elements from linked list
// fn to create empty node(sentinel)
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : val);
}
var removeElements = function(head, val) {
    // sentinel is empty node to keep watch next one
    let sentinel = new ListNode();
    sentinel.next = head;
    let prev = sentinel;
    while(prev && prev.next) {
        if(prev.next.val === val) prev.next = prev.next.next; // skipping 
        else {prev = prev.next};
    }
    return sentinel.next;
}

// remove Nth node from end of list // two-pass O(n) & O(n)
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let length = 0;
    while(head) { //O(n)
        head = head.next;
        length++;
    }
    let prevPos = length-n;
    let prev = sentinel;
    for(let i = 0; i < prevPos; i++) { //O(n)
        prev = prev.next;
    }
    prev.next = prev.next.next;
    return sentinel.next;
};

// remove Nth node from end of list // one-pass O(n) & two pointer
var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode(0, head);
    let first = sentinel;
    for (let i = 0; i < n; i++) {
        first = first.next;
    }
    let second = sentinel;
    while (first.next) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return sentinel.next;
};

// Remove duplicates from sorted list
var deleteDuplicates = function(head) {
    let curr = head;
    while(curr && curr.next) {
        if(curr.val == curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next
        }
    }
    return head;
};

// Odd even linked list
var oddEvenList = function(head) {
    if (!head || !head.next) return head;
    let odd = head;
    let even = head.next;
    let evenHead = even;

    while (even && even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
};

var addTwoNumbers = function(l1, l2) {
    let res = new ListNode();
    let resHead = res;
    let carry = 0
    while(l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        
        let digit = sum%10;
        carry = Math.floor(sum/10);
        let newNode = new ListNode(digit);
        res.next = newNode;
        res = res.next;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return resHead.next;
};

var mergeTwoLists = function(list1, list2) {
    let res = new ListNode();
    let resHead = res;
    if(!list1) return list2;
    if(!list2) return list1;

    while(list1 && list2) {
        if(list1.val <= list2.val) {
            res.next = list1;
            list1 = list1.next;
        } else {
            res.next = list2;
            list2 = list2.next;
        }
        res = res.next;
    }
    if(!list1) {
        res.next = list2;
    } 
    if(!list2) {
        res.next = list1;
    }
    return resHead.next;
};

var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    k = k % length;
    if (k === 0) return head;

    let stepsToNewHead = length - k;
    let prev = null;
    let curr = head;
    while (stepsToNewHead--) {
        prev = curr;
        curr = curr.next;
    }
    prev.next = null;
    tail.next = head;
    return curr;
};

// swap nodes iterative approach
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    let prev  = new ListNode();
    let newHead = prev;
    let curr = head;
    let n = curr.next;
    while(curr && curr.next) {
        prev.next = n;
        curr.next = curr.next.next;
        n.next = curr;
        prev = curr;
        curr = curr.next;
        n = curr && curr.next;
    }
    return newHead.next;
};

// swap nodes recursive approach
var swapPairs = function(head) {
   if(!head || !head.next) return head;
   head.next = swapList(head.next.next);
   head.next.next = head;
   return head.next;
};
