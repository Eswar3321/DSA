let arr = [10, 4, 5, 1, 3];
function heapSort(arr) {
  let n = arr.length;
  // create a MaxHeap
  for (let i = n - 1; i >= 0; i--) {
    heapifyDown(arr, i, n);
  }
  // sort the array
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, 0, i);
  }
  return arr;
}
function heapifyDown(arr, i, n) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyDown(arr, largest, n);
  }
}
const sortedArray = heapSort(arr);
console.log(sortedArray);

class PriorityQueue {
  constructor() {
    this.queue = [];
  }
  // enqueue: Push the Value
  enqueue(value, priority) {
    this.queue.push({ value, priority });
    this.queue.sort((a, b) => b.priority - a.priority); //Highest Priority first
  }
  // dequeue: Remove the Value
  dequeue() {
    return this.queue.shift(); // Remove the first item (highest priority)
  }
  peek() {
    return this.queue[0];
  }
  isEmpty() {
    return this.queue.length === 0;
  }
}
// Demo
const pq = new PriorityQueue();
pq.enqueue("Fever", 1);
pq.enqueue("Accident", 5);
pq.enqueue("Headache", 3);
console.log(pq.dequeue()); // Accident (priority 5)
console.log(pq.dequeue()); // Headache (priority 3)

// 347. Top K Frequent Elements
var topKFrequent = function (arr, k) {
  // create a map of freq 0(n)
  let map = {};
  for (let i = 0; i < arr.length; ++i) {
    if (!map[arr[i]]) map[arr[i]] = 0;
    ++map[arr[i]];
  }
  // add elements to MinPQ and restrict size tok O(n log
  let pq = new MinPriorityQueue((x) => x.freq);
  for (key in map) {
    pq.push({ val: key, freq: map[key] }); // log k
    if (pq.size() > k) {
      pq.pop(); // removing smallest element // log k
    }
  }
  // retrun remaining k element in PQ
  return pq.toArray().map((x) => Number(x.val));
};
