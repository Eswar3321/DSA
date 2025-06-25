// binary search
function search(nums, target) {
  let left = 0;
  let right = nums.length-1;
  while(left <= right) {
    let middle = Math.floor((left+right)/2);
    if(nums[middle] == target) return middle;
    if(nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}
console.log(search([1,2,3,4,5,6,7], 6)); //5

// bubbleSort
function bubbleSort(nums){
  let n = nums.length-1;
  for(let i=0; i < n; i++) {
    let isSwapped = false;
    for(let j = 0; j < n-i; j++) {
       if(nums[j] > nums[j+1]) {
          let temp = nums[j];
          nums[j] = nums[j+1];
          nums[j+1] = temp;
          isSwapped = true;
       }
    }
    if(!isSwapped) break;
  }
  return nums;
}
console.log(bubbleSort([2,3,1,4,2,6,1,8]));

// selection sort
function selectionSort(nums) {
  let n = nums.length;
  for(let i = 0; i < n-1; i++) {
    let min = i;
    for(let j = i+1; j < n; j++) {
      if(nums[j] < nums[min]) {
        min = j;
      }
      if(min !=  i) {
      let temp = nums[i];
      nums[i] = nums[min];
      nums[min] = temp;
      }
    }
  }
  return nums;
}
console.log(selectionSort([4,1,5,2])); // [1, 2, 4, 5];

// Insertion sort
function insertionSort(nums) {
  for(let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    let prev = i - 1;
    while(nums[prev] > curr && prev >= 0) {
      nums[prev + 1] = nums[prev];
      prev--;
    }
    nums[prev+1] = curr;
  }
  return nums;
}
console.log(insertionSort([2, 5, 1, 6, 7]));

// sort an Array #912
function mergeSort(nums) {
    if(nums.length <= 1) return nums;
    let middle = Math.floor(nums.length/2);
    let left = mergeSort(nums.slice(0, middle));
    let right = mergeSort(nums.slice(middle));
    return merge(left, right);
};

// helping function for merge sort
function merge(left, right) {
    let res = [], i = 0, j = 0;
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            res.push(left[i++]);
        } else {
            res.push(right[j++]);
        }
    }
    return [...res, ...left.slice(i), ...right.slice(j)];
}
