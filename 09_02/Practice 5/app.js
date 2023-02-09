// 3 sum closest 
// let nums = [-1 , 2 , 1 , -4];
// nums.sort();
// let target = 1;

// let arr = []
// for(let i=0; i<nums.length; i++){
//     for(let j=i+1; j<nums.length; j++){
//         for(let k=j+1; k<nums.length; k++){
//            let value = nums[i] +  nums[j] + nums[k];
//            arr.push(value)
//         }
//     }
// }
// const final = []
// for(let i=0; i<arr.length; i++){
//     let value = target - arr[i];
//     final.push(value)
// }
// const v = Math.min(...final)
// const ans = arr[final.indexOf(v)];
// console.log(ans);

// two pointer method 
let nums = [-1, 2, 1, -4]
let target = 1
var threeSumClosest = function(nums, target) {
    var res = nums[0] + nums[1] + nums[2];
    nums.sort((a, b) => (a - b));
    for (var i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      let l = i + 1;
      let r = nums.length - 1;
      while (l < r) {
        let sum = nums[i] + nums[l] + nums[r];
        if (sum < target) {
          l++;
        } else if (sum > target) {
          r--;
        } else {
          return sum;
        }
        if (Math.abs(sum - target) < Math.abs(res - target)){
            res = sum;
        } 
      }
    }
    return res;
  };

 let value = threeSumClosest(nums , target)
 console.log(value)

