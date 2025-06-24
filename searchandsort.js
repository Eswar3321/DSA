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
