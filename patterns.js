// print n*n square pattern Time&Space Complexity O(n^2), O(n)
let n = 5;
for(let i=0; i<n; i++) {
  let row = "";
  for(let j =0; j<n; j++) {
    row += "* "
  }
  console.log(row);
}

// print right angle tiangle Time&Space Complexity O(n^2), O(n)
for(let i=0; i<n; i++) {
  let row = "";
  for(let j=0; j<i+1; j++) {
    row += "* ";
  }
  console.log(row);
}

// print right angle number triangle 
for(let i=0; i<n; i++) {
  let row = "";
  for(let j=0; j<i+1; j++) {
    row += j+1 + " ";
  }
  console.log(row);
}

// print right angle repeated number triangle 
for(let i=0; i<n; i++) {
  let row = "";
  for(let j=0; j<i+1; j++) {
    row += i+1 + " ";
  }
  console.log(row);
}

// print reverse right angle triangle of increasing numbers
for(let i=0; i<n; i++) {
  let row = "";
  for(let j=0; j<n-i; j++) {
    row += j+1 + " ";
  }
  console.log(row);
}

// print right aligned right angle triangle
for(let i=0; i<n; i++) {
  let row = "";
  for(let j=0; j<n-(i+1); j++) {
    row += "  "
  }
  for(let k=0; k<i+1; k++) {
    row += "* "
  }
  console.log(row);
}

// print a binary right angled triangle
for(let i=0; i<n; i++) {
  let temp = 1;
  let row = "";
  for(let j=0; j<i+1; j++) {
    row += temp + " ";
    temp = temp === 1 ? 0 : 1;
  }
  console.log(row);
}

// print binary right angle triangle with alernate 1's and 0's
let temp = 1;
for(let i=0; i<n; i++) {
  let row = "";
  for(let j=0; j<i+1; j++) {
    row += temp + " ";
    temp = temp === 1 ? 0 : 1;
  }
  console.log(row);
}

