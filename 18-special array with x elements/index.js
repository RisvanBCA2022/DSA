//1608

var specialArray = function(nums) {
    nums.sort((a,b) => a-b);
    let n = nums.length;
    for(let i=0; i<=n; i++){
        if(i === n || nums[i] >= n-i){
            if(i > 0 && nums[i-1] >= n-i){
                return -1;
            }
            return n-i;
        }
    }
    return -1;
    
};

console.log(specialArray([3,5]));
console.log(specialArray([0,0]));
console.log(specialArray([0,4,3,0,4]));