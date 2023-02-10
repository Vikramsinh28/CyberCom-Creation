let nums = [3 ,4 ,-1 ,1]
// op 3 


var firstMissingPositive = function(nums) {
    let sortedArray=[-1];
	//in this loop I am adding the positive digits into the index that equals to their value.
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            sortedArray[nums[i]]=nums[i];
        }
    }
    console.log(sortedArray)
	//then here I am looking for the first empty element of that array which is the answer
    for(let j=0;j<sortedArray.length;j++){
        if(!sortedArray[j]){
            return j;
        }
    }
    return sortedArray.length;
};

console.log(firstMissingPositive(nums))