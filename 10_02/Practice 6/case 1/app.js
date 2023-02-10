arr = [1, 2, 2];

function fullset(theArray) {
  let subsets = [[]];
  for (let i = 0; i < theArray.length; i++) {
    const value = theArray[i];   // 1 
    const newSubsets = subsets.map((set) => [value, ...set]);
    subsets = subsets.concat(newSubsets);
  }
  return subsets;
}

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

let result = fullset(arr)
let final = removeDuplicates(result)

console.log(final)