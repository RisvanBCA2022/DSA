// 2626
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0

var reduce = function(nums, fn, init) {
    let accumulator=init
    if(nums.length==0){
        return init
    }
    for(let i=0;i<nums.length;i++){
        accumulator=fn(accumulator,nums[i])
    }
    return accumulator
};

console.log(reduce(nums,fn,init))