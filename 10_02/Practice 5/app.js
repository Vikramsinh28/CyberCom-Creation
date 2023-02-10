const nums = [1,2,3];


var subsetsWithDup = function(nums) {
    const output = [];
    nums.sort((a,b)=>a-b)
    
    function createSubsets(start, list){  // 0 , []
        if(start>nums.length) return;   // 0 > 3 x
        output.push([...list]);
        
        for(let i = start;i<nums.length;i++){    // 0  3
            if(i> start && nums[i-1] === nums[i]){
               continue;
            }
            list.push(nums[i]);
            createSubsets(i+1, list);
            list.pop();
        }
    }
    
    createSubsets(0, []);
    console.log(output);
};

subsetsWithDup(nums);